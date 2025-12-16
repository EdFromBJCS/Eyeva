import { debounce } from 'lodash';
import { CollapsibleEvents } from '../theme/common/collapsible';
import mediaQueryListFactory from '../theme/common/media-query-list';
import { toMilliseconds } from './utils';

export class Menu {
    constructor() {
        if (Menu._instance) return Menu._instance;
        Menu._instance = this;

        this.mediumMediaQuery = mediaQueryListFactory('medium');
        this.$body = $('body');
        this.$header = $('header').first();
        this.$navPages = $('#navPages');
        this.$navUsers = $('[data-nav-user]');
        this.$menuToggle = $('[data-menu-toggle]');

        /**
         * All collapsible elements inside `[data-nav-user]` but not the **menu toggle** `[data-menu-toggle]`
         * @type {JQuery}
         */
        this.$navUserCollapsibles = this.$navUsers.find('[data-collapsible]').not(this.$menuToggle);

        /**
         * All collapsible elements inside `#navPages` & `[data-nav-user]`
         * but not the **menu toggle** `[data-menu-toggle]`
         * @type {JQuery}
         */
        this.$collapsibles = this.$navPages
            .find('[data-collapsible]')
            .add(this.$navUserCollapsibles);

        /**
         * `[data-menu-gap-cover]` elements inside `#navPages` & `[data-nav-user]`
         * @type {JQuery}
         */
        this.$gaps = this.$navPages
            .find('[data-menu-gap-cover]')
            .add(this.$navUsers.find('[data-menu-gap-cover]'));

        /**
         * All 1st level dropdown menus or mega menus inside `#navPages` & `[data-nav-user]`
         * @type {JQuery}
         */
        this.$dropdowns = this.$navPages
            .find('[data-menu-dropdown]')
            .add(this.$navUsers.find('[data-menu-dropdown]'));

        /**
         * Collapsible instance of the menu toggle `[data-menu-toggle]`
         * @type {Collapsible}
         */
        this.menuCollapsible = this.$menuToggle.data('collapsibleInstance');

        /**
         * All collapsible instances inside `#navPages` & `[data-nav-user]`
         * but not the **menu toggle** `[data-menu-toggle]`
         * @type {Collapsible[]}
         */
        this.collapsibleArray = this.$collapsibles.get().map(element => $(element).data('collapsibleInstance')).filter(Boolean);

        /**
         * Collapsible instances of elements inside the dropdown menus `[data-menu-dropdown]`
         * @type {Collapsible[]}
         */
        this.collapsibleArrayInDropdown = this.$dropdowns.find('[data-collapsible]').get().map(element => $(element).data('collapsibleInstance')).filter(Boolean);

        /**
         * Collapsible instances of 1st level dropdown menus or mega menus
         * (which is not in the dropdown menu `[data-menu-dropdown]`)
         * @type {Collapsible[]}
         */
        this.collapsibleArrayNotInDropdown = this.collapsibleArray.filter(c => !this.collapsibleArrayInDropdown.includes(c));

        /**
         * Collapsible instances of elements inside the user menu `[data-nav-user]`
         * @type {Collapsible[]}
         */
        this.navUserCollapsibleArray = this.$navUserCollapsibles.get().map(element => $(element).data('collapsibleInstance')).filter(Boolean);

        /**
         * Collapsible instances of 1st level dropdown menus or mega menus of the `#navPages`
         */
        this.navPagesCollapsibleArrayNotInDropdown = this.collapsibleArrayNotInDropdown.filter(c => !this.navUserCollapsibleArray.includes(c));

        /**
         * Collapsibles that are scheduled to close
         * @type {Set<Collapsible>}
         */
        this.closingCollapsibleSet = new Set();

        this.closeCollapsibleDebounce = debounce(this.closeCollapsibles.bind(this), 500);
        this.onMenuOpen = this.onMenuOpen.bind(this);
        this.onMenuClose = this.onMenuClose.bind(this);
        this.onMenuEscKey = this.onMenuEscKey.bind(this);
        this.onMenuFocusOut = this.onMenuFocusOut.bind(this);
        this.onSubMenuOpen = this.onSubMenuOpen.bind(this);
        this.onSubMenuClose = this.onSubMenuClose.bind(this);
        this.onBodyClick = this.onBodyClick.bind(this);
        this.onTrapFocusChildFocus = this.onTrapFocusChildFocus.bind(this);
        this.onTrapFocusParentFocus = this.onTrapFocusParentFocus.bind(this);
        this.onToggleMouseEnter = this.onToggleMouseEnter.bind(this);
        this.onToggleMouseLeave = this.onToggleMouseLeave.bind(this);
        this.onTargetMouseEnter = this.onTargetMouseEnter.bind(this);
        this.onTargetMouseLeave = this.onTargetMouseLeave.bind(this);
        this.onGapMouseEnter = this.onGapMouseEnter.bind(this);
        this.onGapMouseLeave = this.onGapMouseLeave.bind(this);

        this.indexTargetCollapsibles();
        this.mapCollapsibleRelationships();
        this.trapFocusNavigation();

        this.$trapFocusInside = this.$navPages
            .find('[data-trap-focus-inside]')
            .add(this.$menuToggle.siblings('[data-trap-focus-inside]'))
            .add(this.$navUsers.find('[data-trap-focus-inside]'));
        this.$trapFocusOutside = this.$navPages
            .find('[data-trap-focus-outside]')
            .add(this.$menuToggle.siblings('[data-trap-focus-outside]'))
            .add(this.$navUsers.find('[data-trap-focus-outside]'));

        this.$dropdowns.insertAfter(this.$header);

        this.bindEvents();
        this.initStickyHeader();
    }

