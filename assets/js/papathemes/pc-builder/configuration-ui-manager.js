/**
 * Configuration UI Manager - Quản lý giao diện cho tính năng multi-configuration
 * Handles UI rendering, events, and interactions for PC Builder configuration system
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import getNotification from '../notification';
import Modal from '../modal';

/**
 * Configuration UI Manager class for PC Builder
 * Manages all UI aspects of the multi-configuration feature
 */
export default class ConfigurationUIManager {
    /**
     * Constructor
     * @param {Object} configurationManager - Configuration data manager
     * @param {Object} languageManager - Language manager instance
     * @param {Object} buildSummaryManager - Build summary manager instance
     */
    constructor(configurationManager, languageManager, buildSummaryManager) {
        this.configurationManager = configurationManager;
        this.languageManager = languageManager;
        this.buildSummaryManager = buildSummaryManager;

        // UI callbacks - will be set by parent class
        this.callbacks = {
            onSwitchConfiguration: null,
            onSaveCurrentConfiguration: null,
            onLoadConfiguration: null,
        };

        this.isInitialized = false;
        this.isRefreshing = false;
        this.isRendering = false;
        this.compareModal = null;
    }

    /**
     * Initialize configuration UI
     * @param {Object} callbacks - Callback functions
     */
    async initialize(callbacks = {}) {
        this.callbacks = {
            onSwitchConfiguration: callbacks.onSwitchConfiguration || (() => {}),
            onSaveCurrentConfiguration: callbacks.onSaveCurrentConfiguration || (() => {}),
            onLoadConfiguration: callbacks.onLoadConfiguration || (() => {}),
        };

        await this.renderConfigurationList();
        this.bindConfigurationEvents();
        this.updateActiveConfigurationName();
        this.updateCompareButton();

        this.isInitialized = true;
    }


    /**
     * Render configuration list in sidebar
     */
    async renderConfigurationList() {
        // Prevent concurrent renders
        if (this.isRendering) {
            return;
        }

        this.isRendering = true;
        try {
            const $listContainer = $('#papathemes-pcbuilder-config-list');
            const configurations = this.configurationManager.getAllConfigurations();
            const activeConfigId = this.configurationManager.activeConfigId;

            $listContainer.empty();

            // Keep original order - don't sort by active status
            const sortedConfigurations = [...configurations];

            for (const config of sortedConfigurations) {
                const isActive = config.id === activeConfigId;
                const componentCount = Object.keys(config.components || {}).length;
                const totalComponents = $('.papathemes-pcbuilder-component-row').length;

                // Always calculate total price from components for accuracy
                let totalPrice = 0;
                if (config.components && Object.keys(config.components).length > 0) {
                    totalPrice = Object.values(config.components).reduce((sum, comp) => {
                        let componentPrice = 0;

                        // Try multiple price sources in order of preference
                        if (comp.totalPrice && comp.totalPrice > 0) {
                            componentPrice = comp.totalPrice;
                        } else if (comp.price && comp.price > 0) {
                            componentPrice = comp.price * (comp.quantity || 1);
                        } else if (comp.product && comp.product.price && comp.product.price > 0) {
                            componentPrice = comp.product.price * (comp.quantity || 1);
                        }

                        return sum + componentPrice;
                    }, 0);
                } else {
                    // Fallback to stored total price if no components
                    totalPrice = config.totalPrice || 0;
                }

                // Format price properly with await
                const formattedPrice = await this.buildSummaryManager.formatPrice(totalPrice);

                const $item = $(`
                    <div class="papathemes-pcbuilder-config-item ${isActive ? 'active' : ''}" 
                         data-config-id="${config.id}">
                        <div class="papathemes-pcbuilder-config-item-header">
                            <span class="papathemes-pcbuilder-config-item-name">${config.name}</span>
                            <span class="papathemes-pcbuilder-config-item-price">
                                ${formattedPrice}
                            </span>
                        </div>
                        <div class="papathemes-pcbuilder-config-item-info">
                            <span class="papathemes-pcbuilder-config-item-components">
                                ${componentCount}/${totalComponents} ${this.languageManager.getLang('pc_builder.component.components', 'components')}
                                ${isActive ? `• ${this.languageManager.getLang('pc_builder.config.editing', 'Editing')}` : ''}
                            </span>
                            <div class="papathemes-pcbuilder-config-item-actions">
                                <button class="papathemes-pcbuilder-config-action" 
                                        data-action="duplicate" 
                                        data-config-id="${config.id}"
                                        title="${this.languageManager.getLang('pc_builder.config.duplicate', 'Duplicate')}">
                                    <i class="icon" aria-hidden="true">
                                        <svg><use href="#icon-copy"></use></svg>
                                    </i>
                                </button>
                                <button class="papathemes-pcbuilder-config-action" 
                                        data-action="rename" 
                                        data-config-id="${config.id}"
                                        title="${this.languageManager.getLang('pc_builder.config.rename', 'Rename')}">
                                    <i class="icon" aria-hidden="true">
                                        <svg><use href="#icon-pen"></use></svg>
                                    </i>
                                </button>
                                <button class="papathemes-pcbuilder-config-action" 
                                        data-action="delete" 
                                        data-config-id="${config.id}"
                                        title="${this.languageManager.getLang('pc_builder.config.delete', 'Delete')}"
                                        ${configurations.length <= 1 ? 'disabled' : ''}>
                                    <i class="icon" aria-hidden="true">
                                        <svg><use href="#icon-trash"></use></svg>
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                `);
                $listContainer.append($item);
            }

            // Update config count and add button state
            $('#papathemes-pcbuilder-config-count').text(configurations.length);
            $('#papathemes-pcbuilder-add-config').prop('disabled', !this.configurationManager.canCreateConfiguration());
        } finally {
            this.isRendering = false;
        }
    }

