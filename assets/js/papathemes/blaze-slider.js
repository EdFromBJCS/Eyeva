import BlazeSlider from 'blaze-slider';

if (!BlazeSlider.prototype.startAutoplay) {
    const isTouch = () => 'ontouchstart' in window;
    const handleAutoplay = (slider) => {
        const config = slider.config;
        if (!config.enableAutoplay) return;
        const dir = config.autoplayDirection === 'to left' ? 'next' : 'prev';
        // eslint-disable-next-line no-param-reassign
        slider.autoplayTimer = setInterval(() => {
            slider[dir]();
        }, config.autoplayInterval);
        if (config.stopAutoplayOnInteraction) {
            slider.el.addEventListener(isTouch() ? 'touchstart' : 'mousedown', () => {
                clearInterval(slider.autoplayTimer);
            }, { once: true });
        }
    };

    // eslint-disable-next-line func-names
    BlazeSlider.prototype.startAutoplay = function () {
        this.config.enableAutoplay = true;
        handleAutoplay(this);
    };
}

/**
 * Init Blaze Slider
 *
 * @param {jQuery|HTMLElement|string} element jQuery object, HTMLElement, or selector string
 */
export default function initBlazeSlider(element = '[data-blaze-slider]') {
    let $scope = element;

    if (element instanceof HTMLElement || typeof element === 'string') {
        $scope = $(element);
    }

    $scope.each((_, el) => {
        const $el = $(el);
        if ($el.data('blazeSliderInstance')) return;

        const slider = new BlazeSlider($el.get(0), $el.data('blazeSlider'));

        $el.data('blazeSliderInstance', slider);
        $el.find('.blaze-pause').on('click', (event) => {
            event.preventDefault();
            if (slider.config.enableAutoplay) {
                slider.config.enableAutoplay = false;
                slider.stopAutoplay();
                $el.addClass('paused');
            } else {
                slider.config.enableAutoplay = true;
                slider.startAutoplay();
                $el.removeClass('paused');
            }
        });
    });
}
