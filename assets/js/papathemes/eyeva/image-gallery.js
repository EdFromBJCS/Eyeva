import 'easyzoom';
import mustache from 'mustache';
import { createFocusTrap } from 'focus-trap';
import { tools } from '@bigcommerce/stencil-utils';
import CornerstoneImageGallery from '../../theme/product/image-gallery';

const DEFAULT_STEP = 360;
class ImageGalleryModal {
    modalTemplate = `
        <div class="eyeva__imageGalleryModal-overlay">
            <div class="eyeva__imageGalleryModal">
                <button class="eyeva__imageGalleryModal-close" type="button" title="Close" data-eyeva-image-gallery-modal-close>
                    <span class="aria-description--hidden">Close</span>
                    <span class="icon" aria-hidden="true">
                        <svg><use href="#icon-xmark-large"></use></svg>
                    </span>
                </button>
                <div class="eyeva__imageGalleryModal-body">
                    <div class="eyeva__imageGalleryModal-main">
                        <div class="eyeva__imageGalleryModal-main-easyzoom" data-eyeva-image-gallery-modal-easyzoom>
                            <div class="eyeva__imageGalleryModal-main-img-container" data-eyeva-image-gallery-modal-main-img-container>
                                {{&mainImageLinkElement}}
                            </div>
                        </div>
                        <div class="eyeva__imageGalleryModal-main-360" data-eyeva-image-gallery-modal-360 style="display:none">
                            <div class="eyeva__imageGalleryModal-360-img-container" data-eyeva-image-gallery-modal-360-img-container>
                                <img class="lazyload" data-sizes="auto" />
                            </div>
                            <div class="eyeva__imageGalleryModal-360-controls">
                                <button type="button" class="_btn _btn-previous" data-eyeva-image-gallery-modal-360-previous>
                                    <span class="icon" aria-hidden="true"><svg><use href="#icon-arrow-left-long"></use></svg></span>
                                    <span class="is-srOnly">Previous</span>
                                </button>
                                <button type="button" class="_btn _btn-play" data-eyeva-image-gallery-modal-360-play>
                                    <span class="icon" aria-hidden="true"><svg><use href="#icon-play"></use></svg></span>
                                    <span class="is-srOnly">Play</span>
                                </button>
                                <button type="button" class="_btn _btn-pause" data-eyeva-image-gallery-modal-360-pause>
                                    <span class="icon" aria-hidden="true"><svg><use href="#icon-pause"></use></svg></span>
                                    <span class="is-srOnly">Pause</span>
                                </button>
                                <button type="button" class="_btn _btn-next" data-eyeva-image-gallery-modal-360-next>
                                    <span class="icon" aria-hidden="true"><svg><use href="#icon-arrow-right-long"></use></svg></span>
                                    <span class="is-srOnly">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="eyeva__imageGalleryModal-main-video" data-eyeva-image-gallery-modal-video-player style="display:none">
                            <iframe
                                class="lazyload"
                                type="text/html"
                                width="640"
                                height="390"
                                frameborder="0"
                                webkitAllowFullScreen
                                mozallowfullscreen
                                allowFullScreen
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                            </iframe>
                        </div>
                    </div>
                    <div class="eyeva__imageGalleryModal-content">
                        <h2 class="eyeva__imageGalleryModal-title">{{name}}</h2>

                        {{#videos.length}}
                            <div class="eyeva__imageGalleryModal-videos">
                                <p class="eyeva__imageGalleryModal-label">{{videosLabel}}</p>
                                <ul class="eyeva__imageGalleryModal-thumbnails">
                                    {{#videos}}
                                        <li class="eyeva__imageGalleryModal-thumbnail">
                                            {{&linkElement}}
                                    {{/videos}}
                                </ul>
                            </div>
                        {{/videos.length}}

                        {{#images360.length}}
                            <div class="eyeva__imageGalleryModal-360">
                                <p class="eyeva__imageGalleryModal-label">{{images360Label}}</p>
                                <ul class="eyeva__imageGalleryModal-thumbnails">
                                    {{#images360}}
                                        <li class="eyeva__imageGalleryModal-thumbnail">
                                            {{&linkElement}}
                                        </li>
                                    {{/images360}}
                                </ul>
                            </div>
                        {{/images360.length}}

                        {{#images.length}}
                            <div class="eyeva__imageGalleryModal-images">
                                <p class="eyeva__imageGalleryModal-label">{{imagesLabel}}</p>
                                <ul class="eyeva__imageGalleryModal-thumbnails">
                                    {{#images}}
                                        <li class="eyeva__imageGalleryModal-thumbnail">
                                            {{&linkElement}}
                                        </li>
                                    {{/images}}
                                </ul>
                            </div>
                        {{/images.length}}
                    </div>
                </div>
            </div>
        </div>
    `;