    /**
     * Bind configuration events
     */
    bindConfigurationEvents() {
        // Unbind existing events to prevent duplicates
        this.unbindConfigurationEvents();


        // Config list item click events
        $(document).on('click.configUI', '.papathemes-pcbuilder-config-item', (e) => {
            if ($(e.target).closest('.papathemes-pcbuilder-config-item-actions').length) return;
            const configId = $(e.currentTarget).data('config-id');
            this.switchConfiguration(configId);
        });

        // Config action events
        $(document).on('click.configUI', '.papathemes-pcbuilder-config-action', (e) => {
            e.stopPropagation();
            const action = $(e.currentTarget).data('action');
            const configId = $(e.currentTarget).data('config-id');
            this.handleConfigurationAction(action, configId);
        });

        // Add new configuration
        $(document).on('click.configUI', '#papathemes-pcbuilder-add-config', () => {
            this.createNewConfiguration();
        });

        // Mobile config toggle
        $(document).on('click.configUI', '#papathemes-pcbuilder-config-toggle', () => {
            this.toggleMobileConfigPanel();
        });

        // Desktop config list header toggle
        $(document).on('click.configUI', '#papathemes-pcbuilder-config-list-header', () => {
            // Only on desktop
            if (window.innerWidth > 768) {
                this.toggleDesktopConfigList();
            }
        });

        // Compare configurations button
        $(document).on('click.configUI', '#papathemes-pcbuilder-compare-configs', () => {
            this.openCompareModal();
        });

        // Compare modal will be handled by Modal class

        // Configuration manager events
        this.configurationManager.on('create', async () => {
            await this.renderConfigurationList();
        });

        this.configurationManager.on('delete', async () => {
            await this.renderConfigurationList();
        });

        this.configurationManager.on('update', async () => {
            // Only re-render if not already being refreshed
            if (!this.isRefreshing) {
                await this.renderConfigurationList();
            }
        });

        this.configurationManager.on('switch', async (data) => {
            if (this.callbacks.onLoadConfiguration) {
                await this.callbacks.onLoadConfiguration(data.to);
            }
        });
    }

    /**
     * Unbind configuration events
     */
    unbindConfigurationEvents() {
        $(document).off('.configUI');
    }

    /**
     * Switch to different configuration
     */
    async switchConfiguration(configId) {
        if (configId === this.configurationManager.activeConfigId) return;

        // Use callback to save current configuration
        if (this.callbacks.onSaveCurrentConfiguration) {
            await this.callbacks.onSaveCurrentConfiguration();
        }

        // Switch configuration
        const success = this.configurationManager.setActiveConfiguration(configId);
        if (!success) {
            // Configuration switch failed
        }

        // The actual loading will be handled by the switch event listener
    }