    static getInstance() {
        if (!Menu._instance) Menu._instance = new Menu();
        return Menu._instance;
    }

    /**
     * Map collapsible relationships to make faster lookup descendant and ancestor collapsibles
     *
     * - add `descendentCollapsibleSet` to the source collapsible
     * - add `ancestorCollapsibleSet` to the target collapsible
     */
    mapCollapsibleRelationships() {
        this.menuCollapsible.descendentCollapsibleSet = new Set();

        this.collapsibleArray.forEach(source => {
            source.ancestorCollapsibleSet = new Set(); // eslint-disable-line
            source.descendentCollapsibleSet = new Set(); // eslint-disable-line

            if (!this.navUserCollapsibleArray.includes(source)) {
                this.menuCollapsible.descendentCollapsibleSet.add(source);
                source.ancestorCollapsibleSet.add(this.menuCollapsible);
            }

            this.collapsibleArray.forEach(target => {
                if (!target.ancestorCollapsibleSet) target.ancestorCollapsibleSet = new Set(); // eslint-disable-line

                if (source.hasCollapsible(target)) {
                    source.descendentCollapsibleSet.add(target);
                    target.ancestorCollapsibleSet.add(source);
                }
            });
        });
    }

    /**
     * Index collapsibles belongs to all `$target` elements by
     * adding `collapsibleInstanceArray` to data object of all `$target` elements
     */
    indexTargetCollapsibles() {
        this.collapsibleArray.forEach((collapsible) => {
            const collapsibles = collapsible.$target.data('collapsibleInstanceArray') || [];
            collapsibles.push(collapsible);
            collapsible.$target.data('collapsibleInstanceArray', collapsibles);
        });
    }

    /**
     * Check weather the collapsible is in the top level dropdown menu
     *
     * @param {Collapsible} collapsible
     * @returns Boolean
     */
    isInDropdown(collapsible) {
        return this.collapsibleArrayInDropdown.includes(collapsible);
    }

    /**
     * Get the bottom position of the header element
     *
     * @returns Number
     */
    get headerBottom() {
        return this.$header[0]?.getBoundingClientRect().bottom;
    }

