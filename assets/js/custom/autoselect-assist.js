const LAPTOP_MODELS = ['FZ-55', 'CF-54', 'CF-31', 'CF-19', 'S410', 'V110', '5420', '5424', '5430', 'S14I', 'S15', 'Z14I', 'S510'];
const TABLET_MODELS = ['CF-20', 'CF-33', 'FZ-G1', 'FZ-G2', 'F110', 'K120', '7220', 'R8', 'R11', 'U11'];
const ALLOW_UNKNOWN_FILTERS = true;

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
        options: ['yes', 'no preference', 'no'],
        skipValues: ['no preference'],
    },
        {
        key: 'ports',
        question: 'Do you need any specific ports? (Select all that apply)',
        options: ['USB-C', 'USB-A', 'HDMI', 'Serial', 'RJ-45', 'SD', 'microSD', 'Docking', 'VGA', 'Audio'],
        skipValues: [],
            multiSelect: true,
        valueMap: {
            'USB-C': 'usb-c',
            'USB-A': 'usb-a',
            HDMI: 'hdmi',
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
        },
        {
        key: 'modules',
        question: 'Do you need any built-in modules? (Select all that apply)',
        options: ['GPS', 'Barcode', 'Smart Card', 'Fingerprint'],
        skipValues: [],
            multiSelect: true,
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

function parsePortCountsFromText(text) {
    const normalized = normalizeValue(text);
    if (!normalized) {
        return {};
    }
    const counts = {};
    const withoutMicroHdmi = normalized.replace(/micro\s*-?hdmi/g, '');
    const withoutMicroSerial = normalized.replace(/micro\s*-?serial/g, '');
    const withoutMicroSd = normalized.replace(/micro\s*sd/g, '');
    const hasPort = (source, aliases) => aliases.some(alias => source.includes(alias));

    const usbC = findPortCount(normalized, ['usb c', 'usb-c', 'type c', 'type-c', 'usb type c', 'usb type-c']);
    if (usbC !== null) {
        counts['usb-c'] = usbC;
    }
    if (counts['usb-c'] == null && hasPort(normalized, ['usb c', 'usb-c', 'type c', 'type-c', 'usb type c', 'usb type-c'])) {
        counts['usb-c'] = 1;
    }
    const usbA = findPortCount(normalized, ['usb a', 'usb-a', 'usb 2.0', 'usb 3.0', 'usb 3.1', 'usb 3']);
    if (usbA !== null) {
        counts['usb-a'] = usbA;
    }
    if (counts['usb-a'] == null && hasPort(normalized, ['usb a', 'usb-a', 'usb 2.0', 'usb 3.0', 'usb 3.1', 'usb 3'])) {
        counts['usb-a'] = 1;
    }
    const hdmi = findPortCount(withoutMicroHdmi, ['hdmi']);
    if (hdmi !== null) {
        counts.hdmi = hdmi;
    }
    if (counts.hdmi == null && hasPort(withoutMicroHdmi, ['hdmi'])) {
        counts.hdmi = 1;
    }
    const serial = findPortCount(withoutMicroSerial, ['serial']);
    if (serial !== null) {
        counts.serial = serial;
    }
    if (counts.serial == null && hasPort(withoutMicroSerial, ['serial'])) {
        counts.serial = 1;
    }
    const rj45 = findPortCount(normalized, ['rj-45', 'rj45', 'lan']);
    if (rj45 !== null) {
        counts['rj-45'] = rj45;
    }
    if (counts['rj-45'] == null && hasPort(normalized, ['rj-45', 'rj45', 'lan'])) {
        counts['rj-45'] = 1;
    }
    const microsd = findPortCount(normalized, ['microsd', 'micro sd']);
    if (microsd !== null) {
        counts.microsd = microsd;
    }
    if (counts.microsd == null && hasPort(normalized, ['microsd', 'micro sd'])) {
        counts.microsd = 1;
    }
    const sd = findPortCount(withoutMicroSd, ['sd']);
    if (sd !== null) {
        counts.sd = sd;
    }
    if (counts.sd == null && hasPort(withoutMicroSd, ['sd'])) {
        counts.sd = 1;
    }
    const docking = findPortCount(normalized, ['docking', 'dock']);
    if (docking !== null) {
        counts.docking = docking;
    }
    if (counts.docking == null && hasPort(normalized, ['docking', 'dock'])) {
        counts.docking = 1;
    }
    const vga = findPortCount(normalized, ['vga']);
    if (vga !== null) {
        counts.vga = vga;
    }
    if (counts.vga == null && hasPort(normalized, ['vga'])) {
        counts.vga = 1;
    }
    const audio = findPortCount(normalized, ['audio', 'headphone', 'headphone jack', 'headset']);
    if (audio !== null) {
        counts.audio = audio;
    }
    if (counts.audio == null && hasPort(normalized, ['audio', 'headphone', 'headphone jack', 'headset'])) {
        counts.audio = 1;
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
        const key = normalizeValue(field.name);
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
    const normalized = normalizeValue(text);
    if (!normalized) {
        return [];
    }
    const ports = new Set();
    if (normalized.includes('usb c') || normalized.includes('usb-c')) {
        ports.add('usb-c');
    }
    if (normalized.includes('usb a') || normalized.includes('usb-a') || normalized.includes('usb 3') || normalized.includes('usb 2')) {
        ports.add('usb-a');
    }
    if (normalized.includes('hdmi') && !normalized.includes('micro hdmi') && !normalized.includes('micro-hdmi')) {
        ports.add('hdmi');
    }
    if (normalized.includes('serial') && !normalized.includes('micro serial') && !normalized.includes('micro-serial')) {
        ports.add('serial');
    }
    if (normalized.includes('rj-45') || normalized.includes('lan')) {
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
    if (normalized.includes('audio')) {
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

    const connectionsValues = findCustomFieldValues(customFieldMap, 'connections & expansion slots');
    const connectionText = connectionsValues.join(' ');
    attributes.ports = parsePortsFromText(connectionText);
    attributes.portCounts = parsePortCountsFromText(connectionText);

    const upgradeSlotsValue = findCustomFieldValue(customFieldMap, 'upgrade slots');
    attributes.modules = parseModulesFromText(upgradeSlotsValue || '');

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
    let customFields = [];
    try {
        customFields = JSON.parse(customFieldsRaw);
    } catch (error) {
        customFields = [];
    }

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
	
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(result => {
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
    } else {
        const noProductMatch = document.createElement("li");
        noProductMatch.textContent = "No products match your criteria. Please try a different set of options or increase your budget and try again! Alternatively, fill out our Selection Assistance form for a free quote!";
        optionsContainer.appendChild(noProductMatch);
	}

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", restartQuiz);
    restartButton.classList.add("restart", "button", "button--primary");
    resultContainer.appendChild(restartButton);
}

function showAllResults() {
    filteredProducts = [...recommendedProducts];
    currentQuestionIndex = questions.length;
    displayResults();
}

function restartQuiz() {
    filteredProducts = [...recommendedProducts];
    currentQuestionIndex = 0;
    resultContainer.innerHTML = "";
    displayQuestion();
}

function displayQuestion() {
    updateProgressBar();
    if (currentQuestionIndex >= questions.length /* || filteredProducts.length === 1*/) {
        displayResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    if (currentQuestion.type === 'range') {
        const minInput = document.createElement('input');
        minInput.type = 'text';
        minInput.inputMode = 'decimal';
        minInput.placeholder = '$ Min budget';
        minInput.id = 'budget-min-input';
        minInput.classList.add('budget-range-input', 'form-input');
        minInput.addEventListener('input', event => {
            event.target.value = formatBudgetInput(event.target.value);
        });

        const maxInput = document.createElement('input');
        maxInput.type = 'text';
        maxInput.inputMode = 'decimal';
        maxInput.placeholder = '$ Max budget';
        maxInput.id = 'budget-max-input';
        maxInput.classList.add('budget-range-input', 'form-input');
        maxInput.addEventListener('input', event => {
            event.target.value = formatBudgetInput(event.target.value);
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
            currentQuestionIndex++;
            displayQuestion();
            return;
        }
        const portsQuestion = questions.find(question => question.key === 'ports');
        const rows = document.createElement('div');
        rows.classList.add('port-counts');

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

            row.appendChild(label);
            row.appendChild(input);
            rows.appendChild(row);
        });

        const continueButton = document.createElement('button');
        continueButton.type = 'button';
        continueButton.textContent = 'Continue';
        continueButton.classList.add('button', 'button--primary');
        continueButton.addEventListener('click', () => {
            const requirements = {};
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
            }

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

            currentQuestionIndex++;
            displayQuestion();
        });

        optionsContainer.appendChild(rows);
        optionsContainer.appendChild(continueButton);
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

        const continueButton = document.createElement('button');
        continueButton.type = 'button';
        continueButton.textContent = 'Continue';
        continueButton.classList.add('button', 'button--primary');
        continueButton.addEventListener('click', () => {
            handleMultiAnswer(currentQuestion.key, Array.from(selections));
        });
        optionsContainer.appendChild(continueButton);
    } else {
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('li');
            optionElement.textContent = option;
            optionElement.classList.add('option', 'button', 'button--primary');
            optionElement.addEventListener('click', () => handleAnswer(currentQuestion.key, option));
            optionsContainer.appendChild(optionElement);
        });
    }

    /*if (currentQuestionIndex === 0) {
        const showAllButton = document.createElement('button');
        showAllButton.type = 'button';
        showAllButton.textContent = 'Show All Products';
        showAllButton.classList.add('button', 'button--secondary');
        showAllButton.addEventListener('click', showAllResults);
        optionsContainer.appendChild(showAllButton);
    }*/
}

function handleMultiAnswer(key, values) {
    const currentQuestion = questions[currentQuestionIndex];
    const mappedValues = values.map(value =>
        currentQuestion.valueMap && currentQuestion.valueMap[value]
            ? currentQuestion.valueMap[value]
            : value
    );
    const normalizedValues = mappedValues.map(value => normalizeValue(value));
    const skipValues = (currentQuestion.skipValues || []).map(item => normalizeValue(item));

    if (normalizedValues.length > 0 && !normalizedValues.some(value => skipValues.includes(value))) {
        filteredProducts = filteredProducts.filter(result => {
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

    currentQuestionIndex++;
    displayQuestion();
}

function handleAnswer(key, value) {
    const currentQuestion = questions[currentQuestionIndex];
    const mappedValue = currentQuestion.valueMap && currentQuestion.valueMap[value]
        ? currentQuestion.valueMap[value]
        : value;
    const normalizedValue = normalizeValue(mappedValue);
    const skipValues = (currentQuestion.skipValues || []).map(item => normalizeValue(item));
    if (!skipValues.includes(normalizedValue)) {
        filteredProducts = filteredProducts.filter(result => {
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
    currentQuestionIndex++;
    displayQuestion();
}

function handleBudgetAnswer(minBudget, maxBudget) {
    filteredProducts = filteredProducts.filter(result => {
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
    currentQuestionIndex++;
    displayQuestion();
}

async function initQuiz() {
    try {
        await loadProducts();
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