    /**
     *
     * @param {ImageGallery?} imageGallery
     * @param {jQuery?} $gallery
     */
    constructor(imageGallery = null, $gallery = null) {
        this.imageGallery = imageGallery;
        this.$gallery = $gallery;
        this.$body = $('body');

        if (imageGallery && $gallery) {
            this.createModal();
        }
    }

    bindEvents() {
        if (this.$gallery) {
            // open modal when click on video, 360 view, or more image thumbnails
            this.$gallery
                .find('[data-image-gallery-item-video], [data-image-gallery-item-360], [data-image-gallery-item-more]')
                .find('[data-image-gallery-item-video-id], [data-image-gallery-item]')
                .off('click')
                .on('click', (event) => {
                    event.preventDefault();
                    const $a = $(event.currentTarget);

                    const imageUrl = $a.data('imageGalleryNewImageUrl');
                    const imageSrcset = $a.data('imageGalleryNewImageSrcset');
                    const zoomImageUrl = $a.data('imageGalleryZoomImageUrl');
                    const videoId = $a.data('imageGalleryItemVideoId');
                    const step = $a.closest('[data-image-gallery-item-360]').length > 0
                        ? Number(imageUrl.split('#')[1]) || DEFAULT_STEP
                        : null;

                    this.openModal(imageUrl, imageSrcset, zoomImageUrl, videoId, step);
                });
        }

        // close modal when click close button
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-close]').on('click', (event) => {
            event.preventDefault();
            this.closeModal();
        });

        // close modal when press Escape key
        this.$galleryModal.on('keydown', (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                this.closeModal();
            }
        });

        // close modal when click outside (overlay)
        this.$galleryModal.on('click', (event) => {
            if (this.$galleryModal.is(event.target)) {
                event.preventDefault();
                this.closeModal();
            }
        });

        // image thumbnails
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-item]').on('click', (event) => {
            event.preventDefault();
            const $a = $(event.currentTarget);
            this.setMainImage(
                $a.data('imageGalleryNewImageUrl'),
                $a.data('imageGalleryNewImageSrcset'),
                $a.data('imageGalleryZoomImageUrl'),
            );
        });

        // video thumbnails
        this.$galleryModal.find('[data-image-gallery-item-video-id]').on('click', (event) => {
            event.preventDefault();
            const $a = $(event.currentTarget);
            const videoId = $a.data('imageGalleryItemVideoId');
            this.setMainVideo(videoId);
        });

        // 360 image thumbnails
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-item-rotator]').on('click', (event) => {
            event.preventDefault();
            const $a = $(event.currentTarget);
            const totalStep = $a.data('eyevaImageGalleryModalItemRotator');
            this.setMain360(
                $a.data('imageGalleryNewImageUrl'),
                $a.data('imageGalleryNewImageSrcset'),
                $a.data('imageGalleryZoomImageUrl'),
                totalStep,
            );
        });

        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-previous]').on('click', (event) => {
            event.preventDefault();
            this.previous360Step();
        });

        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-next]').on('click', (event) => {
            event.preventDefault();
            this.next360Step();
        });

        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-play]').on('click', (event) => {
            event.preventDefault();
            this.play360();
        });

        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-pause]').on('click', (event) => {
            event.preventDefault();
            this.pause360();
        });
    }

    destroyModal() {
        if (this.$galleryModal) {
            this.$galleryModal.remove();
            this.$galleryModal = $();
        }
    }

    createModal() {
        const $mainImageLink = this.imageGallery.$mainImage.find('a').clone();
        $mainImageLink.find('img').removeAttr('data-zoom-image').attr('data-eyeva-gallery-modal-main-image', '');

        const mainImageLinkElement = $mainImageLink.get(0)?.outerHTML;
        const name = this.$gallery.closest('.productView').find('[data-eyeva-product-title]').text();
        const videosLabel = this.$gallery.data('videosLabel') || 'Videos';
        const images360Label = this.$gallery.data('images360Label') || '360 View';
        const imagesLabel = this.$gallery.data('imagesLabel') || 'Product Images';

        const videos = this.$gallery.find('[data-image-gallery-item-video]').get().map(li => ({
            linkElement: $(li).find('[data-image-gallery-item-video-id]').clone().get(0)?.outerHTML,
        }));

        const images360 = this.$gallery.find('[data-image-gallery-item-360]').get().map(li => {
            const $el = $(li).find('[data-image-gallery-item]').clone();
            const imageUrl = $el.data('imageGalleryNewImageUrl');
            const step = Number(imageUrl.split('#')[1]) || DEFAULT_STEP;
            $el.removeAttr('data-image-gallery-item').attr('data-eyeva-image-gallery-modal-item-rotator', step);

            return {
                linkElement: $el.get(0)?.outerHTML,
            };
        });

        const images = this.$gallery.find('[data-image-gallery-item]').get()
            .filter(a => $(a).closest('[data-image-gallery-item-video], [data-image-gallery-item-360], [data-image-gallery-item-more]').length === 0)
            .map(a => {
                const $a = $(a).clone()
                    .removeAttr('data-image-gallery-item')
                    .attr('data-eyeva-image-gallery-modal-item', '');

                return {
                    linkElement: $a.get(0)?.outerHTML,
                };
            });

        this.$galleryModal = $(mustache.render(this.modalTemplate, {
            mainImageLinkElement,
            name,
            videosLabel,
            images360Label,
            imagesLabel,
            videos,
            images360,
            images,
        }));

        this.$galleryModal.hide().appendTo(this.$body);

        this.initImageZoom();

        this.focusTrap = createFocusTrap(this.$galleryModal.get(0), {
            escapeDeactivates: false,
            returnFocusOnDeactivate: false,
            allowOutsideClick: true,
        });
    }

    openModal(imageUrl, imageSrcset, zoomImageUrl, videoId, totalStep) {
        this.$lastActiveElement = $(document.activeElement);
        this.$body.addClass('_galleryModal-opened');

        if (this.imageGallery) {
            const $mainImg = this.imageGallery.$mainImage.find('img');
            this.setMainImage(
                $mainImg.attr('src'),
                $mainImg.attr('srcset'),
                this.imageGallery.$mainImage.attr('data-zoom-image'),
            );
        }

        if (videoId) {
            this.setMainVideo(videoId);
        } else if (totalStep) {
            this.setMain360(imageUrl, imageSrcset, zoomImageUrl, totalStep);
        }

        this.$galleryModal.addClass('_opening').show().removeClass('_opening');
        this.focusTrap.activate();

        setTimeout(() => {
            this.$galleryModal.find('[data-eyeva-image-gallery-modal-close]').trigger('focus');
        }, 200);
    }

    closeModal() {
        this.$galleryModal.addClass('_closing');
        setTimeout(() => {
            this.hideMainVideo();
            this.hide360UI();
            this.$body.removeClass('_galleryModal-opened');
            this.$galleryModal.removeClass('_closing').hide();
            this.focusTrap.deactivate();
            if (this.$lastActiveElement) this.$lastActiveElement.trigger('focus');
        }, 300);
    }

    setMainImage(mainImageUrl, mainImageSrcset, zoomImageUrl) {
        this.hideMainVideo();
        this.hide360UI();
        this.showMainImage();

        this.setActiveThumb(mainImageUrl);
        this.swapMainImage(mainImageUrl, mainImageSrcset, zoomImageUrl);
    }

    showMainImage() {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]').show();
    }

    hideMainImage() {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]').hide();
    }

    setActiveThumb(mainImageUrl, videoId) {
        this.$galleryModal.find('[data-image-gallery-new-image-url], [data-image-gallery-item-video-id]').removeClass('is-active')
            .filter((_i, a) =>
                mainImageUrl && $(a).data('imageGalleryNewImageUrl') === mainImageUrl
                || videoId && $(a).data('imageGalleryItemVideoId') === videoId)
            .addClass('is-active');
    }

    swapMainImage(mainImageUrl, mainImageSrcset, zoomImageUrl) {
        const $imageContainer = this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]');
        const $a = $imageContainer.find('a');
        const $mainImage = this.$galleryModal.find('[data-eyeva-gallery-modal-main-image]');

        $imageContainer.attr('data-zoom-image', zoomImageUrl);
        $a.attr('href', zoomImageUrl);
        $mainImage.attr('src', mainImageUrl).attr('srcset', mainImageSrcset);

        this.easyzoom.data('easyZoom').swap(
            mainImageUrl,
            zoomImageUrl,
            mainImageSrcset,
        );

        const isBrowserIE = navigator.userAgent.includes('Trident');
        if (isBrowserIE) {
            const fallbackStylesIE = {
                'background-image': `url(${mainImageUrl})`,
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'background-origin': 'content-box',
                'background-size': 'contain',
            };
            this.$galleryModal.find('[data-eyeva-image-gallery-modal-main-image]').css(fallbackStylesIE);
        }
    }

    checkImage() {
        const $imageContainer = this.$galleryModal.find('[data-eyeva-image-gallery-modal-main-img-container]');
        const containerHeight = $imageContainer.height();
        const containerWidth = $imageContainer.width();

        const $image = this.easyzoom.data('easyZoom').$zoom;
        const height = $image.height();
        const width = $image.width();

        if (height < containerHeight || width < containerWidth) {
            this.easyzoom.data('easyZoom').hide();
        }
    }

    initImageZoom() {
        this.easyzoom = this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]').easyZoom({
            onShow: () => this.checkImage(),
            errorNotice: '',
            loadingNotice: '',
        });
    }

    showMainVideo() {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-video-player]').show();
    }

    hideMainVideo() {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-video-player]').hide()
            .find('iframe').attr('src', '');
    }

    setMainVideo(videoId) {
        this.hideMainImage();
        this.hide360UI();
        this.showMainVideo();

        const src = `https://www.youtube.com/embed/${videoId}?ref=0&autoplay=1`;
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-video-player]').show().find('iframe').attr('src', src);
        this.setActiveThumb(null, videoId);
    }

    setMain360(mainImageUrl, mainImageSrcset, zoomImageUrl, totalStep) {
        this.hideMainImage();
        this.hideMainVideo();
        this.show360UI();
        this.setActiveThumb(mainImageUrl);
        this.swapMain360(mainImageUrl, mainImageSrcset, zoomImageUrl, totalStep);
    }

    swapMain360(mainImageUrl, mainImageSrcset, zoomImageUrl, totalStep) {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-img-container] img')
            .attr('src', mainImageUrl)
            .attr('srcset', mainImageSrcset)
            .attr('data-zoom-image', zoomImageUrl);
        this.set360CurrentStep(0, totalStep);
    }

    show360UI() {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').show();
    }

    hide360UI() {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').hide();
        this.pause360();
    }

    set360CurrentStep(currentStep, totalStep = DEFAULT_STEP) {
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]')
            .css('--image-360-current', currentStep)
            .css('--image-360-steps', totalStep);
    }

    next360Step() {
        const $el = this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]');
        const step = Number($el.css('--image-360-current')) || 0;
        const total = Number($el.css('--image-360-steps')) || DEFAULT_STEP;

        if (step < total - 1) {
            this.set360CurrentStep(step + 1, total);
        } else {
            this.set360CurrentStep(0, total);
        }
    }

    previous360Step() {
        const $el = this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]');
        const step = Number($el.css('--image-360-current')) || 0;
        const total = Number($el.css('--image-360-steps')) || DEFAULT_STEP;

        if (step > 0) {
            this.set360CurrentStep(step - 1, total);
        } else {
            this.set360CurrentStep(total - 1, total);
        }
    }

    play360() {
        clearInterval(this.interval360);
        this.interval360 = setInterval(() => {
            this.next360Step();
        }, 100);
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').addClass('_playing');
    }

    pause360() {
        clearInterval(this.interval360);
        this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').removeClass('_playing');
    }
}