    /**
     * Add focus navigation links to the menu
     *
     * - add `data-trap-focus-inside` next to the collapsible's toggle to go inside when focused
     * - add `data-trap-focus-outside` prepend and append to the collapsible's target to go outside when focused
     */
    trapFocusNavigation() {
        const addLinks = (collapsible) => {
            $('<a href="#" data-trap-focus-inside aria-hidden="true" tabindex="-1" aria-label="go inside"></a>')
                .data('collapsibleInstance', collapsible)
                .insertAfter(collapsible.$toggle);

            $('<a href="#" data-trap-focus-outside aria-hidden="true" tabindex="-1" aria-label="go inside"></a>')
                .data('collapsibleInstance', collapsible)
                .insertBefore(collapsible.$toggle);

            if (collapsible.$target.children('[data-trap-focus-outside]').length === 0) {
                collapsible.$target
                    .prepend('<a href="#" data-trap-focus-outside aria-label="go outside"></a>')
                    .append('<a href="#" data-trap-focus-outside aria-label="go outside"></a>');
            }
        };

        addLinks(this.menuCollapsible);
        this.collapsibleArray.forEach(collapsible => addLinks(collapsible));
    }

    /**
     * Find focusable elements inside the element
     *
     * @param {JQuery} $target
     */
    findFocusable$($target) {
        return $target.find(`
            a[href],
            button,
            input,
            select,
            textarea,
            [tabindex]
        `).not('[tabindex="-1"], :disabled, :hidden, [data-trap-focus-outside], [data-trap-focus-inside]');
    }

    /**
     * Enable focus trap the the focus navigation links (`data-trap-focus-inside` and `data-trap-focus-outside`)
     *
     * @param {Collapsible} collapsible
     */
    enableFocusTrap(collapsible) {
        collapsible.$toggle.next('[data-trap-focus-inside]')
            .removeAttr('tabindex')
            .attr('aria-hidden', 'false');

        collapsible.$toggle.prev('[data-trap-focus-outside]')
            .removeAttr('tabindex')
            .attr('aria-hidden', 'false')
            .data('collapsibleInstance', collapsible);

        collapsible.$target.children('[data-trap-focus-outside]')
            .data('collapsibleInstance', collapsible);
    }

    /**
     * Disable focus trap the the focus navigation links (`data-trap-focus-inside` and `data-trap-focus-outside`)
     *
     * @param {Collapsible} collapsible
     */
    disableFocusTrap(collapsible) {
        collapsible.$toggle.next('[data-trap-focus-inside]')
            .attr('tabindex', '-1')
            .attr('aria-hidden', 'true');

        collapsible.$toggle.prev('[data-trap-focus-outside]')
            .attr('tabindex', '-1')
            .attr('aria-hidden', 'true');

        // eslint-disable-next-line no-unused-expressions
        collapsible.$target.data('collapsibleInstanceArray')
            ?.forEach(c => {
                c.$toggle.next('[data-trap-focus-inside]')
                    .attr('tabindex', '-1')
                    .attr('aria-hidden', 'true');

                c.$toggle.prev('[data-trap-focus-outside]')
                    .attr('tabindex', '-1')
                    .attr('aria-hidden', 'true');
            });
    }

    /**
     * event handler for the navPages menu open called by the collapsible open event
     *
     * - on desktop: reset the mobile menu to always show.
     * - on mobile: show the mobile menu with animation.
     * - enable focus trap
     * - collapse all descendent submenus
     *
     * @param {JQuery.Event} _event
     * @param {Collapsible} collapsible active collapsible instance
     */
    onMenuOpen(_event, collapsible) {
        if (this.mediumMediaQuery.matches) {
            this.resetMobileMenu(collapsible);
        } else {
            this.showMobileMenu(collapsible);
        }
        this.enableFocusTrap(collapsible);
        this.collapseDescendants(collapsible);
    }

    /**
     * event handler for the navPages menu close called by the collapsible close event
     *
     * - on desktop: reset the mobile menu to always show.
     * - on mobile: close the mobile menu with animation.
     * - disable focus trap
     * - collapse all descendent submenus
     *
     * @param {JQuery.Event} _event
     * @param {Collapsible} collapsible active collapsible instance
     */
    onMenuClose(_event, collapsible) {
        if (this.mediumMediaQuery.matches) {
            this.resetMobileMenu(collapsible);
        } else {
            this.closeMobileMenu(collapsible);
        }
        this.disableFocusTrap(collapsible);
        this.collapseDescendants(collapsible);
    }

