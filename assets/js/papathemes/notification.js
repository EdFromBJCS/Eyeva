import mustache from 'mustache';

let instance;

class Notification {
    template = `
        <div class="papathemes__notifications">
        </div>
    `;

    itemTemplate = `
        <div class="papathemes__notifications-item {{className}}">
            {{&icon}}
            <div class="_content">
                {{&content}}
            </div>
            {{&close}}
        </div>
    `;

    closeTemplate = `
        <button type="button" class="papathemes__notifications-close">
            <span class="is-srOnly">Close</span>
            <i class="icon" aria-hidden="true"><svg><use href="#icon-xmark-large"></use></svg></i>
        </button>
    `;

    constructor() {
        this.$notifications = $(mustache.render(this.template))
            .hide()
            .appendTo('body');

        this.hideTimeout = null;
    }

    info(content, icon, timeout) {
        this.show(content, icon, timeout, '_info');
    }

    error(content, icon, timeout) {
        this.show(content, icon, timeout, '_error');
    }

    show(content, icon, timeout = 5000, className = '') {
        clearTimeout(this.hideTimeout);

        const close = mustache.render(this.closeTemplate);
        const $item = $(mustache.render(this.itemTemplate, {
            content, icon, close, className,
        }));

        this.$notifications.append($item).show();
        $item.addClass('_showing');

        const closeFnc = () => {
            $item.removeClass('_showing');
            setTimeout(() => {
                $item.remove();
                this.updateNotifications();
            }, 500);
        };

        const timer = setTimeout(closeFnc, timeout);

        $item.find('.papathemes__notifications-close').on('click', (event) => {
            event.preventDefault();
            clearTimeout(timer);
            closeFnc();
        });
    }

    updateNotifications() {
        clearTimeout(this.hideTimeout);

        if (this.$notifications.is(':empty')) {
            this.hideTimeout = setTimeout(() => {
                this.$notifications.hide();
            }, 500);
        }
    }
}

export default function () {
    if (!instance) {
        instance = new Notification();
    }
    return instance;
}