export class CardImageGalleryModal extends ImageGalleryModal {
    loadingModalTemplate = `
        <div class="eyeva__imageGalleryModal-overlay">
            <div class="eyeva__imageGalleryModal">
                <div class="loadingOverlay eyeva__imageGalleryModal-loading"></div>
            </div>
        </div>
    `;

    constructor(
        $scope,
        {
            productId,
            graphQLToken,
            zoomSize,
            productSize,
            thumbSize,
            txtVideosLabel,
            txtImages360Label,
            txtImagesLabel,
        } = {},
    ) {
        super();
        this.$scope = $scope;
        this.productId = productId;
        this.graphQLToken = graphQLToken;
        this.zoomSize = zoomSize;
        this.productSize = productSize;
        this.thumbSize = thumbSize;
        this.txtVideosLabel = txtVideosLabel;
        this.txtImages360Label = txtImages360Label;
        this.txtImagesLabel = txtImagesLabel;
    }

    async openLoadingModal() {
        this.destroyModal();

        this.$lastActiveElement = $(document.activeElement);
        this.$body.addClass('_galleryModal-opened');

        // display loading modal
        this.$galleryModal = $(mustache.render(this.loadingModalTemplate));
        this.$galleryModal.hide().appendTo(this.$body);
        this.$galleryModal.addClass('_opening').show().removeClass('_opening');
    }