    /**
     * reset the menu on mobile
     *
     * - remove the `_menu-opened` class from the body
     * - reset the top position of the menu
     *
     * @param {Collapsible} collapsible active collapsible instance
     */
    resetMobileMenu(collapsible) {
        this.$body.removeClass('_menu-opened');
        collapsible.$target.css('top', '');
    }

    /**
     * Show menu on mobile
     *
     * - add the `_menu-opened` class to the body
     * - set the top position of the menu to below the header
     * - animate the menu
     *
     * @param {Collapsible} collapsible active collapsible instance
     */
    showMobileMenu(collapsible) {
        this.$body.addClass('_menu-opened');
        collapsible.$target.css('top', this.headerBottom);
        const focusVisible = collapsible.$toggle.is(':focus-visible');
        this.animate(collapsible.$target, () => {
            if (focusVisible) {
                this.findFocusable$(collapsible.$target).first().trigger('focus');
            }
        });
    }

    /**
     * Close menu on mobile
     *
     * - animate the menu
     * - reset the top position of the menu
     * - remove the `_menu-opened` class from the body
     *
     * @param {Collapsible} collapsible active collapsible instance
     */
    closeMobileMenu(collapsible) {
        this.animate(collapsible.$target, () => {
            collapsible.$target.css('top', '');
            this.$body.removeClass('_menu-opened');
        });
    }

    /**
     * event handler for the submenus open called by the collapsible open event
     *
     * - show the submenu with animation
     * - enable focus trap
     * - collapse all outside menus & descendent menus
     *
     * @param {JQuery.Event} _event
     * @param {Collapsible} collapsible active collapsible instance
     */
    onSubMenuOpen(_event, collapsible) {
        if (this.mediumMediaQuery.matches) {
            this.showDesktopSubMenu(collapsible);
        } else {
            this.showMobileSubMenu(collapsible);
        }
        this.enableFocusTrap(collapsible);
        this.collapseOthers(collapsible);
    }
    /**

     * Show submenu on desktop
     *
     * - set the submenu's position
     * - animate the submenu
     *
     * @param {Collapsible} collapsible active collapsible instance
     */
    showDesktopSubMenu(collapsible) {
        collapsible.$target.css('top', '');
        collapsible.$target.css('left', '');

        if (this.isInDropdown(collapsible)) {
            collapsible.$target.removeClass('_toLeft _toRight');

            const $parent = collapsible.$target.closest('._toLeft, ._toRight');

            if ($parent.hasClass('_toLeft')) {
                collapsible.$target.addClass('_toLeft');
            } else if ($parent.hasClass('_toRight')) {
                collapsible.$target.addClass('_toRight');
            }

            collapsible.$target.css('top', '');
            collapsible.$target.css('left', '');

            if (collapsible.$target[0].getBoundingClientRect().right > window.innerWidth) {
                collapsible.$target.removeClass('_toLeft').addClass('_toRight');
            }

            if (collapsible.$target[0].getBoundingClientRect().left < 0) {
                collapsible.$target.removeClass('_toRight').addClass('_toLeft');
            }
        } else {
            const collapsibles = (collapsible.$target.data('collapsibleInstanceArray') || [])
                .filter(c => !c.$toggle.is(':hidden'));

            const el = collapsibles.length > 1 ? collapsibles[0].$toggle.parent()[0] : collapsible.$toggle[0];

            const {
                left: toggleLeft,
                width: toggleWidth,
                bottom: toggleBottom,
            } = el.getBoundingClientRect();

            const { width } = collapsible.$target[0].getBoundingClientRect();

            let left = Math.max(toggleLeft + toggleWidth / 2 - width / 2, 0);
            if (left + width > window.innerWidth) {
                left = Math.max(window.innerWidth - width, 0);
            }

            const top = collapsible.$target.is('[data-ignore-header-position]')
                ? toggleBottom
                : window.scrollY + this.headerBottom;

            collapsible.$target.css('top', top);
            collapsible.$target.css('left', left);
        }

        this.animate(collapsible.$target);
    }