    /**
     * Create new configuration
     */
    createNewConfiguration() {
        // eslint-disable-next-line no-alert
        const name = window.prompt(
            this.languageManager.getLang('pc_builder.config.enter_name', 'Enter configuration name:'),
            this.languageManager.getLang('pc_builder.config.default_base', 'Build'),
        );

        if (!name || !name.trim()) return;

        const newConfig = this.configurationManager.createConfiguration(name.trim());
        if (newConfig) {
            this.switchConfiguration(newConfig.id);
        } else {
            const notification = getNotification();
            notification.error(this.languageManager.getLang('pc_builder.config.max_reached', 'Maximum number of configurations reached'));
        }
    }

    /**
     * Handle configuration actions
     */
    async handleConfigurationAction(action, configId) {
        const notification = getNotification();

        switch (action) {
        case 'duplicate': {
            const duplicated = this.configurationManager.duplicateConfiguration(configId);
            if (duplicated) {
                this.switchConfiguration(duplicated.id);
            } else {
                notification.error(this.languageManager.getLang('pc_builder.config.duplicate_failed', 'Failed to duplicate configuration'));
            }
            break;
        }

        case 'rename': {
            const config = this.configurationManager.getConfiguration(configId);
            if (config) {
                // eslint-disable-next-line no-alert
                const newName = window.prompt(
                    this.languageManager.getLang('pc_builder.config.enter_new_name', 'Enter new name:'),
                    config.name,
                );
                if (newName && newName.trim() && newName.trim() !== config.name) {
                    this.configurationManager.updateConfiguration(configId, { name: newName.trim() });
                    this.updateActiveConfigurationName();
                    await this.renderConfigurationList();
                }
            }
            break;
        }

        case 'delete': {
            // eslint-disable-next-line no-alert
            const confirmDelete = window.confirm(this.languageManager.getLang('pc_builder.config.confirm_delete', 'Are you sure you want to delete this configuration?'));
            if (confirmDelete) {
                this.deleteConfiguration(configId);
            }
            break;
        }

        default:
            break;
        }
    }

    /**
     * Delete configuration
     */
    deleteConfiguration(configId) {
        const success = this.configurationManager.deleteConfiguration(configId);
        if (!success) {
            const notification = getNotification();
            notification.error(this.languageManager.getLang('pc_builder.config.delete_failed', 'Cannot delete the last configuration'));
        }
    }

    /**
     * Update active configuration name in header and mobile
     */
    updateActiveConfigurationName() {
        const activeConfig = this.configurationManager.getActiveConfiguration();
        if (activeConfig) {
            $('#papathemes-pcbuilder-active-config-name').text(activeConfig.name);
            $('#papathemes-pcbuilder-mobile-config-name').text(activeConfig.name);
        }
    }

    /**
     * Toggle mobile configuration panel visibility
     */
    toggleMobileConfigPanel() {
        const $configSection = $('.papathemes-pcbuilder-config-list-section');
        $configSection.toggleClass('show');
    }

    /**
     * Toggle desktop configuration list collapse/expand
     */
    toggleDesktopConfigList() {
        const $header = $('#papathemes-pcbuilder-config-list-header');
        const $list = $('.papathemes-pcbuilder-config-list');
        const $actions = $('.papathemes-pcbuilder-config-actions');

        $header.toggleClass('collapsed');
        $list.toggleClass('collapsed');
        $actions.toggleClass('collapsed');
    }

    /**
     * Open compare configurations modal
     */
    async openCompareModal() {
        const configurations = this.configurationManager.getAllConfigurations();

        if (configurations.length < 2) {
            const notification = getNotification();
            notification.error(this.languageManager.getLang('pc_builder.config.compare_minimum', 'Need at least 2 configurations to compare'));
            return;
        }

        // Initialize modal if not exists
        if (!this.compareModal) {
            this.compareModal = new Modal({
                modalTitle: this.languageManager.getLang('pc_builder.config.compare_configurations', 'Compare Configurations'),
                modalExtraClass: 'papathemes-pcbuilder-compare-modal-wrapper',
                closeOnBackgroundClick: true,
                closeOnEsc: true,
            });
        }

        // Generate table content
        const tableContent = await this.generateCompareTableHTML(configurations);

        // Open modal with content
        this.compareModal.openModal(tableContent);
    }

