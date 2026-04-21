const LAPTOP_MODELS = ['FZ-55', 'CF-54', 'CF-31', 'CF-19', 'S410', 'V110', '5420', '5424', '5430', 'S14I', 'S15', 'Z14I', 'S510', 'B360'];
const TABLET_MODELS = ['CF-20', 'CF-33', 'FZ-G1', 'FZ-G2', 'F110', 'K120', '7220', 'R8', 'R11', 'U11'];
const ALLOW_UNKNOWN_FILTERS = true;
const AUTO_RECOVERY_MIN_RESULTS = 3;
const BUDGET_ELASTICITY_FACTOR = 1.15;
const BUDGET_ELASTICITY_STEP = 50;

const questions = [
    {
        key: 'condition',
        question: 'Are you interested in new or refurbished rugged computers?',
        options: ['new', 'refurbished', 'either'],
        skipValues: ['either'],
    },
        {
        key: 'formFactor',
        question: 'What type of computer are you looking for?',
        options: ['laptop', 'tablet / 2-in-1', 'either'],
        skipValues: ['either'],
        valueMap: {
            'tablet / 2-in-1': 'tablet',
        },
    },
    {
        key: 'ipDust',
        question: 'Do you plan on using this computer in a dusty/dirty/sandy environment?',
        options: ['yes', 'no'],
        skipValues: ['no'],
    },
    {
        key: 'ipWater',
        question: 'Do you plan on using this computer in a wet/rainy/oily/greasey environment?',
        options: ['yes', 'no'],
        skipValues: ['no'],
    },
    {
        key: 'touchscreen',
        question: 'Do you need a touch screen?',
        options: ['yes', 'no'],
        skipValues: ['no'],
    },
        {
            key: 'portsNeeded',
            question: 'Do you need any specific ports?',
            options: ['yes', 'no'],
            type: 'gate',
            followupKeys: ['ports', 'portCounts'],
        },
        {
            key: 'ports',
            question: 'Which specific ports do you need? (Select all that apply)',
            options: ['USB-C', 'USB-A', 'HDMI', 'DisplayPort', 'Serial', 'RJ-45', 'SD', 'microSD', 'Docking', 'VGA', 'Audio'],
            skipValues: [],
            multiSelect: true,
            parentGateKey: 'portsNeeded',
            valueMap: {
                'USB-C': 'usb-c',
                'USB-A': 'usb-a',
                HDMI: 'hdmi',
                DisplayPort: 'display',
                Serial: 'serial',
                'RJ-45': 'rj-45',
                SD: 'sd',
                microSD: 'microsd',
                Docking: 'docking',
                VGA: 'vga',
                Audio: 'audio',
            },
        },
        {
            key: 'portCounts',
            question: 'How many of each selected port do you need? (Minimum)',
            type: 'portCounts',
            parentGateKey: 'portsNeeded',
        },
        {
            key: 'modulesNeeded',
            question: 'Do you need any built-in modules?',
            options: ['yes', 'no'],
            type: 'gate',
            followupKeys: ['modules'],
        },
        {
            key: 'modules',
            question: 'Which built-in modules do you need? (Select all that apply)',
            options: ['GPS', 'Barcode', 'Smart Card', 'Fingerprint'],
            skipValues: [],
            multiSelect: true,
            parentGateKey: 'modulesNeeded',
            valueMap: {
                GPS: 'gps',
                Barcode: 'barcode',
                'Smart Card': 'smart card',
                Fingerprint: 'fingerprint',
            },
        },

    {
        key: 'price', question: 'What is your budget range?', type: 'range',
    },
];
let currentQuestionIndex = 0;
let recommendedProducts = [];
let filteredProducts = [];
const productDomMap = new Map();
const multiSelectState = {};
const quizHistory = [];
const budgetState = { min: null, max: null };
let portCountRequirements = {};
const selectionsState = {};
let lastLimitingCriteria = [];
let skippedFromIndex = null;
let isMatchCountHovered = false;
let lastRecoveryContext = null;
let zeroMatchModalResolver = null;

function ensureZeroMatchModalStyles() {
    if (document.getElementById('quiz-zero-match-modal-styles')) {
        return;
    }

    const style = document.createElement('style');
    style.id = 'quiz-zero-match-modal-styles';
    style.textContent = `
        .quiz-zero-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            padding: 16px;
        }

        .quiz-zero-modal-overlay.is-open {
            display: flex;
        }

        .quiz-zero-modal {
            width: 100%;
            max-width: 560px;
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
            border: 1px solid #ddd;
            overflow: hidden;
        }

        .quiz-zero-modal__header {
            background: linear-gradient(135deg, #dc3522, #b92b1e);
            color: #fff;
            padding: 14px 16px;
            font-weight: 700;
            font-size: 1rem;
            letter-spacing: 0.01em;
        }

        .quiz-zero-modal__body {
            padding: 16px;
            color: #222;
            line-height: 1.45;
            font-size: 0.95rem;
        }

        .quiz-zero-modal__actions {
            display: grid;
            gap: 10px;
            padding: 0 16px 16px;
            grid-template-columns: 1fr;
        }

        .quiz-zero-modal__actions .button {
            width: 100%;
            text-align: center;
            justify-content: center;
        }

        .quiz-zero-modal__actions .button--danger {
            background: #dc3522;
            border-color: #dc3522;
            color: #fff;
        }

        .quiz-zero-modal__actions .button--danger:hover,
        .quiz-zero-modal__actions .button--danger:focus {
            background: #b92b1e;
            border-color: #b92b1e;
            color: #fff;
        }
    `;

    document.head.appendChild(style);
}

function ensureZeroMatchModal() {
    ensureZeroMatchModalStyles();

    let overlay = document.getElementById('quiz-zero-match-modal');
    if (overlay) {
        return overlay;
    }

    overlay = document.createElement('div');
    overlay.id = 'quiz-zero-match-modal';
    overlay.className = 'quiz-zero-modal-overlay';
    overlay.innerHTML = `
        <div class="quiz-zero-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-zero-modal-title">
            <div id="quiz-zero-modal-title" class="quiz-zero-modal__header">This choice results in 0 matches</div>
            <div class="quiz-zero-modal__body">
                You can keep this requirement, jump to closest matches now, or skip this question and continue the quiz.
            </div>
            <div class="quiz-zero-modal__actions">
                <button type="button" class="button button--danger" data-zero-decision="keep">Keep this strict requirement</button>
                <button type="button" class="button button--primary" data-zero-decision="closest">Show closest matches now</button>
                <button type="button" class="button button--secondary" data-zero-decision="skip">Skip this question</button>
            </div>
        </div>
    `;

    overlay.addEventListener('click', event => {
        if (event.target === overlay) {
            closeZeroMatchModal('skip');
        }
    });

    overlay.querySelectorAll('[data-zero-decision]').forEach(button => {
        button.addEventListener('click', () => {
            const decision = button.getAttribute('data-zero-decision') || 'skip';
            closeZeroMatchModal(decision);
        });
    });

    document.body.appendChild(overlay);
    return overlay;
}

function openZeroMatchModal() {
    const overlay = ensureZeroMatchModal();
    overlay.classList.add('is-open');
}

function closeZeroMatchModal(decision) {
    const overlay = document.getElementById('quiz-zero-match-modal');
    if (overlay) {
        overlay.classList.remove('is-open');
    }

    if (zeroMatchModalResolver) {
        const resolve = zeroMatchModalResolver;
        zeroMatchModalResolver = null;
        resolve(decision || 'skip');
    }
}

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

function normalizeValue(value) {
    return String(value || '').trim().toLowerCase();
}

function decodeHtmlEntities(value) {
    return String(value || '')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

function parseCustomFieldsRaw(raw) {
    const source = String(raw || '').trim();
    if (!source) {
        return [];
    }

    const attempts = [source, decodeHtmlEntities(source)];
    for (const attempt of attempts) {
        try {
            const parsed = JSON.parse(attempt);
            if (Array.isArray(parsed)) {
                return parsed;
            }
        } catch (error) {
            // Fall through to regex-based parsing.
        }
    }

    const fallback = [];
    const regexes = [
        /&quot;name&quot;:\s*&quot;([^&]*)&quot;\s*,\s*&quot;value&quot;:\s*&quot;([\s\S]*?)&quot;(?=\s*\}|\s*,\s*&quot;id&quot;)/g,
        /"name"\s*:\s*"([^"\\]*)"\s*,\s*"value"\s*:\s*"([\s\S]*?)"(?=\s*\}|\s*,\s*"id")/g,
    ];

    regexes.forEach(regex => {
        let match;
        while ((match = regex.exec(source)) !== null) {
            const name = decodeHtmlEntities(match[1]);
            const value = decodeHtmlEntities(match[2]);
            if (name) {
                fallback.push({ name, value });
            }
        }
    });

    return fallback;
}

function normalizeList(list) {
    if (!list) {
        return [];
    }
    if (Array.isArray(list)) {
        return list.map(item => normalizeValue(item)).filter(Boolean);
    }
    return normalizeList(String(list).split(/[,;/]+/));
}

function normalizeYesNo(value) {
    const normalized = normalizeValue(value);
    if (!normalized) {
        return null;
    }
    if (normalized.includes('yes') || normalized.includes('true')) {
        return 'yes';
    }
    if (normalized.includes('no') || normalized.includes('none') || normalized.includes('false')) {
        return 'no';
    }
    return null;
}