    /**
     * Show submenu on mobile
     *
     * - reset the submenu's position
     * - animate the submenu
     *
     * @param {Collapsible} collapsible active collapsible instance
     */
    showMobileSubMenu(collapsible) {
        collapsible.$target.css('top', this.headerBottom);
        collapsible.$target.css('left', '');
        const focusVisible = collapsible.$toggle.is(':focus-visible');
        this.animate(collapsible.$target, () => {
            if (focusVisible) {
                this.findFocusable$(collapsible.$target).first().trigger('focus');
            }
        });
    }

    /**
     * Collapse all outside collapsible(s) & descendent collapsible(s)
     *
     * @param {Collapsible} collapsible current collapsible instance
     */
    collapseOthers(collapsible) {
        // close all collapsible(s) that are not contains the current collapsible
        this.collapsibleArray.forEach(c => {
            if (c.targetId === collapsible.targetId) return; // is the current collapsible
            if (c.isCollapsed) return; // is already closed
            if (c.$toggle.is(':hidden')) return; // is hidden
            if (c.descendentCollapsibleSet.has(collapsible)) return; // is a ancestor collapsible
            c.close();
        });
    }

    /**
     * Collapse all descendent collapsible(s)
     *
     * @param {Collapsible} collapsible current collapsible instance
     */
    collapseDescendants(collapsible) {
        // eslint-disable-next-line no-unused-expressions
        collapsible.descendentCollapsibleSet?.forEach(c => {
            if (c.isCollapsed) return; // is already closed
            if (c.$toggle.is(':hidden')) return; // is hidden
            c.close();
        });
    }

    /**
     * event handler for the submenus close called by the collapsible close event
     *
     * - hide the submenu with animation
     * - disable focus trap
     * - collapse all descendent submenus
     *
     * @param {JQuery.Event} _event
     * @param {Collapsible} collapsible active collapsible instance
     */
    onSubMenuClose(_event, collapsible) {
        if (this.mediumMediaQuery.matches) {
            this.hideDesktopSubMenu(collapsible);
        } else {
            this.hideMobileSubMenu(collapsible);
        }
        this.disableFocusTrap(collapsible);
        this.collapseDescendants(collapsible);
    }

    /**
     * Hide submenu on desktop
     *
     * - animate the submenu
     * - reset the top position of the submenu
     *
     * @param {Collapsible} collapsible active collapsible instance
     */
    hideDesktopSubMenu(collapsible) {
        this.animate(collapsible.$target, () => {
            collapsible.$target.css('top', '');
        });
    }

    /**
     * Hide submenu on mobile
     *
     * - animate the submenu
     * - focus back the toggle element
     *
     * @param {Collapsible} collapsible active collapsible instance
     */
    hideMobileSubMenu(collapsible) {
        const focusVisible = collapsible.$toggle.is(':focus-visible');
        this.animate(collapsible.$target, () => {
            if (focusVisible) {
                const focusedCollapsible = collapsible.$target.data('collapsibleInstanceArray')?.filter(c => !c.$toggle.is(':hidden')).pop();
                if (focusedCollapsible) focusedCollapsible.$toggle.trigger('focus');
            }
        });
    }

