/**
 * Action Button Manager - Quản lý hiển thị và xử lý các nút chức năng
 * Handles action button display, state management, and event binding for PC Builder
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

/**
 * Action Button Manager class for PC Builder
 * Manages all action buttons including add to cart, save, load, share, export, view/print, clear
 */
export default class ActionButtonManager {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context
     * @param {Object} languageManager - Language manager instance
     */
    constructor(context, languageManager) {
        this.context = context;
        this.languageManager = languageManager;

        // Button selectors
        this.selectors = {
            addToCart: '#papathemes-pcbuilder-add-to-cart',
            clearBuild: '#papathemes-pcbuilder-clear-build',
            saveBuild: '#papathemes-pcbuilder-save-build',
            loadBuild: '#papathemes-pcbuilder-load-build',
            shareBuild: '#papathemes-pcbuilder-share-build',
            exportExcel: '#papathemes-pcbuilder-export-excel',
            viewPrint: '#papathemes-pcbuilder-view-print',
            moreToggle: '#papathemes-pcbuilder-more-toggle',
            secondaryActions: '#papathemes-pcbuilder-secondary-actions',
        };

        // Button states tracking
        this.buttonStates = {
            addToCart: { enabled: false, loading: false },
            saveBuild: { enabled: false, loading: false },
            loadBuild: { enabled: true, loading: false },
            shareBuild: { enabled: false, loading: false },
            exportExcel: { enabled: false, loading: false },
            viewPrint: { enabled: false, loading: false },
            clearBuild: { enabled: false, loading: false },
        };

        // More toggle state
        this.moreToggleState = {
            expanded: false,
        };

        // Callbacks will be set during initialization
        this.callbacks = {};
    }

    /**
     * Initialize action button manager với callbacks
     * @param {Object} callbacks - Callback functions for button actions
     */
    initialize(callbacks = {}) {
        this.callbacks = {
            onAddToCart: callbacks.onAddToCart || (() => {}),
            onClearBuild: callbacks.onClearBuild || (() => {}),
            onSaveBuild: callbacks.onSaveBuild || (() => {}),
            onLoadBuild: callbacks.onLoadBuild || (() => {}),
            onShareBuild: callbacks.onShareBuild || (() => {}),
            onExportExcel: callbacks.onExportExcel || (() => {}),
            onViewPrint: callbacks.onViewPrint || (() => {}),
        };

        this.bindEvents();
        this.initializeButtonStates();
    }

    /**
     * Bind event handlers cho tất cả action buttons
     */
    bindEvents() {
        // Bind individual button events
        $(document).on('click', this.selectors.addToCart, this.onAddToCartClick.bind(this));
        $(document).on('click', this.selectors.clearBuild, this.onClearBuildClick.bind(this));
        $(document).on('click', this.selectors.saveBuild, this.onSaveBuildClick.bind(this));
        $(document).on('click', this.selectors.loadBuild, this.onLoadBuildClick.bind(this));
        $(document).on('click', this.selectors.shareBuild, this.onShareBuildClick.bind(this));
        $(document).on('click', this.selectors.exportExcel, this.onExportExcelClick.bind(this));
        $(document).on('click', this.selectors.viewPrint, this.onViewPrintClick.bind(this));
        $(document).on('click', this.selectors.moreToggle, this.onMoreToggleClick.bind(this));
    }

    /**
     * Unbind all event handlers
     */
    unbindEvents() {
        $(document).off('click', this.selectors.addToCart);
        $(document).off('click', this.selectors.clearBuild);
        $(document).off('click', this.selectors.saveBuild);
        $(document).off('click', this.selectors.loadBuild);
        $(document).off('click', this.selectors.shareBuild);
        $(document).off('click', this.selectors.exportExcel);
        $(document).off('click', this.selectors.viewPrint);
        $(document).off('click', this.selectors.moreToggle);
    }

    /**
     * Initialize button states based on initial conditions
     */
    initializeButtonStates() {
        // Load build button is always enabled
        this.updateButtonState('loadBuild', { enabled: true });

        // All other buttons start disabled
        this.updateButtonState('addToCart', { enabled: false });
        this.updateButtonState('saveBuild', { enabled: false });
        this.updateButtonState('shareBuild', { enabled: false });
        this.updateButtonState('exportExcel', { enabled: false });
        this.updateButtonState('viewPrint', { enabled: false });
        this.updateButtonState('clearBuild', { enabled: false });

        // Initialize more toggle state
        this.updateMoreToggleState(false);
    }

    /**
     * Update button states based on selected components
     * @param {Map} selectedComponents - Map of selected components
     */
    updateButtonStates(selectedComponents) {
        const hasComponents = selectedComponents && selectedComponents.size > 0;

        // Enable/disable buttons based on component availability
        this.updateButtonState('addToCart', { enabled: hasComponents });
        this.updateButtonState('saveBuild', { enabled: hasComponents });
        this.updateButtonState('shareBuild', { enabled: hasComponents });
        this.updateButtonState('exportExcel', { enabled: hasComponents });
        this.updateButtonState('viewPrint', { enabled: hasComponents });
        this.updateButtonState('clearBuild', { enabled: hasComponents });

        // Load build button is always enabled
        this.updateButtonState('loadBuild', { enabled: true });
    }