function normalizePortText(text) {
    return String(text || '')
        .toLowerCase()
        .replace(/\u00a0/g, ' ')
        .replace(/[™®]/g, '')
        .replace(/\u00d7/g, 'x')
        .replace(/[^a-z0-9x*]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function cloneMultiSelectState(state) {
    const clone = {};
    Object.keys(state).forEach(key => {
        clone[key] = Array.from(state[key]);
    });
    return clone;
}

function restoreMultiSelectState(snapshot) {
    Object.keys(multiSelectState).forEach(key => {
        delete multiSelectState[key];
    });
    Object.keys(snapshot || {}).forEach(key => {
        multiSelectState[key] = new Set(snapshot[key]);
    });
}

function cloneSelectionsState(state) {
    return JSON.parse(JSON.stringify(state || {}));
}

function pushHistory() {
    const filteredIds = filteredProducts.map(product => product.id).filter(id => id !== null && typeof id !== 'undefined');
    quizHistory.push({
        questionIndex: currentQuestionIndex,
        filteredIds,
        filteredIsEmpty: filteredProducts.length === 0,
        filteredIsAll: filteredProducts.length === recommendedProducts.length,
        multiSelect: cloneMultiSelectState(multiSelectState),
        budgetMin: budgetState.min,
        budgetMax: budgetState.max,
        portCounts: { ...portCountRequirements },
        selections: cloneSelectionsState(selectionsState),
    });
}

function getFilteredByIds(ids) {
    const idSet = new Set(ids);
    return recommendedProducts.filter(product => idSet.has(product.id));
}

function goBack() {
    if (quizHistory.length === 0) {
        return;
    }
    const previous = quizHistory.pop();
    currentQuestionIndex = previous.questionIndex;
    const baseState = quizHistory.length > 0 ? quizHistory[quizHistory.length - 1] : null;
    if (!baseState) {
        filteredProducts = [...recommendedProducts];
    } else if (baseState.filteredIsEmpty) {
        filteredProducts = [];
    } else if (baseState.filteredIsAll) {
        filteredProducts = [...recommendedProducts];
    } else {
        filteredProducts = getFilteredByIds(baseState.filteredIds);
    }
    restoreMultiSelectState(previous.multiSelect);
    budgetState.min = previous.budgetMin;
    budgetState.max = previous.budgetMax;
    portCountRequirements = { ...previous.portCounts };
    Object.keys(selectionsState).forEach(key => {
        delete selectionsState[key];
    });
    Object.assign(selectionsState, previous.selections || {});
    resultContainer.innerHTML = '';
    displayQuestion();
}

function formatBudgetSummary(value) {
    if (value === null || typeof value === 'undefined') {
        return 'Any';
    }
    return `$${value}`;
}

function formatSelectionLabel(question, selection) {
    if (question.type === 'range') {
        const minValue = selection && typeof selection.min !== 'undefined' ? selection.min : null;
        const maxValue = selection && typeof selection.max !== 'undefined' ? selection.max : null;
        if (minValue !== null && maxValue !== null) {
            return `${formatBudgetSummary(minValue)} - ${formatBudgetSummary(maxValue)}`;
        }
        if (minValue !== null) {
            return `${formatBudgetSummary(minValue)}+`;
        }
        if (maxValue !== null) {
            return `Up to ${formatBudgetSummary(maxValue)}`;
        }
        return 'Any';
    }
    if (question.type === 'portCounts') {
        const entries = Object.entries(selection || {}).filter(([, count]) => count > 0);
        if (entries.length === 0) {
            return 'Any';
        }
        return entries.map(([label, count]) => `${label}: ${count}`).join(', ');
    }
    if (Array.isArray(selection)) {
        return selection.length > 0 ? selection.join(', ') : 'Any';
    }
    return selection || 'Any';
}

function formatMatchCount(count) {
    return `<span class="quiz-match-count__number">${count}</span> product${count === 1 ? '' : 's'} match so far`;
}

function updateMatchCountValue(count) {
    const matchCount = document.getElementById('quiz-match-count');
    if (matchCount) {
        matchCount.dataset.count = String(count);
        if (isMatchCountHovered) {
            matchCount.innerHTML = `<span class="quiz-match-count__number">${count}</span> Click to see your results.`;
        } else {
            matchCount.innerHTML = formatMatchCount(count);
        }
    }
}

function captureCurrentAnswerForPreview() {
    if (currentQuestionIndex >= questions.length) {
        return;
    }

    const question = questions[currentQuestionIndex];
    if (!question) {
        return;
    }

    if (question.type === 'range') {
        const minValue = document.getElementById('budget-min-input')?.value || '';
        const maxValue = document.getElementById('budget-max-input')?.value || '';
        const minBudget = parseBudgetValue(minValue) ?? null;
        const maxBudget = parseBudgetValue(maxValue);
        budgetState.min = minBudget;
        budgetState.max = maxBudget;
        selectionsState.price = { min: minBudget, max: maxBudget };
        return;
    }

    if (question.type === 'portCounts') {
        const portsQuestion = questions.find(item => item.key === 'ports');
        const requirements = {};
        const displayRequirements = {};
        const inputs = document.querySelectorAll('input[data-port-option]');
        for (const input of inputs) {
            const option = input.getAttribute('data-port-option');
            const rawValue = input.value.trim();
            if (!rawValue) {
                continue;
            }
            const count = parseInt(rawValue, 10);
            if (Number.isNaN(count) || count <= 0) {
                continue;
            }
            const mapped = portsQuestion && portsQuestion.valueMap && portsQuestion.valueMap[option]
                ? portsQuestion.valueMap[option]
                : option;
            requirements[normalizeValue(mapped)] = count;
            displayRequirements[option] = count;
        }
        portCountRequirements = { ...requirements };
        selectionsState.portCounts = { ...displayRequirements };
        return;
    }

    if (question.multiSelect) {
        selectionsState[question.key] = Array.from(multiSelectState[question.key] || []);
    }
}

function skipToResults() {
    if (skippedFromIndex === null) {
        skippedFromIndex = currentQuestionIndex;
    }
    captureCurrentAnswerForPreview();
    recomputeFilteredProducts();
    currentQuestionIndex = questions.length;
    displayResults();
}

function getMultiSelectMatchCount(question, selections, baseProducts) {
    const mappedValues = selections.map(value =>
        question.valueMap && question.valueMap[value]
            ? question.valueMap[value]
            : value
    );
    const normalizedValues = mappedValues.map(value => normalizeValue(value));
    const skipValues = (question.skipValues || []).map(item => normalizeValue(item));

    if (normalizedValues.length === 0 || normalizedValues.some(value => skipValues.includes(value))) {
        return baseProducts.length;
    }

    return baseProducts.filter(result => {
        const resultValue = result[question.key];
        if (resultValue === null || typeof resultValue === 'undefined') {
            return ALLOW_UNKNOWN_FILTERS;
        }
        if (Array.isArray(resultValue)) {
            const normalizedResult = resultValue.map(item => normalizeValue(item));
            return normalizedValues.every(value => normalizedResult.includes(value));
        }
        return normalizedValues.includes(normalizeValue(resultValue));
    }).length;
}

function getBudgetMatchCount(minValue, maxValue, baseProducts) {
    const minBudget = parseBudgetValue(minValue) ?? 0;
    const maxBudget = parseBudgetValue(maxValue);

    return (baseProducts || []).filter(result => {
        if (result.price === null) {
            return true;
        }
        if (minBudget !== null && result.price < minBudget) {
            return false;
        }
        if (maxBudget !== null && result.price > maxBudget) {
            return false;
        }
        return true;
    }).length;
}

function getPortCountMatchCount(requirements, baseProducts) {
    const keys = Object.keys(requirements || {});
    if (!keys.length) {
        return (baseProducts || []).length;
    }
    return (baseProducts || []).filter(result => {
        const countMap = result.portCounts || {};
        return keys.every(key => {
            const required = requirements[key];
            const actual = countMap[key];
            if (typeof actual === 'undefined' || actual === null) {
                return true;
            }
            return actual >= required;
        });
    }).length;
}

function applyPortCountFilter(products, requirements) {
    const keys = Object.keys(requirements || {});
    if (!keys.length) {
        return products;
    }
    return products.filter(result => {
        const countMap = result.portCounts || {};
        return keys.every(key => {
            const required = requirements[key];
            const actual = countMap[key];
            if (typeof actual === 'undefined' || actual === null) {
                return true;
            }
            return actual >= required;
        });
    });
}

function applySingleSelectFilter(products, key, selectedValue) {
    const normalizedValue = normalizeValue(selectedValue);
    return products.filter(result => {
        const resultValue = result[key];
        if (resultValue === null || typeof resultValue === 'undefined') {
            return ALLOW_UNKNOWN_FILTERS;
        }
        if (Array.isArray(resultValue)) {
            return resultValue.map(item => normalizeValue(item)).includes(normalizedValue);
        }
        return normalizeValue(resultValue) === normalizedValue;
    });
}

function mapSingleSelectValue(question, selection) {
    if (!question || typeof selection === 'undefined' || selection === null) {
        return selection;
    }
    if (question.valueMap && question.valueMap[selection]) {
        return question.valueMap[selection];
    }
    return selection;
}

function applyMultiSelectFilter(products, question, selections) {
    const mappedValues = selections.map(value =>
        question.valueMap && question.valueMap[value]
            ? question.valueMap[value]
            : value
    );
    const normalizedValues = mappedValues.map(value => normalizeValue(value));
    const skipValues = (question.skipValues || []).map(item => normalizeValue(item));

    if (normalizedValues.length === 0 || normalizedValues.some(value => skipValues.includes(value))) {
        return products;
    }

    return products.filter(result => {
        const resultValue = result[question.key];
        if (resultValue === null || typeof resultValue === 'undefined') {
            return ALLOW_UNKNOWN_FILTERS;
        }
        if (Array.isArray(resultValue)) {
            const normalizedResult = resultValue.map(item => normalizeValue(item));
            return normalizedValues.every(value => normalizedResult.includes(value));
        }
        return normalizedValues.includes(normalizeValue(resultValue));
    });
}

function applyBudgetFilter(products, minBudget, maxBudget) {
    return products.filter(result => {
        if (result.price === null) {
            return true;
        }
        if (minBudget !== null && result.price < minBudget) {
            return false;
        }
        if (maxBudget !== null && result.price > maxBudget) {
            return false;
        }
        return true;
    });
}

function roundBudgetUp(value) {
    if (value === null || typeof value === 'undefined') {
        return null;
    }
    return Math.ceil(value / BUDGET_ELASTICITY_STEP) * BUDGET_ELASTICITY_STEP;
}

function getExpandedBudgetMax() {
    if (budgetState.max === null || typeof budgetState.max === 'undefined') {
        return null;
    }
    const expanded = roundBudgetUp(budgetState.max * BUDGET_ELASTICITY_FACTOR);
    if (expanded <= budgetState.max) {
        return roundBudgetUp(budgetState.max + BUDGET_ELASTICITY_STEP);
    }
    return expanded;
}

function computeProductsFromSelections(options = {}) {
    const ignoreKeys = options.ignoreKeys || new Set();
    const budgetMaxOverride = typeof options.budgetMaxOverride === 'number' ? options.budgetMaxOverride : null;
    let products = [...recommendedProducts];

    questions.forEach(question => {
        const selection = selectionsState[question.key];
        if (typeof selection === 'undefined') {
            return;
        }
        if (ignoreKeys.has(question.key)) {
            return;
        }
        if (ignoreKeys.has('ports') && question.key === 'portCounts') {
            return;
        }
        if (question.parentGateKey && normalizeValue(selectionsState[question.parentGateKey]) !== 'yes') {
            return;
        }

        if (question.type === 'range') {
            const minBudget = budgetState.min;
            const maxBudget = budgetMaxOverride !== null ? budgetMaxOverride : budgetState.max;
            products = applyBudgetFilter(products, minBudget, maxBudget);
            return;
        }

        if (question.type === 'gate') {
            return;
        }

        if (question.type === 'portCounts') {
            products = applyPortCountFilter(products, portCountRequirements);
            return;
        }

        if (question.multiSelect) {
            products = applyMultiSelectFilter(products, question, selection || []);
            return;
        }

        const mappedSelection = mapSingleSelectValue(question, selection);
        const normalizedValue = normalizeValue(mappedSelection);
        const skipValues = (question.skipValues || []).map(item => normalizeValue(item));
        if (!skipValues.includes(normalizedValue)) {
            products = applySingleSelectFilter(products, question.key, mappedSelection);
        }
    });

    return products;
}

function buildRecoveryContext() {
    if (filteredProducts.length > 0 || recommendedProducts.length === 0) {
        return null;
    }

    const limiting = getLimitingCriteria();
    const removedFilters = [];
    const ignoreKeys = new Set();
    let budgetExpandedTo = null;
    let recoveredProducts = [];

    const hasBudgetSelection = typeof selectionsState.price !== 'undefined';
    const budgetRemovalMatches = hasBudgetSelection
        ? computeProductsFromSelections({ ignoreKeys: new Set(['price']) }).length
        : 0;
    const shouldTryBudgetExpansion = hasBudgetSelection && budgetRemovalMatches > filteredProducts.length;

    const expandedBudget = getExpandedBudgetMax();
    if (shouldTryBudgetExpansion && expandedBudget !== null) {
        recoveredProducts = computeProductsFromSelections({ budgetMaxOverride: expandedBudget });
        if (recoveredProducts.length > 0) {
            budgetExpandedTo = expandedBudget;
            if (recoveredProducts.length >= AUTO_RECOVERY_MIN_RESULTS) {
                return {
                    products: recoveredProducts,
                    removedFilters,
                    budgetExpandedTo,
                };
            }
        }
    }

    for (const criterion of limiting) {
        ignoreKeys.add(criterion.key);
        removedFilters.push(criterion.label);
        recoveredProducts = computeProductsFromSelections({
            ignoreKeys,
            budgetMaxOverride: budgetExpandedTo !== null ? budgetExpandedTo : expandedBudget,
        });

        if (recoveredProducts.length >= AUTO_RECOVERY_MIN_RESULTS || recoveredProducts.length > 0) {
            if (budgetExpandedTo === null && expandedBudget !== null) {
                budgetExpandedTo = expandedBudget;
            }
            break;
        }
    }

    if (recoveredProducts.length === 0) {
        return null;
    }

    return {
        products: recoveredProducts,
        removedFilters,
        budgetExpandedTo,
    };
}

function promptZeroResultChoice() {
    if (zeroMatchModalResolver) {
        return Promise.resolve('skip');
    }

    return new Promise(resolve => {
        zeroMatchModalResolver = resolve;
        openZeroMatchModal();
    });
}

function goToResultsAfterCurrentStep() {
    if (skippedFromIndex === null) {
        skippedFromIndex = currentQuestionIndex;
    }
    currentQuestionIndex = questions.length;
    displayResults();
}

function formatSelectionsForAssistance() {
    const lines = ['Auto Selection Assistance summary:'];

    questions.forEach(question => {
        const selection = selectionsState[question.key];
        if (typeof selection === 'undefined') {
            return;
        }
        lines.push(`- ${question.question}: ${formatSelectionLabel(question, selection)}`);
    });

    lines.push(`- Strict matches found: ${filteredProducts.length}`);
    if (lastRecoveryContext && lastRecoveryContext.products) {
        lines.push(`- Closest matches shown: ${lastRecoveryContext.products.length}`);
        if (lastRecoveryContext.budgetExpandedTo !== null) {
            lines.push(`- Budget expanded to: $${lastRecoveryContext.budgetExpandedTo}`);
        }
        if (lastRecoveryContext.removedFilters.length > 0) {
            lines.push(`- Filters relaxed: ${lastRecoveryContext.removedFilters.join(' | ')}`);
        }
    }

    lines.push(`- Replay quiz: ${buildReplayLink()}`);
    lines.push(`- Page URL: ${window.location.href}`);
    return lines.join('\n');
}

function toBase64Url(value) {
    const encoded = btoa(unescape(encodeURIComponent(String(value || ''))));
    return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(value) {
    const normalized = String(value || '').replace(/-/g, '+').replace(/_/g, '/');
    const padding = '='.repeat((4 - (normalized.length % 4 || 4)) % 4);
    return decodeURIComponent(escape(atob(normalized + padding)));
}

function buildReplayStatePayload() {
    return {
        v: 1,
        selections: cloneSelectionsState(selectionsState),
        budgetMin: budgetState.min,
        budgetMax: budgetState.max,
        portCounts: { ...portCountRequirements },
        currentQuestionIndex,
        skippedFromIndex,
    };
}

function buildReplayLink() {
    const payload = buildReplayStatePayload();
    const serialized = JSON.stringify(payload);
    const encoded = toBase64Url(serialized);
    const url = new URL(window.location.href);
    url.searchParams.set('quizState', encoded);
    return url.toString();
}

function restoreStateFromQueryParam() {
    const params = new URLSearchParams(window.location.search);
    const encodedState = params.get('quizState');
    if (!encodedState) {
        return false;
    }

    try {
        const parsed = JSON.parse(fromBase64Url(encodedState));
        if (!parsed || typeof parsed !== 'object') {
            return false;
        }

        Object.keys(multiSelectState).forEach(key => {
            delete multiSelectState[key];
        });
        Object.keys(selectionsState).forEach(key => {
            delete selectionsState[key];
        });

        Object.assign(selectionsState, parsed.selections || {});
        budgetState.min = parsed.budgetMin === null || typeof parsed.budgetMin === 'undefined'
            ? null
            : parsed.budgetMin;
        budgetState.max = parsed.budgetMax === null || typeof parsed.budgetMax === 'undefined'
            ? null
            : parsed.budgetMax;
        portCountRequirements = { ...(parsed.portCounts || {}) };
        skippedFromIndex = typeof parsed.skippedFromIndex === 'number' ? parsed.skippedFromIndex : null;

        questions.forEach(question => {
            if (!question.multiSelect) {
                return;
            }
            const selection = selectionsState[question.key];
            if (Array.isArray(selection)) {
                multiSelectState[question.key] = new Set(selection);
            }
        });

        filteredProducts = [...recommendedProducts];
        recomputeFilteredProducts();

        if (typeof parsed.currentQuestionIndex === 'number') {
            currentQuestionIndex = Math.max(0, Math.min(parsed.currentQuestionIndex, questions.length));
        } else {
            currentQuestionIndex = questions.length;
        }

        return true;
    } catch (error) {
        return false;
    }
}

function emailSelectionsSummary() {
    const recipients = [
        'djaneka@bobjohnson.com',
        'webmaster@bobjohnson.com',
    ];
    const subject = 'AutoSelection Form Converted to Selection Assistance Summary';
    const timestamp = new Date().toLocaleString();
    const body = `Submitted: ${timestamp}\n\n${formatSelectionsForAssistance()}`;
    const mailto = `mailto:${recipients.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
}

function recomputeFilteredProducts() {
    filteredProducts = computeProductsFromSelections();
}

function clearGateFollowups(question) {
    const followupKeys = (question && question.followupKeys) || [];
    followupKeys.forEach(key => {
        delete selectionsState[key];
        if (multiSelectState[key]) {
            multiSelectState[key].clear();
        }
        if (key === 'ports') {
            portCountRequirements = {};
            delete selectionsState.portCounts;
        }
        if (key === 'portCounts') {
            portCountRequirements = {};
        }
    });
}

function getNextQuestionIndex(fromIndex) {
    let nextIndex = fromIndex + 1;
    while (nextIndex < questions.length) {
        const candidate = questions[nextIndex];
        if (!candidate.parentGateKey) {
            break;
        }
        const gateAnswer = normalizeValue(selectionsState[candidate.parentGateKey]);
        if (gateAnswer === 'yes') {
            break;
        }
        nextIndex++;
    }
    return nextIndex;
}

function clearSelectionFilter(key) {
    const question = questions.find(item => item.key === key);

    if (key === 'ports') {
        if (multiSelectState.ports) {
            multiSelectState.ports.clear();
        }
        delete selectionsState.ports;
        portCountRequirements = {};
        delete selectionsState.portCounts;
    } else if (key === 'portCounts') {
        portCountRequirements = {};
        delete selectionsState.portCounts;
    } else if (question && question.type === 'range') {
        budgetState.min = null;
        budgetState.max = null;
        delete selectionsState.price;
    } else if (question && question.multiSelect) {
        if (multiSelectState[key]) {
            multiSelectState[key].clear();
        }
        delete selectionsState[key];
    } else if (question) {
        delete selectionsState[key];
    }

    recomputeFilteredProducts();
    updateMatchCountValue(filteredProducts.length);
    updateSummary();
    displayResults();
}

function getLimitingCriteria() {
    const selections = selectionsState || {};
    const results = [];
    const questionMap = questions.reduce((acc, question) => {
        acc[question.key] = question;
        return acc;
    }, {});

    const applyAllExcept = ignoreKey => {
        let products = [...recommendedProducts];

        questions.forEach(question => {
            if (question.key === ignoreKey) {
                return;
            }
            if (ignoreKey === 'ports' && question.key === 'portCounts') {
                return;
            }
            const selection = selections[question.key];
            if (typeof selection === 'undefined') {
                return;
            }
            if (question.parentGateKey && normalizeValue(selectionsState[question.parentGateKey]) !== 'yes') {
                return;
            }

            if (question.type === 'range') {
                const minValue = selection && typeof selection.min !== 'undefined' ? selection.min : null;
                const maxValue = selection && typeof selection.max !== 'undefined' ? selection.max : null;
                products = applyBudgetFilter(products, minValue, maxValue);
                return;
            }

            if (question.type === 'gate') {
                return;
            }

            if (question.type === 'portCounts') {
                products = applyPortCountFilter(products, portCountRequirements);
                return;
            }

            if (question.multiSelect) {
                products = applyMultiSelectFilter(products, question, selection || []);
                return;
            }

            const mappedSelection = mapSingleSelectValue(question, selection);
            const normalizedValue = normalizeValue(mappedSelection);
            const skipValues = (question.skipValues || []).map(item => normalizeValue(item));
            if (!skipValues.includes(normalizedValue)) {
                products = applySingleSelectFilter(products, question.key, mappedSelection);
            }
        });

        return products;
    };

    Object.keys(selections).forEach(key => {
        const question = questionMap[key];
        if (!question) {
            return;
        }
        const selection = selections[key];
        if (typeof selection === 'undefined') {
            return;
        }
        if (question.multiSelect && Array.isArray(selection) && selection.length === 0) {
            return;
        }
        const skipValues = (question.skipValues || []).map(item => normalizeValue(item));
        if (skipValues.includes(normalizeValue(selection))) {
            return;
        }
        if (question.type === 'gate') {
            return;
        }
        if (question.parentGateKey && normalizeValue(selectionsState[question.parentGateKey]) !== 'yes') {
            return;
        }
        if (question.type === 'portCounts' && Object.keys(portCountRequirements || {}).length === 0) {
            return;
        }

        const remaining = applyAllExcept(key);
        results.push({
            key,
            label: `${question.question} (${formatSelectionLabel(question, selection)})`,
            count: remaining.length,
        });
    });

    return results.sort((a, b) => b.count - a.count);
}

function updateSummary() {
    const summary = document.getElementById('quiz-summary');
    if (!summary) {
        return;
    }
    summary.innerHTML = '';

    const title = document.createElement('h3');
    title.classList.add('quiz-summary-title');
    title.textContent = 'Your Selections';
    summary.appendChild(title);

    const list = document.createElement('ul');
    list.classList.add('quiz-summary-list');

    questions.forEach(question => {
        const selection = selectionsState[question.key];
        if (typeof selection === 'undefined') {
            return;
        }
        const item = document.createElement('li');
        item.classList.add('quiz-summary-item');

        const label = document.createElement('span');
        label.classList.add('quiz-summary-label');
        label.textContent = question.question;

        const value = document.createElement('span');
        value.classList.add('quiz-summary-value');
        value.textContent = formatSelectionLabel(question, selection);

        item.appendChild(label);
        item.appendChild(value);
        list.appendChild(item);
    });

    if (!list.childNodes.length) {
        const empty = document.createElement('div');
        empty.classList.add('quiz-summary-empty');
        empty.textContent = 'No selections yet.';
        summary.appendChild(empty);
        return;
    }

    summary.appendChild(list);
}

function updateLimitingSelectionsList(items) {
    const container = document.getElementById('quiz-limiting');
    const toggle = document.getElementById('quiz-limiting-toggle');
    if (!container || !toggle) {
        return;
    }

    container.innerHTML = '';

    if (!items || items.length === 0) {
        toggle.classList.add('is-hidden');
        container.classList.add('is-collapsed');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'View limiting selections';
        return;
    }

    toggle.classList.remove('is-hidden');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'View limiting selections';

    const hint = document.createElement('div');
    hint.classList.add('quiz-no-results-hint');
    hint.textContent = 'Likely limiting selection(s):';
    container.appendChild(hint);

    const list = document.createElement('ul');
    list.classList.add('quiz-no-results-list');
    items.forEach(item => {
        const entry = document.createElement('li');
        const label = document.createElement('span');
        label.textContent = item.label;

        const count = document.createElement('span');
        count.classList.add('quiz-no-results-count');
        count.innerHTML = `<span class="quiz-match-count__number">${item.count}</span> match${item.count === 1 ? '' : 'es'} without this`;

        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('quiz-no-results-clear', 'button', 'button--secondary');
        button.textContent = 'Remove filter';
        button.addEventListener('click', () => {
            clearSelectionFilter(item.key);
        });

        entry.appendChild(label);
        entry.appendChild(count);
        entry.appendChild(button);
        list.appendChild(entry);
    });
    container.appendChild(list);
    container.classList.add('is-collapsed');
}

function setSummaryToggleVisibility(shouldShow) {
    const toggle = document.getElementById('quiz-summary-toggle');
    if (!toggle) {
        return;
    }
    toggle.classList.toggle('is-hidden', !shouldShow);
}

function initSummaryToggle() {
    const toggle = document.getElementById('quiz-summary-toggle');
    const summary = document.getElementById('quiz-summary');
    if (!toggle || !summary) {
        return;
    }
    toggle.addEventListener('click', () => {
        const isCollapsed = summary.classList.contains('is-collapsed');
        if (isCollapsed) {
            summary.classList.remove('is-collapsed');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.textContent = 'Hide selections';
        } else {
            summary.classList.add('is-collapsed');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = 'View selections';
        }
    });
}

function initLimitingToggle() {
    const toggle = document.getElementById('quiz-limiting-toggle');
    const container = document.getElementById('quiz-limiting');
    if (!toggle || !container) {
        return;
    }
    toggle.addEventListener('click', () => {
        const isCollapsed = container.classList.contains('is-collapsed');
        if (isCollapsed) {
            container.classList.remove('is-collapsed');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.textContent = 'Hide limiting selections';
        } else {
            container.classList.add('is-collapsed');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = 'View limiting selections';
        }
    });
}

function findPortCount(source, aliases) {
    let maxCount = null;
    aliases.forEach(alias => {
        const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const patterns = [
            new RegExp(`(\\d+)\\s*[x\\*]\\s*${escaped}`, 'i'),
            new RegExp(`${escaped}\\s*[x\\*]\\s*(\\d+)`, 'i'),
            new RegExp(`${escaped}\\s*\\(\\s*(\\d+)\\s*[x\\*]?\\s*\\)`, 'i'),
        ];
        patterns.forEach(pattern => {
            const match = source.match(pattern);
            if (match) {
                const count = parseInt(match[1], 10);
                if (!Number.isNaN(count)) {
                    maxCount = maxCount === null ? count : Math.max(maxCount, count);
                }
            }
        });
    });
    return maxCount;
}

function sumPortCounts(source, aliases) {
    let total = 0;
    aliases.forEach(alias => {
        const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const patterns = [
            new RegExp(`(\\d+)\\s*[x\\*]\\s*${escaped}`, 'gi'),
            new RegExp(`${escaped}\\s*[x\\*]\\s*(\\d+)`, 'gi'),
            new RegExp(`${escaped}\\s*\\(\\s*(\\d+)\\s*[x\\*]?\\s*\\)`, 'gi'),
        ];
        patterns.forEach(pattern => {
            const matches = source.matchAll(pattern);
            for (const match of matches) {
                const count = parseInt(match[1], 10);
                if (!Number.isNaN(count)) {
                    total += count;
                }
            }
        });
    });
    return total > 0 ? total : null;
}

function parsePortCountsFromText(text) {
    const normalized = normalizePortText(text);
    if (!normalized) {
        return {};
    }
    const counts = {};
    const withoutMicroHdmi = normalized.replace(/\bmicro hdmi\b/g, '');
    const withoutMicroSerial = normalized.replace(/\bmicro serial\b/g, '');
    const withoutMicroSd = normalized.replace(/\bmicro sd\b/g, '');
    const hasPort = (source, aliases) => aliases.some(alias => source.includes(alias));
    const lineHasExplicitCount = (line, aliases) => {
        return aliases.some(alias => {
            const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return new RegExp(`(\\d+)\\s*[x\\*]\\s*${escaped}|${escaped}\\s*[x\\*]\\s*(\\d+)`, 'i').test(line);
        });
    };
    const countPortMentions = (rawText, aliases) => {
        const parts = String(rawText || '').split(/<br\s*\/?\s*>|<\/?li>|<\/?p>|[\n,;]+/i);
        let count = 0;
        parts.forEach(part => {
            const chunk = normalizePortText(part);
            if (!chunk) {
                return;
            }
            if (aliases.some(alias => chunk.includes(alias)) && !lineHasExplicitCount(chunk, aliases)) {
                count += 1;
            }
        });
        return count;
    };

    const usbCAliases = [
        'usb c',
        'usb-c',
        'type c',
        'type-c',
        'usb type c',
        'usb type-c',
        'thunderbolt',
        'thunderbolt 3',
        'thunderbolt 4',
        'thunderbolt type-c',
    ];
    const usbC = sumPortCounts(normalized, usbCAliases);
    const usbCMentions = countPortMentions(text, usbCAliases);
    const usbCTotal = (usbC || 0) + usbCMentions;
    if (usbCTotal > 0) {
        counts['usb-c'] = usbCTotal;
    }
    const usbAAliases = [
        'usb a',
        'usb-a',
        'type a',
        'type-a',
        'usb type a',
        'usb type-a',
        'usb 2.0',
        'usb 2 0',
        'usb 3.0',
        'usb 3 0',
        'usb 3.1',
        'usb 3 1',
        'usb 3.2',
        'usb 3 2',
        'usb 3 2 gen1',
        'usb 3 2 gen2',
        'usb 3',
    ];
    const usbA = sumPortCounts(normalized, usbAAliases);
    const usbAMentions = countPortMentions(text, usbAAliases);
    const usbATotal = (usbA || 0) + usbAMentions;
    if (usbATotal > 0) {
        counts['usb-a'] = usbATotal;
    }
    const hdmiTotal = (sumPortCounts(withoutMicroHdmi, ['hdmi']) || 0)
        + countPortMentions(text, ['hdmi']);
    if (hdmiTotal > 0) {
        counts.hdmi = hdmiTotal;
    }
    const displayPortAliases = ['displayport', 'display port', 'mini displayport', 'mini display port'];
    const displayTotal = (sumPortCounts(normalized, displayPortAliases) || 0)
        + countPortMentions(text, displayPortAliases);
    if (displayTotal > 0) {
        counts.display = displayTotal;
    }
    const serialTotal = (sumPortCounts(withoutMicroSerial, ['serial']) || 0)
        + countPortMentions(text, ['serial']);
    if (serialTotal > 0) {
        counts.serial = serialTotal;
    }
    const rj45Aliases = ['rj-45', 'rj45', 'rj 45', 'lan', 'ethernet'];
    const rj45Total = (sumPortCounts(normalized, rj45Aliases) || 0)
        + countPortMentions(text, rj45Aliases);
    if (rj45Total > 0) {
        counts['rj-45'] = rj45Total;
    }
    const microsdTotal = (sumPortCounts(normalized, ['microsd', 'micro sd']) || 0)
        + countPortMentions(text, ['microsd', 'micro sd']);
    if (microsdTotal > 0) {
        counts.microsd = microsdTotal;
    }
    const sdTotal = (sumPortCounts(withoutMicroSd, ['sd']) || 0)
        + countPortMentions(text, ['sd']);
    if (sdTotal > 0) {
        counts.sd = sdTotal;
    }
    const dockingTotal = (sumPortCounts(normalized, ['docking', 'dock']) || 0)
        + countPortMentions(text, ['docking', 'dock']);
    if (dockingTotal > 0) {
        counts.docking = dockingTotal;
    }
    const vgaTotal = (sumPortCounts(normalized, ['vga']) || 0)
        + countPortMentions(text, ['vga']);
    if (vgaTotal > 0) {
        counts.vga = vgaTotal;
    }
    const audioTotal = (sumPortCounts(normalized, ['audio', 'headphone', 'headphone jack', 'headset']) || 0)
        + countPortMentions(text, ['audio', 'headphone', 'headphone jack', 'headset']);
    if (audioTotal > 0) {
        counts.audio = audioTotal;
    }

    return counts;
}

function formatBudgetInput(rawValue) {
    const cleaned = String(rawValue || '')
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*)\./g, '$1');
    if (!cleaned) {
        return '';
    }
    return `$${cleaned}`;
}

function parseBudgetValue(rawValue) {
    const cleaned = String(rawValue || '').replace(/[^0-9.]/g, '');
    if (!cleaned) {
        return null;
    }
    const parsed = parseFloat(cleaned);
    return Number.isNaN(parsed) ? null : parsed;
}

function toCustomFieldMap(customFields) {
    const fields = {};
    (customFields || []).forEach(field => {
        const key = normalizeValue(decodeHtmlEntities(field.name));
        if (!key) {
            return;
        }
        fields[key] = field.value;
    });
    return fields;
}

function findCustomFieldValue(customFieldMap, nameFragment) {
    const fragment = normalizeValue(nameFragment);
    const matchKey = Object.keys(customFieldMap).find(key => key.includes(fragment));
    return matchKey ? customFieldMap[matchKey] : null;
}

function findCustomFieldValues(customFieldMap, nameFragment) {
    const fragment = normalizeValue(nameFragment);
    return Object.keys(customFieldMap)
        .filter(key => key.includes(fragment))
        .map(key => customFieldMap[key]);
}

function normalizeConditionText(value) {
    const normalized = normalizeValue(value);
    if (!normalized) {
        return null;
    }
    if (normalized.includes('new') || normalized.includes('open box')) {
        return 'new';
    }
    if (normalized.includes('scratch') || normalized.includes('dent')) {
        return 'refurbished';
    }
    if (normalized.includes('refurb')) {
        return 'refurbished';
    }
    return normalized;
}

function inferCondition(name, conditionValue, customFieldMap) {
    const normalizedCondition = normalizeConditionText(conditionValue);
    if (normalizedCondition) {
        return normalizedCondition;
    }
    const customCondition = normalizeConditionText(findCustomFieldValue(customFieldMap, 'condition'));
    if (customCondition) {
        return customCondition;
    }
    return normalizeConditionText(name);
}

function inferFormFactorFromModel(modelValue, nameValue) {
    const modelSource = normalizeValue(modelValue || nameValue || '');
    if (!modelSource) {
        return null;
    }
    const normalizedLaptopModels = LAPTOP_MODELS.map(model => normalizeValue(model));
    const normalizedTabletModels = TABLET_MODELS.map(model => normalizeValue(model));
    if (normalizedLaptopModels.some(model => modelSource.includes(model))) {
        return ['laptop'];
    }
    if (normalizedTabletModels.some(model => modelSource.includes(model))) {
        return ['tablet'];
    }
    return null;
}

function parseIpRating(ipValue) {
    const normalized = normalizeValue(ipValue);
    const match = normalized.match(/ip\s*([0-9x])\s*([0-9x])/);
    if (!match) {
        return { dust: null, water: null };
    }
    const dustValue = match[1] === 'x' ? null : parseInt(match[1], 10);
    const waterValue = match[2] === 'x' ? null : parseInt(match[2], 10);
    return {
        dust: dustValue !== null && dustValue >= 6 ? 'yes' : dustValue !== null ? 'no' : null,
        water: waterValue !== null && waterValue >= 5 ? 'yes' : waterValue !== null ? 'no' : null,
    };
}

function inferBrightnessFromDisplay(displayValue) {
    const normalized = normalizeValue(displayValue);
    const match = normalized.match(/(\d{3,4})\s*nits/);
    if (!match) {
        return null;
    }
    const nits = parseInt(match[1], 10);
    return nits >= 500 ? 'bright / sunny' : null;
}

function parsePortsFromText(text) {
    const normalized = normalizePortText(text);
    if (!normalized) {
        return [];
    }
    const ports = new Set();
    if (normalized.includes('usb c') || normalized.includes('type c') || normalized.includes('thunderbolt')) {
        ports.add('usb-c');
    }
    if (normalized.includes('usb a') || normalized.includes('type a') || normalized.includes('usb 3') || normalized.includes('usb 2')) {
        ports.add('usb-a');
    }
    if (normalized.includes('hdmi') && !normalized.includes('micro hdmi') && !normalized.includes('micro-hdmi')) {
        ports.add('hdmi');
    }
    if (normalized.includes('displayport') || normalized.includes('display port')) {
        ports.add('display');
    }
    if (normalized.includes('serial') && !normalized.includes('micro serial') && !normalized.includes('micro-serial')) {
        ports.add('serial');
    }
    if (normalized.includes('rj-45') || normalized.includes('rj45') || normalized.includes('rj 45') || normalized.includes('lan') || normalized.includes('ethernet')) {
        ports.add('rj-45');
    }
    if (normalized.includes('microsd') || normalized.includes('micro sd')) {
        ports.add('microsd');
    }
    if (normalized.includes('sd')) {
        ports.add('sd');
    }
    if (normalized.includes('docking')) {
        ports.add('docking');
    }
    if (normalized.includes('vga')) {
        ports.add('vga');
    }
    if (normalized.includes('audio')
        || normalized.includes('headphone')
        || normalized.includes('headphone jack')
        || normalized.includes('headset')) {
        ports.add('audio');
    }
    return Array.from(ports);
}

function parseModulesFromText(text) {
    const normalized = normalizeValue(text);
    if (!normalized) {
        return [];
    }
    const modules = new Set();
    if (normalized.includes('gps')) {
        modules.add('gps');
    }
    if (normalized.includes('barcode')) {
        modules.add('barcode');
    }
    if (normalized.includes('smart card') || normalized.includes('smartcard')) {
        modules.add('smart card');
    }
    if (normalized.includes('fingerprint')) {
        modules.add('fingerprint');
    }
    return Array.from(modules);
}

function deriveAttributesFromCustomFields(customFieldMap) {
    const attributes = {};
    attributes.build = normalizeValue(findCustomFieldValue(customFieldMap, 'build')) || null;

    const ipRatingValue = findCustomFieldValue(customFieldMap, 'ingress protection rating')
        || findCustomFieldValue(customFieldMap, 'ip rating')
        || findCustomFieldValue(customFieldMap, 'ingress protection')
        || findCustomFieldValue(customFieldMap, 'ingress');
    const ipParsed = parseIpRating(ipRatingValue);
    attributes.ipDust = ipParsed.dust;
    attributes.ipWater = ipParsed.water;

    const milStdValue = findCustomFieldValue(customFieldMap, 'military standard protection ratings')
        || findCustomFieldValue(customFieldMap, 'mil-std')
        || findCustomFieldValue(customFieldMap, 'mil std');
    attributes.milStd = milStdValue ? 'yes' : null;

    attributes.touchscreen = normalizeYesNo(findCustomFieldValue(customFieldMap, 'touch screen') || findCustomFieldValue(customFieldMap, 'touchscreen'));

    const opticalValue = findCustomFieldValue(customFieldMap, 'optical drive');
    if (opticalValue) {
        const normalizedOptical = normalizeValue(opticalValue);
        attributes.opticalDrive = normalizedOptical.includes('none') || normalizedOptical.includes('no')
            ? 'no'
            : 'yes';
    } else {
        attributes.opticalDrive = null;
    }

    const displayBrightness = inferBrightnessFromDisplay(findCustomFieldValue(customFieldMap, 'display'));
    attributes.sunlightReadable = displayBrightness ? 'yes' : displayBrightness === null ? null : 'no';

    const connectionsValues = [
        ...findCustomFieldValues(customFieldMap, 'connections & expansion slots'),
        ...findCustomFieldValues(customFieldMap, 'connections and expansion slots'),
        ...findCustomFieldValues(customFieldMap, 'connections & expansion'),
        ...findCustomFieldValues(customFieldMap, 'connections and expansion'),
    ];
    const connectionText = connectionsValues.join(' ');
    attributes.ports = parsePortsFromText(connectionText);
    attributes.portCounts = parsePortCountsFromText(connectionText);

    const upgradeSlotsValue = findCustomFieldValue(customFieldMap, 'upgrade slots');
    const inputDevicesValues = findCustomFieldValues(customFieldMap, 'input devices');
    const modulesSource = [upgradeSlotsValue, ...inputDevicesValues].filter(Boolean).join(' ');
    attributes.modules = parseModulesFromText(modulesSource);

    return attributes;
}

function formatProductBase({
    id,
    brand,
    name,
    url,
    img,
    price,
    categories,
    customFields,
    conditionValue,
}) {
    const customFieldMap = toCustomFieldMap(customFields || []);
    const attributes = deriveAttributesFromCustomFields(customFieldMap);
    const modelValue = findCustomFieldValue(customFieldMap, 'model');
    const modelFormFactor = inferFormFactorFromModel(modelValue, name);
    const formFactor = modelFormFactor;

    return {
        id,
        brand: brand || 'Unknown',
        name,
        condition: inferCondition(name, conditionValue, customFieldMap),
        formFactor,
        build: attributes.build,
        ipDust: attributes.ipDust,
        ipWater: attributes.ipWater,
        milStd: attributes.milStd,
        touchscreen: attributes.touchscreen,
        sunlightReadable: attributes.sunlightReadable,
        opticalDrive: attributes.opticalDrive,
        ports: attributes.ports,
        portCounts: attributes.portCounts,
        modules: attributes.modules,
        price,
        url,
        img,
    };
}

function parseDomProduct(card) {
    const id = parseInt(card.getAttribute('data-entity-id'), 10) || null;
    const name = card.getAttribute('data-name') || '';
    const brand = card.getAttribute('data-product-brand') || 'Unknown';
    const conditionValue = card.getAttribute('data-condition')
        || (card.querySelector('._badge._condition') ? card.querySelector('._badge._condition').textContent : '')
        || '';
    const priceValue = card.getAttribute('data-product-price');
    const price = priceValue ? parseFloat(String(priceValue).replace(/[^0-9.]/g, '')) : null;
    const urlEl = card.querySelector('a.card-figure__link') || card.querySelector('a');
    const url = urlEl ? urlEl.getAttribute('href') : window.location.origin;
    const imgEl = card.querySelector('img');
    const img = imgEl ? imgEl.getAttribute('src') : '';
    const categoryRaw = card.getAttribute('data-product-category') || '';
    const categories = categoryRaw.split(',').map(value => ({ name: value.trim() })).filter(cat => cat.name);
    const customFieldsRaw = card.getAttribute('data-custom-fields') || '[]';
    const customFields = parseCustomFieldsRaw(customFieldsRaw);

    return formatProductBase({
        id,
        brand,
        name,
        url,
        img,
        price,
        categories,
        customFields,
        conditionValue,
    });
}

async function loadProducts() {
    questionContainer.textContent = 'Loading rugged computers...';
    optionsContainer.innerHTML = '';

    const domCards = Array.from(document.querySelectorAll('#quiz-products-source [data-entity-id], .productGrid [data-entity-id]'));
    productDomMap.clear();
    if (domCards.length > 0) {
        domCards.forEach(card => {
            const entityId = parseInt(card.getAttribute('data-entity-id'), 10);
            if (!entityId) {
                return;
            }
            const productItem = card.closest('li.product') || card;
            productDomMap.set(entityId, productItem);
        });
        recommendedProducts = domCards.map(card => parseDomProduct(card));
        filteredProducts = [...recommendedProducts];
        return;
    }
    recommendedProducts = [];
    filteredProducts = [];
}

function displayResults() {
    questionContainer.textContent = 'Your recommended product(s):';
    optionsContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    const existingHeadingNote = document.getElementById('quiz-recovery-heading-note');
    if (existingHeadingNote) {
        existingHeadingNote.remove();
    }

    lastRecoveryContext = buildRecoveryContext();
    const displayProducts = lastRecoveryContext && lastRecoveryContext.products && lastRecoveryContext.products.length > 0
        ? lastRecoveryContext.products
        : filteredProducts;

    updateMatchCountValue(displayProducts.length);

    const limiting = getLimitingCriteria();
    lastLimitingCriteria = limiting;
	
    if (displayProducts.length > 0) {
        if (filteredProducts.length === 0 && lastRecoveryContext) {
            const recoveryBox = document.createElement('div');
            recoveryBox.id = 'quiz-recovery-heading-note';
            recoveryBox.classList.add('quiz-no-results-box');

            const recoveryTitle = document.createElement('div');
            recoveryTitle.classList.add('quiz-no-results-hint');
            recoveryTitle.textContent = 'Closest matches shown by relaxing a few constraints:';
            recoveryBox.appendChild(recoveryTitle);

            const recoveryList = document.createElement('ul');
            recoveryList.classList.add('quiz-no-results-list');

            if (lastRecoveryContext.budgetExpandedTo !== null) {
                const budgetItem = document.createElement('li');
                budgetItem.textContent = `Budget max was expanded to $${lastRecoveryContext.budgetExpandedTo}.`;
                recoveryList.appendChild(budgetItem);
            }

            (lastRecoveryContext.removedFilters || []).forEach(label => {
                const item = document.createElement('li');
                item.textContent = `Relaxed: ${label}`;
                recoveryList.appendChild(item);
            });

            recoveryBox.appendChild(recoveryList);
            questionContainer.insertAdjacentElement('afterend', recoveryBox);
        }

        displayProducts.forEach(result => {
            const sourceNode = productDomMap.get(result.id);
            if (sourceNode) {
                const clone = sourceNode.cloneNode(true);
                if (clone.tagName && clone.tagName.toLowerCase() === 'li') {
                    optionsContainer.appendChild(clone);
                } else {
                    const productElement = document.createElement('li');
                    productElement.classList.add('product');
                    productElement.appendChild(clone);
                    optionsContainer.appendChild(productElement);
                }
                return;
            }
            const productElement = document.createElement('li');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <article class="card" data-event-type="list" data-name="${result.name}" data-product-brand="${result.brand}" data-product-price="${result.price}">
                    <figure class="card-figure">
                        <a href="${result.url}" class="card-figure__link" target="_blank" aria-label="${result.name}, ${result.price}" data-event-type="product-click">
                            <div class="card-img-container">
                                <img src="${result.img}" class="card-image" alt="${result.name}" title="${result.name}" data-sizes="auto">
                            </div>
                        </a>
                       <figcaption class="card-figcaption">
                            <div class="card-figcaption-body">
                                <a href="${result.url}" data-event-type="product-click" class="button button--small card-figcaption-button">Choose Options</a>
                            </div>
                        </figcaption>
                    </figure>
                    <div class="card-body">
                        <p class="card-text" data-test-info-type="brandName">${result.brand}</p>
                        <h3 class="card-title">
                            <a href="${result.url}" target="_blank">${result.name}</a>
                        </h3>
                    <div class="card-text" data-test-info-type="price">
                        <div class="price-section price-section--withoutTax">
                            <span class="price-label"></span>
                            <span class="price-now-label" style="display: none;"></span>
                            <span data-product-price-without-tax class="price price--withoutTax">$${result.price}</span>
                        </div>
                    </div>
                </article>
            `;
            optionsContainer.appendChild(productElement);
        });
        updateLimitingSelectionsList(lastLimitingCriteria);
    } else {
        const noProductMatch = document.createElement("li");
        noProductMatch.classList.add('quiz-no-results-message');
        noProductMatch.textContent = "No products match your criteria. Please try a different set of options or increase your budget and try again! Alternatively, fill out our Selection Assistance form for a free quote!";
        optionsContainer.appendChild(noProductMatch);

        if (lastLimitingCriteria.length > 0) {
            const box = document.createElement('div');
            box.classList.add('quiz-no-results-box');

            const hint = document.createElement('div');
            hint.classList.add('quiz-no-results-hint');
            hint.textContent = 'Likely limiting selection(s):';
            box.appendChild(hint);

            const list = document.createElement('ul');
            list.classList.add('quiz-no-results-list');
            lastLimitingCriteria.forEach(item => {
                const entry = document.createElement('li');
                const label = document.createElement('span');
                label.textContent = item.label;

                const count = document.createElement('span');
                count.classList.add('quiz-no-results-count');
                count.innerHTML = `<span class="quiz-match-count__number">${item.count}</span> match${item.count === 1 ? '' : 'es'} without this`;

                const button = document.createElement('button');
                button.type = 'button';
                button.classList.add('quiz-no-results-clear', 'button', 'button--secondary');
                button.textContent = 'Remove filter';
                button.addEventListener('click', () => {
                    clearSelectionFilter(item.key);
                });

                entry.appendChild(label);
                entry.appendChild(count);
                entry.appendChild(button);
                list.appendChild(entry);
            });
            box.appendChild(list);
            optionsContainer.appendChild(box);
        }
        updateLimitingSelectionsList(lastLimitingCriteria);
	}

    const rescueButton = document.createElement('button');
    rescueButton.type = 'button';
    rescueButton.classList.add('button', 'button--secondary');
    rescueButton.textContent = 'Email these answers to our team';
    rescueButton.addEventListener('click', emailSelectionsSummary);

    const limitingToggle = document.getElementById('quiz-limiting-toggle');
    if (limitingToggle && filteredProducts.length === 0) {
        limitingToggle.classList.add('is-hidden');
    }

    const summary = document.getElementById('quiz-summary');
    if (summary && displayProducts.length > 0) {
        summary.classList.add('is-collapsed');
    }

    const limitingVisible = limitingToggle && !limitingToggle.classList.contains('is-hidden');
    setSummaryToggleVisibility(displayProducts.length === 0 || !limitingVisible);

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", restartQuiz);
    restartButton.classList.add("restart", "button", "button--primary");
    resultContainer.appendChild(restartButton);

    if (skippedFromIndex !== null) {
        const actionRow = document.createElement('div');
        actionRow.classList.add('quiz-actions', 'quiz-actions--full');

        const resumeButton = document.createElement("button");
        resumeButton.textContent = "Continue quiz";
        resumeButton.addEventListener("click", () => {
            currentQuestionIndex = skippedFromIndex;
            skippedFromIndex = null;
            resultContainer.innerHTML = '';
            displayQuestion();
        });
        resumeButton.classList.add("button", "button--secondary");

        actionRow.appendChild(resumeButton);
        actionRow.appendChild(rescueButton);
        resultContainer.appendChild(actionRow);
    } else {
        resultContainer.appendChild(rescueButton);
    }

    updateSummary();
}