    /**
     * event handler for the body click event
     *
     * - only process on mobile
     * - close the menu if the click target is outside of the menu
     *
     * @param {JQuery.Event} event
     */
    onBodyClick(event) {
        if (this.mediumMediaQuery.matches) return;

        const target = event.target;

        if (this.menuCollapsible && this.menuCollapsible.isOpen) {
            /** Click outside the **navPages** and **dropdown menus** and the **menu toggle**? */
            const isClickOutsideNavPagesAndDropdownsAndMenuToggle = this.$navPages.has(target).length === 0
                && this.$dropdowns.has(target).length === 0
                && this.$dropdowns.filter(target).length === 0
                && this.$menuToggle.has(target).length === 0
                && this.$menuToggle.filter(target).length === 0;

            if (isClickOutsideNavPagesAndDropdownsAndMenuToggle) {
                this.menuCollapsible.close();
            }
        }

        /** Opened collapsibles inside the **navUser(s)** */
        const openedNavUserCollapsibles = this.navUserCollapsibleArray.filter(c => c.isOpen && !c.$toggle.is(':hidden'));
        if (openedNavUserCollapsibles.length > 0) {
            /** Click on the **menu toggle**? */
            const isClickMenuToggle = this.$menuToggle.has(target).length > 0 || this.$menuToggle.filter(target).length > 0;

            if (isClickMenuToggle) {
                openedNavUserCollapsibles.forEach(c => c.close());
            } else {
                /** Click outside the **navUser(s)** and **dropdown menus**? */
                const isClickOutsideNavUsersAndDropdowns = this.$navUsers.has(target).length === 0
                    && this.$dropdowns.has(target).length === 0
                    && this.$dropdowns.filter(target).length === 0;

                if (isClickOutsideNavUsersAndDropdowns) {
                    openedNavUserCollapsibles.forEach(c => c.close());
                }
            }
        }
    }

    /**
     * event handler for the menu escape key event
     *
     * - close the current collapsible if it is open and focused
     * - close the parent collapsible or the menu collapsible
     *
     * @param {JQuery.Event} event
     */
    onMenuEscKey(event) {
        if (event.key === 'Escape') {
            const $target = $(event.target);
            if ($target.is('[data-collapsible]')) {
                const collapsible = $target.data('collapsibleInstance');
                if (collapsible.isOpen) {
                    collapsible.close();
                    return;
                }
            }

            const $parentTarget = $target.closest('[id]');
            const parentId = $parentTarget.attr('id');
            const parentCollapsible = $parentTarget.data('collapsibleInstanceArray')
                ?.filter(c => !c.$toggle.is(':hidden') && c.$toggle.closest('[id]').attr('id') !== parentId)
                .pop();

            if (parentCollapsible) {
                parentCollapsible.close();
                parentCollapsible.$toggle.trigger('focus');
            } else if (!this.menuCollapsible.disabled) {
                this.menuCollapsible.close();
                this.$menuToggle.trigger('focus');
            }
        }
    }

    /**
     * event handler for the menu focus out event
     *
     * - close collapsible(s) that are not contains the focused element
     *
     * @param {JQuery.Event} event
     */
    onMenuFocusOut(event) {
        if (!this.mediumMediaQuery.matches) return;

        const focusedElement = event.relatedTarget;
        // if (!focusedElement) return;

        if (focusedElement?.hasAttribute('data-trap-focus-inside')) return;
        if (focusedElement?.hasAttribute('data-trap-focus-outside')) return;

        // close collapsible(s) that are not contains the focused element
        this.collapsibleArray.forEach(c => {
            if (c.disabled) return false; // exclude disabled collapsible(s)
            if (c.$toggle.is(':hidden')) return false; // exclude hidden collapsible(s)
            if (c.isCollapsed) return false; // exclude closed collapsible(s)
            if (focusedElement && c.$target.has(focusedElement).length > 0) return false; // exclude collapsible(s) that contains the focused element
            c.close();
        });
    }

    /**
     * event handler for the focus event on the focus trap child element `data-trap-focus-inside`
     *
     * - focus to the first focusable element inside the collapsible target
     *
     * @param {JQuery.Event} event
     */
    onTrapFocusChildFocus(event) {
        const collapsible = $(event.currentTarget).data('collapsibleInstance');
        if (collapsible && collapsible.isOpen) {
            this.findFocusable$(collapsible.$target).first().trigger('focus');
        }
    }

    /**
     * event handler for the focus event on the focus trap parent element `data-trap-focus-outside`
     *
     * - close the collapsible
     * - focus to the collapsible toggle
     *
     * @param {JQuery.Event} event
     */
    onTrapFocusParentFocus(event) {
        const collapsible = $(event.currentTarget).data('collapsibleInstance');
        if (collapsible) {
            collapsible.close();
            collapsible.$toggle.trigger('focus');
        }
    }