    /**
     * Update individual button state
     * @param {string} buttonKey - Button key (addToCart, saveBuild, etc.)
     * @param {Object} state - New state {enabled, loading}
     */
    updateButtonState(buttonKey, state = {}) {
        if (!this.buttonStates[buttonKey]) {
            console.warn(`⚠️ Unknown button key: ${buttonKey}`); // eslint-disable-line no-console
            return;
        }

        // Update internal state
        this.buttonStates[buttonKey] = {
            ...this.buttonStates[buttonKey],
            ...state,
        };

        const selector = this.selectors[buttonKey];
        const $button = $(selector);

        if (!$button.length) {
            console.warn(`⚠️ Button not found: ${selector}`); // eslint-disable-line no-console
            return;
        }

        // Apply enabled/disabled state
        if (state.enabled !== undefined) {
            $button.prop('disabled', !state.enabled);

            // Add visual state classes
            if (state.enabled) {
                $button.addClass('button--enabled').removeClass('button--disabled');
            } else {
                $button.addClass('button--disabled').removeClass('button--enabled');
            }
        }

        // Apply loading state
        if (state.loading !== undefined) {
            if (state.loading) {
                $button.addClass('button--loading');
                this.addLoadingIndicator($button);
            } else {
                $button.removeClass('button--loading');
                this.removeLoadingIndicator($button);
            }
        }

        // Update accessibility attributes
        this.updateButtonAccessibility(buttonKey, $button);
    }

    /**
     * Update button accessibility attributes
     * @param {string} buttonKey - Button key
     * @param {jQuery} $button - Button element
     */
    updateButtonAccessibility(buttonKey, $button) {
        const state = this.buttonStates[buttonKey];
        const isDisabled = !state.enabled || state.loading;

        // Update aria-disabled
        $button.attr('aria-disabled', isDisabled);

        // Update title and aria-label based on state
        let titleKey = `actions.${buttonKey}`;
        if (isDisabled && !state.loading) {
            titleKey += '_disabled';
        } else if (state.loading) {
            titleKey += '_loading';
        }

        const title = this.languageManager.getLang(titleKey, $button.attr('title') || '');
        if (title) {
            $button.attr('title', title).attr('aria-label', title);
        }
    }

    /**
     * Add loading indicator to button
     * @param {jQuery} $button - Button element
     */
    addLoadingIndicator($button) {
        const $icon = $button.find('.icon svg use');
        if ($icon.length) {
            // Store original icon
            $button.data('original-icon', $icon.attr('href'));
            // Change to spinner icon
            $icon.attr('href', '#icon-spinner');
        }

        // Add loading text if needed
        const loadingText = this.languageManager.getLang('loading', 'Loading...');
        if (!$button.find('.loading-text').length) {
            $button.append(`<span class="loading-text is-srOnly">${loadingText}</span>`);
        }
    }

    /**
     * Remove loading indicator from button
     * @param {jQuery} $button - Button element
     */
    removeLoadingIndicator($button) {
        const $icon = $button.find('.icon svg use');
        const originalIcon = $button.data('original-icon');

        if ($icon.length && originalIcon) {
            // Restore original icon
            $icon.attr('href', originalIcon);
            $button.removeData('original-icon');
        }

        // Remove loading text
        $button.find('.loading-text').remove();
    }

    /**
     * Update more toggle state
     * @param {boolean} expanded - Whether more actions are expanded
     */
    updateMoreToggleState(expanded) {
        this.moreToggleState.expanded = expanded;

        const $toggleBtn = $(this.selectors.moreToggle);
        const $secondaryActions = $(this.selectors.secondaryActions);

        if (!$toggleBtn.length || !$secondaryActions.length) {
            return;
        }

        if (expanded) {
            // Expand
            $toggleBtn.addClass('expanded');
            $secondaryActions.addClass('papathemes-pcbuilder-expanded');
            $toggleBtn.attr('aria-expanded', 'true');

            // Update button text/title
            const lessActionsText = this.languageManager.getLang('actions.less_actions', 'Less Actions');
            $toggleBtn.attr('title', lessActionsText).attr('aria-label', lessActionsText);
        } else {
            // Collapse
            $toggleBtn.removeClass('expanded');
            $secondaryActions.removeClass('papathemes-pcbuilder-expanded');
            $toggleBtn.attr('aria-expanded', 'false');

            // Update button text/title
            const moreActionsText = this.languageManager.getLang('actions.more_actions', 'More Actions');
            $toggleBtn.attr('title', moreActionsText).attr('aria-label', moreActionsText);
        }
    }