function showAllResults() {
    filteredProducts = [...recommendedProducts];
    currentQuestionIndex = questions.length;
    displayResults();
}

function restartQuiz() {
    const existingHeadingNote = document.getElementById('quiz-recovery-heading-note');
    if (existingHeadingNote) {
        existingHeadingNote.remove();
    }

    filteredProducts = [...recommendedProducts];
    currentQuestionIndex = 0;
    resultContainer.innerHTML = "";
    quizHistory.length = 0;
    Object.keys(multiSelectState).forEach(key => {
        delete multiSelectState[key];
    });
    Object.keys(selectionsState).forEach(key => {
        delete selectionsState[key];
    });
    budgetState.min = null;
    budgetState.max = null;
    portCountRequirements = {};
    lastLimitingCriteria = [];
    skippedFromIndex = null;
    lastRecoveryContext = null;
    updateLimitingSelectionsList([]);
    displayQuestion();
}

function displayQuestion() {
    const existingHeadingNote = document.getElementById('quiz-recovery-heading-note');
    if (existingHeadingNote) {
        existingHeadingNote.remove();
    }
    lastRecoveryContext = null;

    updateProgressBar();
    if (currentQuestionIndex >= questions.length /* || filteredProducts.length === 1*/) {
        displayResults();
        return;
    }

    resultContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.parentGateKey && normalizeValue(selectionsState[currentQuestion.parentGateKey]) !== 'yes') {
        currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
        displayQuestion();
        return;
    }

    setSummaryToggleVisibility(true);

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    const currentSelections = currentQuestion.multiSelect
        ? Array.from(multiSelectState[currentQuestion.key] || [])
        : [];
    const matchCountValue = currentQuestion.multiSelect
        ? getMultiSelectMatchCount(currentQuestion, currentSelections, filteredProducts)
        : filteredProducts.length;
    const matchCount = document.getElementById('quiz-match-count');
    updateMatchCountValue(matchCountValue);

    if (currentQuestion.type === 'range') {
        const minInput = document.createElement('input');
        minInput.type = 'text';
        minInput.inputMode = 'decimal';
        minInput.placeholder = '$ Min budget';
        minInput.id = 'budget-min-input';
        minInput.classList.add('budget-range-input', 'form-input');
        if (budgetState.min !== null) {
            minInput.value = formatBudgetInput(budgetState.min);
        }
        minInput.addEventListener('input', event => {
            event.target.value = formatBudgetInput(event.target.value);
            if (matchCount) {
                const maxValue = document.getElementById('budget-max-input')?.value || '';
                updateMatchCountValue(getBudgetMatchCount(event.target.value, maxValue, filteredProducts));
            }
        });

        const maxInput = document.createElement('input');
        maxInput.type = 'text';
        maxInput.inputMode = 'decimal';
        maxInput.placeholder = '$ Max budget';
        maxInput.id = 'budget-max-input';
        maxInput.classList.add('budget-range-input', 'form-input');
        if (budgetState.max !== null) {
            maxInput.value = formatBudgetInput(budgetState.max);
        }
        maxInput.addEventListener('input', event => {
            event.target.value = formatBudgetInput(event.target.value);
            if (matchCount) {
                const minValue = document.getElementById('budget-min-input')?.value || '';
                updateMatchCountValue(getBudgetMatchCount(minValue, event.target.value, filteredProducts));
            }
        });

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.classList.add('submit', 'button', 'button--primary');
        submitButton.addEventListener('click', () => {
            const minValue = document.getElementById('budget-min-input').value.trim();
            const maxValue = document.getElementById('budget-max-input').value.trim();
            const minBudget = parseBudgetValue(minValue) ?? 0;
            const maxBudget = parseBudgetValue(maxValue);
            if ((minBudget !== null && minBudget < 0)
                || (maxBudget !== null && maxBudget < 0)) {
                alert('Please enter non-negative numbers.');
                return;
            }
            if (minBudget !== null && maxBudget !== null && minBudget > maxBudget) {
                alert('Minimum budget must be less than or equal to maximum budget.');
                return;
            }
            handleBudgetAnswer(minBudget, maxBudget);
        });

        optionsContainer.appendChild(minInput);
        optionsContainer.appendChild(maxInput);
        optionsContainer.appendChild(submitButton);
    } else if (currentQuestion.type === 'portCounts') {
        const selections = Array.from(multiSelectState.ports || []);
        if (selections.length === 0) {
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            displayQuestion();
            return;
        }
        const portsQuestion = questions.find(question => question.key === 'ports');
        const rows = document.createElement('div');
        rows.classList.add('port-counts');

        const refreshPortCountMatch = () => {
            if (!matchCount) {
                return;
            }
            const requirements = {};
            const inputs = rows.querySelectorAll('input[data-port-option]');
            for (const input of inputs) {
                const option = input.getAttribute('data-port-option');
                const rawValue = input.value.trim();
                if (!rawValue) {
                    continue;
                }
                const count = parseInt(rawValue, 10);
                if (Number.isNaN(count) || count <= 0) {
                    continue;
                }
                const mapped = portsQuestion && portsQuestion.valueMap && portsQuestion.valueMap[option]
                    ? portsQuestion.valueMap[option]
                    : option;
                requirements[normalizeValue(mapped)] = count;
            }
            updateMatchCountValue(getPortCountMatchCount(requirements, filteredProducts));
        };

        selections.forEach(option => {
            const row = document.createElement('div');
            row.classList.add('port-count-row');

            const label = document.createElement('label');
            label.classList.add('port-count-label');
            label.textContent = `${option} minimum`;

            const input = document.createElement('input');
            input.type = 'number';
            input.inputMode = 'numeric';
            input.min = '0';
            input.placeholder = '0';
            input.classList.add('form-input', 'port-count-input');
            input.setAttribute('data-port-option', option);
            input.addEventListener('input', refreshPortCountMatch);

            const mappedKey = portsQuestion && portsQuestion.valueMap && portsQuestion.valueMap[option]
                ? portsQuestion.valueMap[option]
                : option;
            const existingRequirement = portCountRequirements[normalizeValue(mappedKey)];
            if (existingRequirement !== null && typeof existingRequirement !== 'undefined') {
                input.value = existingRequirement;
            }

            row.appendChild(label);
            row.appendChild(input);
            rows.appendChild(row);
        });

        const actions = document.createElement('div');
        actions.classList.add('quiz-actions', 'quiz-actions--full');

        if (currentQuestionIndex > 0) {
            const backButton = document.createElement('button');
            backButton.type = 'button';
            backButton.textContent = 'Back';
            backButton.classList.add('button', 'button--primary', 'quiz-continue', 'quiz-back');
            backButton.addEventListener('click', goBack);
            actions.appendChild(backButton);
        }

        const continueButton = document.createElement('button');
        continueButton.type = 'button';
        continueButton.textContent = 'Continue';
        continueButton.classList.add('button', 'button--primary', 'quiz-continue');
        continueButton.addEventListener('click', () => {
            const requirements = {};
            const displayRequirements = {};
            const inputs = rows.querySelectorAll('input[data-port-option]');
            for (const input of inputs) {
                const option = input.getAttribute('data-port-option');
                const rawValue = input.value.trim();
                if (!rawValue) {
                    continue;
                }
                const count = parseInt(rawValue, 10);
                if (Number.isNaN(count) || count < 0) {
                    alert('Please enter non-negative whole numbers for port counts.');
                    return;
                }
                if (count === 0) {
                    continue;
                }
                const mapped = portsQuestion && portsQuestion.valueMap && portsQuestion.valueMap[option]
                    ? portsQuestion.valueMap[option]
                    : option;
                requirements[normalizeValue(mapped)] = count;
                displayRequirements[option] = count;
            }

            portCountRequirements = { ...requirements };
            selectionsState.portCounts = { ...displayRequirements };

            if (Object.keys(requirements).length > 0) {
                filteredProducts = filteredProducts.filter(result => {
                    const countMap = result.portCounts || {};
                    return Object.keys(requirements).every(key => {
                        const required = requirements[key];
                        const actual = countMap[key];
                        if (typeof actual === 'undefined' || actual === null) {
                            return true;
                        }
                        return actual >= required;
                    });
                });
            }

            pushHistory();
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            displayQuestion();
        });
        actions.appendChild(continueButton);

        optionsContainer.appendChild(rows);
        optionsContainer.appendChild(actions);

        refreshPortCountMatch();
    } else if (currentQuestion.multiSelect) {
        if (!multiSelectState[currentQuestion.key]) {
            multiSelectState[currentQuestion.key] = new Set();
        }
        const selections = multiSelectState[currentQuestion.key];
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('li');
            optionElement.textContent = option;
            optionElement.classList.add('option', 'button', 'button--primary');
            if (selections.has(option)) {
                optionElement.classList.add('is-selected');
            }
            optionElement.addEventListener('click', () => {
                if (option === 'no') {
                    selections.clear();
                    selections.add(option);
                } else {
                    selections.delete('no');
                    if (selections.has(option)) {
                        selections.delete(option);
                    } else {
                        selections.add(option);
                    }
                }
                displayQuestion();
            });
            optionsContainer.appendChild(optionElement);
        });

        const actions = document.createElement('div');
        actions.classList.add('quiz-actions', 'quiz-actions--full');

        if (currentQuestionIndex > 0) {
            const backButton = document.createElement('button');
            backButton.type = 'button';
            backButton.textContent = 'Back';
            backButton.classList.add('button', 'button--primary', 'quiz-continue', 'quiz-back');
            backButton.addEventListener('click', goBack);
            actions.appendChild(backButton);
        }

        const continueButton = document.createElement('button');
        continueButton.type = 'button';
        continueButton.textContent = 'Continue';
        continueButton.classList.add('button', 'button--primary', 'quiz-continue');
        continueButton.addEventListener('click', () => {
            handleMultiAnswer(currentQuestion.key, Array.from(selections));
        });
        actions.appendChild(continueButton);
        optionsContainer.appendChild(actions);
    } else {
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('li');
            optionElement.textContent = option;
            optionElement.classList.add('option', 'button', 'button--primary');
            optionElement.addEventListener('click', () => handleAnswer(currentQuestion.key, option));
            optionsContainer.appendChild(optionElement);
        });
    }

    if (currentQuestionIndex > 0 && currentQuestion.type !== 'portCounts' && !currentQuestion.multiSelect) {
        const backButton = document.createElement('button');
        backButton.type = 'button';
        backButton.textContent = 'Back';
        backButton.classList.add('button', 'button--secondary', 'quiz-back');
        backButton.addEventListener('click', goBack);
        optionsContainer.appendChild(backButton);
    }

    updateSummary();

    /*if (currentQuestionIndex === 0) {
        const showAllButton = document.createElement('button');
        showAllButton.type = 'button';
        showAllButton.textContent = 'Show All Products';
        showAllButton.classList.add('button', 'button--secondary');
        showAllButton.addEventListener('click', showAllResults);
        optionsContainer.appendChild(showAllButton);
    }*/
}

