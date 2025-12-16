import mustache from 'mustache';
import { createFocusTrap } from 'focus-trap';
import { ModalEvents } from '../theme/global/modal';

const PREFIX = 'papathemes__';

class ModalStack {
    static _instance = null; // Private static field to hold the singleton instance
    modals = [];

    // Accessor method to get the single instance
    static getInstance() {
        if (!ModalStack._instance) {
            ModalStack._instance = new ModalStack(); // Private constructor usage
        }
        return ModalStack._instance;
    }

    // Private constructor
    constructor() {
        if (ModalStack._instance) {
            throw new Error('ModalStack is a singleton. Use ModalStack.getInstance() instead.');
        }
        this.onBCModalOpened = this.onBCModalOpened.bind(this);
        this.onBCModalClosed = this.onBCModalClosed.bind(this);
        this.bindEvents();
    }

    bindEvents() {
        $('body').on(ModalEvents.opened, '[data-reveal]', this.onBCModalOpened);
        $('body').on(ModalEvents.closed, '[data-reveal]', this.onBCModalClosed);
    }

    onBCModalOpened() {
        const modal = this.modals[this.modals.length - 1];
        if (modal) modal.hideModal();
    }

    onBCModalClosed() {
        const hasBCModalOpened = $('[data-reveal]:visible').length > 0;
        if (!hasBCModalOpened) {
            const modal = this.modals[this.modals.length - 1];
            if (modal) modal.showModal();
        }
    }

    add(modal) {
        const lastModal = this.modals[this.modals.length - 1];
        if (lastModal) lastModal.hideModal();

        this.modals.push(modal);
    }

    remove(modal) {
        this.modals = this.modals.filter((m) => m !== modal);

        const lastModal = this.modals[this.modals.length - 1];
        if (lastModal) lastModal.showModal();
    }
}

export { ModalStack };

export default class Modal {
    $modal;

    $lastActiveElement;

    focusTrap;

    $body = $('body');

    constructor({
        modalTemplate = `
            <div class="${PREFIX}modal-overlay {{overlayExtraClass}}">
                <div class="${PREFIX}modal {{modalExtraClass}}" data-papathemes-modal>
                    <button class="${PREFIX}modal-close" type="button" title="Close" data-papathemes-modal-close>
                        <span class="aria-description--hidden">Close</span>
                        <span class="icon" aria-hidden="true">
                            <svg><use href="#icon-xmark-large"></use></svg>
                        </span>
                    </button>
                    {{#modalTitle}}
                        <div class="${PREFIX}modal-header">
                            {{modalTitle}}
                        </div>
                    {{/modalTitle}}
                    {{#loading}}
                        <div class="loadingOverlay ${PREFIX}modal-loading"></div>
                    {{/loading}}
                    {{^loading}}
                        <div class="${PREFIX}modal-body">
                            {{&content}}
                        </div>
                    {{/loading}}
                </div>
            </div>
        `,
        overlayExtraClass = '',
        modalExtraClass = '',
        modalTitle = '',
        closeOnBackgroundClick = false,
        closeOnEsc = false,
        stackable = false,
    } = {}) {
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onBodyClickCloseModal = this.onBodyClickCloseModal.bind(this);
        this.modalTemplate = modalTemplate;
        this.overlayExtraClass = overlayExtraClass;
        this.modalExtraClass = modalExtraClass;
        this.modalTitle = modalTitle;
        this.closeOnBackgroundClick = closeOnBackgroundClick;
        this.closeOnEsc = closeOnEsc;
        this.stackable = stackable;
        this.modalStack = ModalStack.getInstance();
        this.$modal = null;
    }

    openModal(content = '', loading = false) {
        if (this.$modal && this.$modal.length > 0) return;

        this.$lastActiveElement = $(document.activeElement);
        this.$body.addClass(`_${PREFIX}modal-opened`);

        const { overlayExtraClass, modalExtraClass, modalTitle } = this;

        this.$modal = $(mustache.render(this.modalTemplate, {
            content,
            loading,
            overlayExtraClass,
            modalExtraClass,
            modalTitle,

        }));
        this.$modal.hide().appendTo('body').addClass('_opening').show().removeClass('_opening');

        this.bindEvents();

        this.focusTrap = createFocusTrap(this.$modal.get(0), {
            escapeDeactivates: false,
            returnFocusOnDeactivate: false,
            allowOutsideClick: true,
        });

        this.focusTrap.activate();

        setTimeout(() => {
            this.$modal.find('[data-papathemes-modal-close]').trigger('focus');
        }, 200);

        if (this.stackable) this.modalStack.add(this);
    }

    updateContent(content) {
        const { overlayExtraClass, modalExtraClass, modalTitle } = this;
        const $modal = $(mustache.render(this.modalTemplate, {
            content,
            overlayExtraClass,
            modalExtraClass,
            modalTitle,
        }));
        this.$modal.find('[data-papathemes-modal]').replaceWith($modal.find('[data-papathemes-modal]'));
        this.bindEvents();
    }

    closeModal() {
        if (!this.$modal) return; // Ngăn chặn gọi closeModal nhiều lần

        this.$body.off('click', this.onBodyClickCloseModal);
        this.$modal.addClass('_closing');

        setTimeout(() => {
            this.$body.removeClass(`_${PREFIX}modal-opened`);
            if (this.$modal) {
                this.$modal.remove();
                this.$modal = null;
            }
            this.focusTrap.deactivate();
            this.$lastActiveElement.trigger('focus');
            if (this.stackable) this.modalStack.remove(this);
        }, 300);

        if (this.closeOnEsc) this.unbindEscEvent();
    }

    hideModal() {
        if (!this.$modal || this.$modal.is(':hidden')) return;

        this.$modal.addClass('_closing');
        this.$body.removeClass(`_${PREFIX}modal-opened`);
        this.focusTrap.deactivate();
        this.$lastActiveElement.trigger('focus');

        setTimeout(() => {
            this.$modal.hide().addClass('_hidden').removeClass('_closing');
        }, 300);

        if (this.closeOnEsc) this.unbindEscEvent();
    }

    showModal() {
        if (!this.$modal || this.$modal.is(':visible')) return;

        this.$body.addClass(`_${PREFIX}modal-opened`);
        this.$modal.removeClass('_hidden').addClass('_opening').show().removeClass('_opening');
        this.focusTrap.activate();

        if (this.closeOnEsc) this.bindEscEvent();
    }

    bindEvents() {
        this.$modal.find('[data-papathemes-modal-close]').off('click').on('click', (event) => {
            event.preventDefault();
            this.closeModal();
        });

        if (this.closeOnBackgroundClick) {
            // make sure modal is finished displaying before binding the click event
            // to prevent closing the modal immediately
            setTimeout(() => {
                this.$body
                    .off('click', this.onBodyClickCloseModal)
                    .on('click', this.onBodyClickCloseModal);
            }, 500);
        }

        if (this.closeOnEsc) {
            this.unbindEscEvent();
            this.bindEscEvent();
        }
    }

    onBodyClickCloseModal(event) {
        const $target = $(event.target);
        if (this.$modal && this.$modal.is(':visible') &&
            ($target.is(this.$modal) || $target.closest(this.$modal).length === 0)
        ) {
            this.closeModal();
        }
    }


    onKeyUp(event) {
        if (event.key === 'Escape') {
            this.closeModal();
        }
    }

    bindEscEvent() {
        $(document).on('keyup', this.onKeyUp);
    }

    unbindEscEvent() {
        $(document).off('keyup', this.onKeyUp);
    }
}