    async loadModal() {
        // fetch product data
        await this.fetchProduct();

        const mainImage = this.images.find(image => image.isDefault) || this.images[0];
        const mainImageSrcset = tools.imageSrcset.getSrcset(mainImage.urlTemplate);

        const mainImageLinkElement = `
            <a
                href="${mainImage.zoomUrl}"
                data-image-gallery-new-image-url="${mainImage.url}"
                data-image-gallery-new-image-srcset="${mainImageSrcset}"
                data-image-gallery-zoom-image-url="${mainImage.zoomUrl}"
            ><img class="lazyload" src="${mainImage.thumbnailUrl}" data-srcset="${mainImageSrcset}" data-sizes="auto" alt="${mainImage.altText}" /></a>`;

        const name = this.$scope.find('.card-title').text();
        const videosLabel = this.txtVideosLabel || 'Videos';
        const images360Label = this.txtImages360Label || '360 View';
        const imagesLabel = this.txtImagesLabel || 'Product Images';

        const videos = this.videos.map(video => {
            const url = new URL(video.url);
            const videoId = url.searchParams.get('v');
            return {
                linkElement: `
                    <a
                        class="productView-thumbnail-link"
                        href="${video.url}"
                        data-image-gallery-item-video-id="${videoId}"
                    >
                        <img src="https://i.ytimg.com/vi/${videoId}/default.jpg" />
                        <svg aria-hidden="true"><use href="#icon-play-solid"></use></svg>
                    </a>`,
            };
        });

        const images360 = this.images360.map((imageUrl) => {
            const step = Number(imageUrl.split('#')[1]) || DEFAULT_STEP;
            return {
                linkElement: `
                    <a
                        class="productView-thumbnail-link"
                        href="${imageUrl}"
                        data-eyeva-image-gallery-modal-item-rotator="${step}"
                        data-image-gallery-new-image-url="${imageUrl}"
                        data-image-gallery-new-image-srcset="${imageUrl}"
                        data-image-gallery-zoom-image-url="${imageUrl}"
                    >
                        <img src="${imageUrl}" />
                        <svg aria-hidden="true"><use href="#icon-360"></use></svg>
                    </a>`,
            };
        });

        const images = this.images.map(image => {
            const imageSrcset = tools.imageSrcset.getSrcset(image.urlTemplate);
            return {
                linkElement: `
                    <a
                        class="productView-thumbnail-link"
                        href="${image.zoomUrl}"
                        data-eyeva-image-gallery-modal-item
                        data-image-gallery-new-image-url="${image.url}"
                        data-image-gallery-new-image-srcset="${imageSrcset}"
                        data-image-gallery-zoom-image-url="${image.zoomUrl}"
                    >
                        <img class="lazyload" src="${image.thumbnailUrl}" data-srcset="${imageSrcset}" data-sizes="auto" alt="${image.altText}" />
                    </a>`,
            };
        });

        const $galleryModal = $(mustache.render(this.modalTemplate, {
            mainImageLinkElement,
            name,
            videosLabel,
            images360Label,
            imagesLabel,
            videos,
            images360,
            images,
        }));

        // replace loading modal with the actual modal
        this.$galleryModal.html($galleryModal.html());

        this.initImageZoom();

        this.focusTrap = createFocusTrap(this.$galleryModal.get(0), {
            escapeDeactivates: false,
            returnFocusOnDeactivate: false,
            allowOutsideClick: true,
        });

        this.bindEvents();
    }