    /**
     * event handler for the mouse enter event on the collapsible toggle
     *
     * when the toggle is hovered:
     * - only process on desktop and collapsible is visible
     * - cancel closing any collapsible(s) associated with the collapsible target
     * - open the collapsible if it is closed
     *
     * @param {JQuery.Event} event
     */
    onToggleMouseEnter(event) {
        // stop if not desktop
        if (!this.mediumMediaQuery.matches) return;

        // stop if collapsible is hidden
        const collapsible = $(event.currentTarget).data('collapsibleInstance');
        if (!collapsible || collapsible.$toggle.is(':hidden')) return;

        // cancel closing any collapsible(s) associated with the collapsible target
        const collapsibles = collapsible.$target.data('collapsibleInstanceArray');
        if (collapsibles) collapsibles.forEach(c => this.closingCollapsibleSet.delete(c));

        // open the collapsible if it is closed
        if (collapsible.isCollapsed) collapsible.open();
    }

    /**
     * event handler for the mouse leave event on the collapsible toggle
     *
     * when the toggle is mouse out:
     * - only process on desktop and collapsible is visible & open
     * - close the collapsible after a few milliseconds
     *
     * @param {JQuery.Event} event
     */
    onToggleMouseLeave(event) {
        // stop if not desktop
        if (!this.mediumMediaQuery.matches) return;

        // stop if collapsible is not open
        const collapsible = $(event.currentTarget).data('collapsibleInstance');
        if (!collapsible || collapsible.$toggle.is(':hidden') || collapsible.isCollapsed) return;

        // close the collapsible after a few milliseconds
        this.willCloseCollapsible(collapsible);
    }

    /**
     * Schedule to close the collapsible after a few milliseconds
     *
     * @param {Collapsible} collapsible
     */
    willCloseCollapsible(collapsible) {
        this.closingCollapsibleSet.add(collapsible);
        this.closeCollapsibleDebounce();
    }

    /**
     * Close the collapsible(s) that are scheduled to close
     */
    closeCollapsibles() {
        this.closingCollapsibleSet.forEach(collapsible => {
            if (collapsible.$toggle.is(':hidden') || collapsible.isCollapsed) return;
            collapsible.close();
        });

        this.closingCollapsibleSet.clear();
    }

    /**
     * event handler for the mouse enter event on the collapsible target
     *
     * when the target is hovered:
     * - only process on desktop
     * - cancel closing any collapsible(s) associated with the collapsible target
     *
     * @param {JQuery.Event} event
     */
    onTargetMouseEnter(event) {
        // stop if not desktop
        if (!this.mediumMediaQuery.matches) return;

        // cancel closing any collapsible(s) associated with the collapsible target
        const collapsibles = $(event.currentTarget).data('collapsibleInstanceArray') || [];
        collapsibles.forEach(collapsible => this.closingCollapsibleSet.delete(collapsible));
    }

    /**
     * event handler for the mouse leave event on the collapsible target
     *
     * when the target is mouse out:
     * - only process on desktop
     * - close the visible & opened collapsible(s) associated with the collapsible target
     *
     * @param {JQuery.Event} event
     */
    onTargetMouseLeave(event) {
        if (!this.mediumMediaQuery.matches) return;

        const collapsibles = $(event.currentTarget).data('collapsibleInstanceArray') || [];
        collapsibles.forEach(collapsible => {
            if (collapsible.$toggle.is(':hidden') || collapsible.isCollapsed) return;
            this.willCloseCollapsible(collapsible);
        });
    }

    /**
     * event handler for the mouse enter event on the menu item's container (`.navPages-item`)
     *
     * - only process on desktop
     * - create a gap layer to between the menu item and dropdown menu to prevent closing menu when mouse move between them
     *
     * @param {JQuery.Event} event
     */
    onGapMouseEnter(event) {
        if (!this.mediumMediaQuery.matches) return;
        this.createDropdownGapLayer(event.currentTarget);
    }