    /**
     * Generate compare table HTML
     */
    async generateCompareTableHTML(configurations) {
        // Build header
        let headerHtml = `
            <tr class="papathemes-pcbuilder-compare-table-header">
                <th class="papathemes-pcbuilder-compare-component-col">${this.languageManager.getLang('pc_builder.component.component', 'Component')}</th>
        `;

        configurations.forEach(config => {
            headerHtml += `<th class="papathemes-pcbuilder-compare-config-col">${config.name}</th>`;
        });
        headerHtml += '</tr>';

        // Build body rows
        let bodyHtml = '';
        const componentCategories = $('.papathemes-pcbuilder-component-row');

        for (let i = 0; i < componentCategories.length; i++) {
            const $row = $(componentCategories[i]);
            const categoryName = $row.find('.papathemes-pcbuilder-component-name').text();
            const categoryId = $row.data('category-id');

            bodyHtml += `
                <tr>
                    <td class="papathemes-pcbuilder-compare-component-name">${categoryName}</td>
            `;

            for (const config of configurations) {
                const component = config.components[categoryId];

                if (component && component.product) {
                    // Get the actual price from component data
                    const actualPrice = component.totalPrice || component.price || component.product.price || 0;

                    // Format price properly
                    const formattedPrice = this.buildSummaryManager ?
                        await this.buildSummaryManager.formatPrice(actualPrice) :
                        `$${actualPrice.toFixed(2)}`;

                    bodyHtml += `
                        <td>
                            <div class="papathemes-pcbuilder-compare-product-info">
                                <div class="papathemes-pcbuilder-compare-product-thumbnail">
                                    ${component.product.image ?
                                        `<img src="${component.product.image}" alt="${component.product.name}" loading="lazy">` :
                        '<div class="papathemes-pcbuilder-thumbnail-fallback"><i class="icon-image"></i></div>'
                                    }
                                </div>
                                <div class="papathemes-pcbuilder-compare-product-details">
                                    <div class="papathemes-pcbuilder-compare-product-name">${component.product.name}</div>
                                    <div class="papathemes-pcbuilder-compare-product-price">${formattedPrice}</div>
                                </div>
                            </div>
                        </td>
                    `;
                } else {
                    bodyHtml += `
                        <td class="papathemes-pcbuilder-compare-no-selection">
                            ${this.languageManager.getLang('pc_builder.component.not_selected', 'Not selected')}
                        </td>
                    `;
                }
            }

            bodyHtml += '</tr>';
        }

        // Build footer (total row)
        let footerHtml = `
            <tr class="papathemes-pcbuilder-compare-total-row">
                <td class="papathemes-pcbuilder-compare-total-label">${this.languageManager.getLang('pc_builder.build.total_price', 'Total Price')}</td>
        `;

        for (const config of configurations) {
            // Calculate total from components if not available
            let totalPrice = config.totalPrice || 0;
            if (!totalPrice && config.components) {
                totalPrice = Object.values(config.components).reduce((sum, comp) => sum + (comp.totalPrice || comp.price || 0), 0);
            }

            const formattedTotal = this.buildSummaryManager ?
                await this.buildSummaryManager.formatPrice(totalPrice) :
                `$${totalPrice.toFixed(2)}`;

            footerHtml += `<td class="papathemes-pcbuilder-compare-total-price">${formattedTotal}</td>`;
        }
        footerHtml += '</tr>';

        // Combine all parts
        return `
            <div class="papathemes-pcbuilder-compare-content">
                <div class="papathemes-pcbuilder-compare-table-container">
                    <table class="papathemes-pcbuilder-compare-table">
                        <thead>
                            ${headerHtml}
                        </thead>
                        <tbody class="papathemes-pcbuilder-compare-table-body">
                            ${bodyHtml}
                        </tbody>
                        <tfoot>
                            ${footerHtml}
                        </tfoot>
                    </table>
                </div>
            </div>
        `;
    }

    /**
     * Refresh UI (called when configurations change)
     */
    async refreshUI() {
        if (!this.isInitialized) return;

        this.isRefreshing = true;
        await this.renderConfigurationList();
        this.updateActiveConfigurationName();
        this.updateCompareButton();
        this.isRefreshing = false;
    }

    /**
     * Update compare button state
     */
    updateCompareButton() {
        const configurations = this.configurationManager.getAllConfigurations();
        const $compareBtn = $('#papathemes-pcbuilder-compare-configs');

        if (configurations.length >= 2) {
            $compareBtn.prop('disabled', false);
        } else {
            $compareBtn.prop('disabled', true);
        }
    }

    /**
     * Destroy the UI manager
     */
    destroy() {
        this.unbindConfigurationEvents();
        this.isInitialized = false;
    }
}