    openModal({
        firstVideo = false,
        first360 = false,
    } = {}) {
        this.openLoadingModal();

        this.loadModal().then(() => {
            if (firstVideo) {
                const videoId = this.$galleryModal.find('[data-image-gallery-item-video-id]').first().data('imageGalleryItemVideoId');
                this.setMainVideo(videoId);
            }

            if (first360) {
                const $el = this.$galleryModal.find('[data-eyeva-image-gallery-modal-item-rotator]').first();
                this.setMain360(
                    $el.data('imageGalleryNewImageUrl'),
                    $el.data('imageGalleryNewImageSrcset'),
                    $el.data('imageGalleryZoomImageUrl'),
                    $el.data('eyevaImageGalleryModalItemRotator'),
                );
            }

            this.focusTrap.activate();

            setTimeout(() => {
                this.$galleryModal.find('[data-eyeva-image-gallery-modal-close]').trigger('focus');
            }, 200);
        });
    }

    async fetchProduct() {
        if (this.images || this.videos || this.images360) return;

        const [zoomWidth, zoomHeight] = this.zoomSize.split('x').map(Number);
        const [imageWidth, imageHeight] = this.productSize.split('x').map(Number);
        const [thumbWidth, thumbHeight] = this.thumbSize.split('x').map(Number);

        const resp = await $.ajax({
            url: '/graphql',
            method: 'POST',
            data: JSON.stringify({
                query: `
                    query(
                        $productId: Int!,
                        $zoomWidth: Int!,
                        $zoomHeight: Int!,
                        $imageWidth: Int!,
                        $imageHeight: Int!,
                        $thumbWidth: Int!,
                        $thumbHeight: Int!
                    ) {
                        site {
                            product(entityId: $productId) {
                                images {
                                    edges {
                                        node {
                                            altText
                                            isDefault
                                            url(width: $imageWidth, height: $imageHeight)
                                            thumbnailUrl: url(width: $thumbWidth, height: $thumbHeight)
                                            zoomUrl: url(width: $zoomWidth, height: $zoomHeight)
                                            urlTemplate
                                        }
                                    }
                                }
                                customFields(names: ["__@360"]) {
                                    edges {
                                        node {
                                            name
                                            value
                                        }
                                    }
                                }
                                videos {
                                    edges {
                                        node {
                                            title
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    productId: this.productId,
                    zoomWidth,
                    zoomHeight,
                    imageWidth,
                    imageHeight,
                    thumbWidth,
                    thumbHeight,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
        });

        const [images, videos, images360] = [
            resp.data.site.product.images.edges.map(({ node }) => node),
            resp.data.site.product.videos.edges.map(({ node }) => node),
            resp.data.site.product.customFields.edges
                .filter(({ node }) => node.name === '__@360')
                .map(({ node }) => node.value),
        ];

        /**
         * @type {Array<{altText: string, isDefault: boolean, url?: string, thumbnailUrl?: string, zoomUrl?: string, urlTemplate?: string}>}
         */
        this.images = images;

        /**
         * @type {Array<{title: string, url: string}>}
         */
        this.videos = videos;

        /**
         * @type {string[]}
         */
        this.images360 = images360;
    }
}

export default class ImageGallery extends CornerstoneImageGallery {
    constructor($gallery) {
        super($gallery);
        this.imageGalleryModal = new ImageGalleryModal(this, $gallery);
    }

    bindEvents() {
        super.bindEvents();
        this.imageGalleryModal.bindEvents();
    }
}