async function handleMultiAnswer(key, values) {
    const currentQuestion = questions[currentQuestionIndex];
    const mappedValues = values.map(value =>
        currentQuestion.valueMap && currentQuestion.valueMap[value]
            ? currentQuestion.valueMap[value]
            : value
    );
    const normalizedValues = mappedValues.map(value => normalizeValue(value));
    const skipValues = (currentQuestion.skipValues || []).map(item => normalizeValue(item));

    let prospectiveProducts = [...filteredProducts];
    if (normalizedValues.length > 0 && !normalizedValues.some(value => skipValues.includes(value))) {
        prospectiveProducts = filteredProducts.filter(result => {
            const resultValue = result[key];
            if (resultValue === null || typeof resultValue === 'undefined') {
                return ALLOW_UNKNOWN_FILTERS;
            }
            if (Array.isArray(resultValue)) {
                const normalizedResult = resultValue.map(item => normalizeValue(item));
                return normalizedValues.every(value => normalizedResult.includes(value));
            }
            return normalizedValues.includes(normalizeValue(resultValue));
        });
    }

    if (prospectiveProducts.length === 0 && filteredProducts.length > 0) {
        const decision = await promptZeroResultChoice();
        if (decision === 'skip') {
            pushHistory();
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            displayQuestion();
            return;
        }
        if (decision === 'closest') {
            filteredProducts = prospectiveProducts;
            selectionsState[key] = values;
            if (key === 'ports') {
                portCountRequirements = {};
                selectionsState.portCounts = {};
            }
            pushHistory();
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            goToResultsAfterCurrentStep();
            return;
        }
    }

    filteredProducts = prospectiveProducts;
    selectionsState[key] = values;
    if (key === 'ports') {
        portCountRequirements = {};
        selectionsState.portCounts = {};
    }
    pushHistory();
    currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
    displayQuestion();
}

