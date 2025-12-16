import CornerstoneAccount from '../../theme/account';
import { showAlertModal } from '../../theme/global/modal';

export default class Account extends CornerstoneAccount {
    onReady() {
        super.onReady();

        const orderId = Number($('[data-account-reorder-form] input[name=orderid]').val());
        if (orderId) this.initOrder(orderId);
    }

    async initOrder(orderId) {
        const resp = await $.ajax({
            url: '/graphql',
            method: 'POST',
            data: JSON.stringify({
                query: `
                    query Order($orderId: Int!) {
                        site {
                            order(filter: { entityId: $orderId }) {
                                consignments {
                                    downloads {
                                        lineItems(first: 50) {
                                            edges {
                                                node {
                                                    entityId
                                                    productEntityId
                                                }
                                            }
                                        }
                                    }
                                    pickups(first: 50) {
                                        edges {
                                            node {
                                                lineItems(first: 50) {
                                                    edges {
                                                        node {
                                                            entityId
                                                            productEntityId
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    shipping(first: 50) {
                                        edges {
                                            node {
                                                lineItems(first: 50) {
                                                    edges {
                                                        node {
                                                            entityId
                                                            productEntityId
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    orderId,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.context.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
        });

        /**
         * @type {Array<{ entityId: number, productEntityId: number }>}
         */
        const items = [
            ...resp?.data?.site?.order?.consignments?.downloads?.lineItems?.edges?.map(({ node }) => node) || [],
            ...resp?.data?.site?.order?.consignments?.pickups?.edges?.reduce((acc, { node }) => [...acc, ...node.lineItems.edges.map(({ node: itemNode }) => itemNode)], []) || [],
            ...resp?.data?.site?.order?.consignments?.shipping?.edges?.reduce((acc, { node }) => [...acc, ...node.lineItems.edges.map(({ node: itemNode }) => itemNode)], []) || [],
        ];

        $('[data-order-product-link]').each((_i, el) => {
            const $el = $(el);
            const orderProductId = Number($el.data('orderProductLink'));
            const item = items.find(({ entityId }) => entityId === orderProductId);
            if (item) {
                $el.attr('href', `/products.php?productId=${item.productEntityId}`);
            }
        });

        $('[data-order-product-review-link]').each((_i, el) => {
            const $el = $(el);
            const orderProductId = Number($el.data('orderProductReviewLink'));
            const item = items.find(({ entityId }) => entityId === orderProductId);
            if (item) {
                $el.attr('href', `/products.php?productId=${item.productEntityId}#write_review`);
            }
        });
    }

    // copy almost from parent class
    initReorderForm($reorderForm) {
        $reorderForm.on('submit', event => {
            const $productReorderCheckboxes = $('[data-account-reorder-checkbox]:checked'); // eyeva edit
            let submitForm = false;

            $reorderForm.find('[name^="reorderitem"]').remove();

            $productReorderCheckboxes.each((index, productCheckbox) => {
                const productId = $(productCheckbox).val();
                const $input = $('<input>', {
                    type: 'hidden',
                    name: `reorderitem[${productId}]`,
                    value: '1',
                });

                submitForm = true;

                $reorderForm.append($input);
            });

            if (!submitForm) {
                event.preventDefault();
                showAlertModal(this.context.selectItem);
            }
        });
    }
}