    /**
     * Show button loading state
     * @param {string} buttonKey - Button key
     * @param {string} loadingText - Optional loading text
     */
    showButtonLoading(buttonKey, loadingText = null) {
        this.updateButtonState(buttonKey, { loading: true });

        if (loadingText) {
            const $button = $(this.selectors[buttonKey]);
            const $loadingTextElement = $button.find('.loading-text');
            if ($loadingTextElement.length) {
                $loadingTextElement.text(loadingText);
            }
        }
    }

    /**
     * Hide button loading state
     * @param {string} buttonKey - Button key
     */
    hideButtonLoading(buttonKey) {
        this.updateButtonState(buttonKey, { loading: false });
    }

    /**
     * Add visual feedback animation to button
     * @param {string} buttonKey - Button key
     * @param {string} feedbackType - Type of feedback ('success', 'error', 'info')
     * @param {number} duration - Animation duration in ms
     */
    addButtonFeedback(buttonKey, feedbackType = 'success', duration = 2000) {
        const $button = $(this.selectors[buttonKey]);
        if (!$button.length) return;

        // Add feedback class
        $button.addClass(`button--feedback-${feedbackType}`);

        // Remove feedback class after duration
        setTimeout(() => {
            $button.removeClass(`button--feedback-${feedbackType}`);
        }, duration);
    }

    /**
     * Get current button states
     * @returns {Object} Current button states
     */
    getButtonStates() {
        return { ...this.buttonStates };
    }

    /**
     * Get more toggle state
     * @returns {boolean} Current more toggle expanded state
     */
    getMoreToggleState() {
        return this.moreToggleState.expanded;
    }

    // Event handlers
    async onAddToCartClick(event) {
        event.preventDefault();

        if (this.buttonStates.addToCart.loading) return;

        try {
            this.showButtonLoading('addToCart');
            await this.callbacks.onAddToCart();
            this.addButtonFeedback('addToCart', 'success');
        } catch (error) {
            this.addButtonFeedback('addToCart', 'error');
            console.error('❌ Add to cart failed:', error); // eslint-disable-line no-console
        } finally {
            this.hideButtonLoading('addToCart');
        }
    }

    async onClearBuildClick(event) {
        event.preventDefault();

        if (this.buttonStates.clearBuild.loading) return;

        try {
            this.showButtonLoading('clearBuild');
            await this.callbacks.onClearBuild();
            this.addButtonFeedback('clearBuild', 'success');
        } catch (error) {
            this.addButtonFeedback('clearBuild', 'error');
            console.error('❌ Clear build failed:', error); // eslint-disable-line no-console
        } finally {
            this.hideButtonLoading('clearBuild');
        }
    }

    onSaveBuildClick(event) {
        event.preventDefault();

        if (this.buttonStates.saveBuild.loading) return;

        try {
            this.showButtonLoading('saveBuild');
            this.callbacks.onSaveBuild();
            this.addButtonFeedback('saveBuild', 'success');
        } catch (error) {
            this.addButtonFeedback('saveBuild', 'error');
            console.error('❌ Save build failed:', error); // eslint-disable-line no-console
        } finally {
            this.hideButtonLoading('saveBuild');
        }
    }

    onLoadBuildClick(event) {
        event.preventDefault();

        if (this.buttonStates.loadBuild.loading) return;

        try {
            this.callbacks.onLoadBuild();
        } catch (error) {
            this.addButtonFeedback('loadBuild', 'error');
            console.error('❌ Load build failed:', error); // eslint-disable-line no-console
        }
    }

    onShareBuildClick(event) {
        event.preventDefault();

        if (this.buttonStates.shareBuild.loading) return;

        try {
            this.showButtonLoading('shareBuild');
            this.callbacks.onShareBuild();
            this.addButtonFeedback('shareBuild', 'success');
        } catch (error) {
            this.addButtonFeedback('shareBuild', 'error');
            console.error('❌ Share build failed:', error); // eslint-disable-line no-console
        } finally {
            this.hideButtonLoading('shareBuild');
        }
    }

    onExportExcelClick(event) {
        event.preventDefault();

        if (this.buttonStates.exportExcel.loading) return;

        try {
            this.showButtonLoading('exportExcel');
            this.callbacks.onExportExcel();
            this.addButtonFeedback('exportExcel', 'success');
        } catch (error) {
            this.addButtonFeedback('exportExcel', 'error');
            console.error('❌ Export Excel failed:', error); // eslint-disable-line no-console
        } finally {
            this.hideButtonLoading('exportExcel');
        }
    }

    async onViewPrintClick(event) {
        event.preventDefault();

        if (this.buttonStates.viewPrint.loading) return;

        try {
            this.showButtonLoading('viewPrint');
            await this.callbacks.onViewPrint();
            this.addButtonFeedback('viewPrint', 'success');
        } catch (error) {
            this.addButtonFeedback('viewPrint', 'error');
            console.error('❌ View & Print failed:', error); // eslint-disable-line no-console
        } finally {
            this.hideButtonLoading('viewPrint');
        }
    }

    onMoreToggleClick(event) {
        event.preventDefault();

        const currentState = this.moreToggleState.expanded;
        this.updateMoreToggleState(!currentState);
    }
}