async function handleAnswer(key, value) {
    const currentQuestion = questions[currentQuestionIndex];
    const mappedValue = currentQuestion.valueMap && currentQuestion.valueMap[value]
        ? currentQuestion.valueMap[value]
        : value;
    const normalizedValue = normalizeValue(mappedValue);
    const skipValues = (currentQuestion.skipValues || []).map(item => normalizeValue(item));

    if (currentQuestion.type === 'gate') {
        selectionsState[key] = value;
        if (normalizedValue === 'no') {
            clearGateFollowups(currentQuestion);
            recomputeFilteredProducts();
        }
        pushHistory();
        currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
        displayQuestion();
        return;
    }

    let prospectiveProducts = [...filteredProducts];
    if (!skipValues.includes(normalizedValue)) {
        prospectiveProducts = filteredProducts.filter(result => {
            const resultValue = result[key];
            if (resultValue === null || typeof resultValue === 'undefined') {
                return ALLOW_UNKNOWN_FILTERS;
            }
            if (Array.isArray(resultValue)) {
                return resultValue.map(item => normalizeValue(item)).includes(normalizedValue);
            }
            return normalizeValue(resultValue) === normalizedValue;
        });
    }

    if (prospectiveProducts.length === 0 && filteredProducts.length > 0) {
        const decision = await promptZeroResultChoice();
        if (decision === 'skip') {
            pushHistory();
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            displayQuestion();
            return;
        }
        if (decision === 'closest') {
            filteredProducts = prospectiveProducts;
            selectionsState[key] = value;
            pushHistory();
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            goToResultsAfterCurrentStep();
            return;
        }
    }

    filteredProducts = prospectiveProducts;
    selectionsState[key] = value;
    pushHistory();
    currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
    displayQuestion();
}