    /**
     * event handler for the mouse leave event on the menu item's container (`.navPages-item`)
     *
     * - only process on desktop
     * - remove the gap layer between the menu item and dropdown menu
     *
     * @param {JQuery.Event} event
     */
    onGapMouseLeave(event) {
        if (!this.mediumMediaQuery.matches) return;
        this.removeDropdownGapLayer(event.currentTarget);
    }

    /**
     * Create a gap layer between the menu item and dropdown menu to prevent closing menu when mouse move between them
     *
     * @param {HTMLElement} element element that contains the toggle, e.g. `.navPages-item`
     */
    createDropdownGapLayer(element) {
        const $el = $(element);

        const bottom = element.getBoundingClientRect().bottom;
        const distance = this.headerBottom - bottom;

        $el.addClass('_gap-cover');
        $el.css('--eyeva-menu-dropdown-distance', `${distance}px`);
    }

    /**
     * Remove the gap layer between the menu item and dropdown menu
     *
     * @param {HTMLElement} element element that contains the toggle, e.g. `.navPages-item`
     */
    removeDropdownGapLayer(element) {
        $(element).removeClass('_gap-cover');
    }

    /**
     * Bind events for the menu
     */
    bindEvents() {
        this.$menuToggle
            .on(CollapsibleEvents.open, this.onMenuOpen)
            .on(CollapsibleEvents.close, this.onMenuClose);

        this.$collapsibles
            .on(CollapsibleEvents.open, this.onSubMenuOpen)
            .on(CollapsibleEvents.close, this.onSubMenuClose);

        this.$dropdowns
            .on('keydown', this.onMenuEscKey)
            .on('focusout', this.onMenuFocusOut);

        this.$navPages
            .on('keydown', this.onMenuEscKey)
            .on('focusout', this.onMenuFocusOut);

        this.$navUsers
            .on('keydown', this.onMenuEscKey)
            .on('focusout', this.onMenuFocusOut);

        this.$gaps
            .on('mouseenter', this.onGapMouseEnter)
            .on('mouseleave', this.onGapMouseLeave);

        this.collapsibleArray.forEach(collapsible => {
            collapsible.$toggle
                .on('mouseenter', this.onToggleMouseEnter)
                .on('mouseleave', this.onToggleMouseLeave);

            collapsible.$target
                .on('mouseenter', this.onTargetMouseEnter)
                .on('mouseleave', this.onTargetMouseLeave);
        });

        this.$trapFocusInside.on('focusin', this.onTrapFocusChildFocus);
        this.$trapFocusOutside.on('focusin', this.onTrapFocusParentFocus);
        this.$body.on('click', this.onBodyClick);
    }

    /**
     * Initialize sticky header
     *
     * - Add sticky header class when the header is sticky
     */
    initStickyHeader() {
        if (this.$header.css('position') !== 'sticky') return;

        const $check = $('<div class="_sticky-header-check"></div>').css({ height: 0, overflow: 'hidden', position: 'absolute' }).insertBefore(this.$header);
        const checkEl = $check[0];

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.boundingClientRect.top <= 0 && entry.intersectionRatio < 1) {
                    this.$header.addClass('_is-sticky');
                } else {
                    this.$header.removeClass('_is-sticky');
                }
            },
            {
                root: null, // Observe relative to the viewport
                rootMargin: `0px 0px -${checkEl.offsetHeight}px 0px`, // Adjust observation margin to detect stickiness
                threshold: [0, 1], // Detect when element enters/exits
            },
        );
        observer.observe(checkEl);
    }

    /**
     * Animate the element
     *
     * @param {JQuery} $target
     * @param {Function} callback
     */
    animate($target, callback = () => {}) {
        if (!this.$body.hasClass('_animation-off') && !$target.hasClass('_animation-off')) {
            $target.addClass('_animating');
            const duration = toMilliseconds($target.css('animation-duration'));
            setTimeout(() => {
                $target.removeClass('_animating');
                callback();
            }, duration);
        } else {
            callback();
        }
    }
}

export default function (context) {
    if (context.menu_editing) return;
    return Menu.getInstance();
}