async function handleBudgetAnswer(minBudget, maxBudget) {
    const prospectiveProducts = filteredProducts.filter(result => {
        if (result.price === null) {
            return true;
        }
        if (minBudget !== null && result.price < minBudget) {
            return false;
        }
        if (maxBudget !== null && result.price > maxBudget) {
            return false;
        }
        return true;
    });

    if (prospectiveProducts.length === 0 && filteredProducts.length > 0) {
        const decision = await promptZeroResultChoice();
        if (decision === 'skip') {
            pushHistory();
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            displayQuestion();
            return;
        }
        if (decision === 'closest') {
            filteredProducts = prospectiveProducts;
            budgetState.min = minBudget;
            budgetState.max = maxBudget;
            selectionsState.price = { min: minBudget, max: maxBudget };
            pushHistory();
            currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
            goToResultsAfterCurrentStep();
            return;
        }
    }

    filteredProducts = prospectiveProducts;
    budgetState.min = minBudget;
    budgetState.max = maxBudget;
    selectionsState.price = { min: minBudget, max: maxBudget };
    pushHistory();
    currentQuestionIndex = getNextQuestionIndex(currentQuestionIndex);
    displayQuestion();
}

async function initQuiz() {
    try {
        await loadProducts();
        initSummaryToggle();
        initLimitingToggle();
        const matchCount = document.getElementById('quiz-match-count');
        if (matchCount) {
            matchCount.addEventListener('click', skipToResults);
            matchCount.addEventListener('mouseenter', () => {
                isMatchCountHovered = true;
                const count = parseInt(matchCount.dataset.count || '0', 10) || 0;
                matchCount.innerHTML = `<span class="quiz-match-count__number">${count}</span> Click to see your results.`;
            });
            matchCount.addEventListener('mouseleave', () => {
                isMatchCountHovered = false;
                const count = parseInt(matchCount.dataset.count || '0', 10) || 0;
                matchCount.innerHTML = formatMatchCount(count);
            });
        }

        if (restoreStateFromQueryParam()) {
            if (currentQuestionIndex >= questions.length) {
                displayResults();
            } else {
                displayQuestion();
            }
            return;
        }
        displayQuestion();
    } catch (error) {
        questionContainer.textContent = 'Unable to load products at this time.';
        optionsContainer.innerHTML = '';
        const errorMessage = document.createElement('div');
        errorMessage.textContent = error.message || 'Please try again later.';
        resultContainer.innerHTML = '';
        resultContainer.appendChild(errorMessage);
    }
}

initQuiz();