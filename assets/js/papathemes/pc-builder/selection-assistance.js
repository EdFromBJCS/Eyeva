// PC Builder Selection Assistance
// Handles the selection assistance form and product filtering

(function() {
    'use strict';

    class SelectionAssistanceManager {
        constructor() {
            this.form = document.getElementById('pc-selection-form');
            this.filterButton = document.getElementById('filter-products');
            this.filteredProductsSection = document.getElementById('filtered-products-section');
            this.productsGrid = document.getElementById('filtered-products-list');
            this.noProductsMessage = document.getElementById('no-products-message');

            this.categoryId = window.pcBuilderCategoryId || '';
            this.graphQLToken = window.graphQLToken || '';
            this.lang = window.pcBuilderLangJSON || {};

            this.init();
        }

        init() {
            if (!this.form) return;

            this.filterButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterProducts();
            });

            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitAssistanceRequest();
            });
        }

        async filterProducts() {
            const formData = this.getFormData();

            // Show loading state
            this.showLoadingState();

            try {
                // Build GraphQL query for filtering products
                const query = this.buildProductQuery(formData);
                const products = await this.fetchProducts(query);

                // Filter products based on criteria
                const filteredProducts = this.filterProductsByCriteria(products, formData);

                // Display filtered products
                this.displayFilteredProducts(filteredProducts);

            } catch (error) {
                console.error('Error filtering products:', error);
                this.showErrorState();
            }
        }

        getFormData() {
            const formData = new FormData(this.form);

            return {
                computer_condition: formData.get('computer_condition'),
                computer_type: formData.get('computer_type'),
                job_use: formData.get('job_use') === 'on',
                environment: formData.getAll('environment[]'),
                vibration_shock: formData.get('vibration_shock') === 'on',
                moving_vehicle: formData.get('moving_vehicle') === 'on',
                touchscreen: formData.get('touchscreen') === 'on',
                mobile_data: formData.get('mobile_data') === 'on',
                gps: formData.get('gps') === 'on',
                optical_drive: formData.get('optical_drive') === 'on',
                budget: formData.get('budget'),
                additional_notes: formData.get('additional_notes'),
                first_name: formData.get('first_name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                contact_method: formData.get('contact_method'),
                newsletter: formData.get('newsletter') === 'on'
            };
        }

        buildProductQuery(formData) {
            // Build GraphQL query based on form data
            let query = `
                query GetProducts($categoryId: Int!) {
                    site {
                        category(entityId: $categoryId) {
                            products {
                                edges {
                                    node {
                                        id
                                        entityId
                                        name
                                        sku
                                        path
                                        prices {
                                            price {
                                                value
                                                currencyCode
                                            }
                                        }
                                        images {
                                            url(width: 400, height: 400)
                                            altText
                                        }
                                        description
                                        customFields {
                                            edges {
                                                node {
                                                    name
                                                    value
                                                }
                                            }
                                        }
                                        variants {
                                            edges {
                                                node {
                                                    sku
                                                    prices {
                                                        price {
                                                            value
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
                }
            `;

            return query;
        }

        async fetchProducts(query) {
            const response = await fetch('/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.graphQLToken}`
                },
                body: JSON.stringify({
                    query: query,
                    variables: {
                        categoryId: parseInt(this.categoryId)
                    }
                })
            });

            const result = await response.json();

            if (result.errors) {
                throw new Error(result.errors[0].message);
            }

            return result.data.site.category.products.edges.map(edge => edge.node);
        }

        filterProductsByCriteria(products, criteria) {
            return products.filter(product => {
                // Filter by computer type
                if (criteria.computer_type && criteria.computer_type !== '') {
                    const productName = product.name.toLowerCase();
                    const productDesc = (product.description || '').toLowerCase();

                    switch (criteria.computer_type) {
                        case 'laptop':
                            if (!productName.includes('laptop') && !productDesc.includes('laptop')) {
                                return false;
                            }
                            break;
                        case 'desktop':
                            if (!productName.includes('desktop') && !productDesc.includes('desktop')) {
                                return false;
                            }
                            break;
                        case 'tablet':
                            if (!productName.includes('tablet') && !productDesc.includes('tablet')) {
                                return false;
                            }
                            break;
                    }
                }

                // Filter by budget
                if (criteria.budget && criteria.budget !== '') {
                    const price = product.prices?.price?.value || 0;
                    let maxPrice = Infinity;

                    switch (criteria.budget) {
                        case 'under_500':
                            maxPrice = 500;
                            break;
                        case '500_1000':
                            maxPrice = 1000;
                            break;
                        case '1000_1500':
                            maxPrice = 1500;
                            break;
                        case '1500_2000':
                            maxPrice = 2000;
                            break;
                    }

                    if (price > maxPrice) {
                        return false;
                    }
                }

                // Filter by features using custom fields or description
                const description = (product.description || '').toLowerCase();
                const customFields = product.customFields?.edges || [];

                // Touchscreen
                if (criteria.touchscreen && !description.includes('touchscreen') && !description.includes('touch screen')) {
                    return false;
                }

                // Mobile data
                if (criteria.mobile_data && !description.includes('mobile data') && !description.includes('4g') && !description.includes('lte')) {
                    return false;
                }

                // GPS
                if (criteria.gps && !description.includes('gps')) {
                    return false;
                }

                // Optical drive
                if (criteria.optical_drive && !description.includes('optical drive') && !description.includes('cd') && !description.includes('dvd')) {
                    return false;
                }

                // Environmental conditions (rough handling, vibration, etc.)
                if (criteria.vibration_shock || criteria.moving_vehicle || criteria.environment.length > 0) {
                    // Check if product mentions rugged or durable features
                    const hasRuggedFeatures = description.includes('rugged') ||
                                            description.includes('durable') ||
                                            description.includes('military') ||
                                            description.includes('industrial');

                    if (!hasRuggedFeatures) {
                        return false;
                    }
                }

                return true;
            });
        }

        displayFilteredProducts(products) {
            this.filteredProductsSection.style.display = 'block';

            if (products.length === 0) {
                this.productsGrid.innerHTML = '';
                this.noProductsMessage.style.display = 'block';
                return;
            }

            this.noProductsMessage.style.display = 'none';

            const productsHtml = products.map(product => this.createProductCard(product)).join('');
            this.productsGrid.innerHTML = productsHtml;
        }

        createProductCard(product) {
            const imageUrl = product.images?.[0]?.url || '/product_images/default.png';
            const price = product.prices?.price?.value || 0;
            const currency = product.prices?.price?.currencyCode || 'USD';
            const description = this.stripHtml(product.description || '').substring(0, 150) + '...';

            return `
                <div class="papathemes-product-card">
                    <img src="${imageUrl}" alt="${product.images?.[0]?.altText || product.name}" class="product-image">
                    <a href="${product.path}" class="product-title">${product.name}</a>
                    <div class="product-price">${this.formatPrice(price, currency)}</div>
                    <div class="product-description">${description}</div>
                    <a href="${product.path}" class="product-link">${this.lang.selection?.view_product || 'View Product'}</a>
                </div>
            `;
        }

        formatPrice(price, currency) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currency
            }).format(price);
        }

        stripHtml(html) {
            const tmp = document.createElement('DIV');
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || '';
        }

        showLoadingState() {
            this.productsGrid.innerHTML = '<div class="loading">Loading products...</div>';
            this.noProductsMessage.style.display = 'none';
            this.filteredProductsSection.style.display = 'block';
        }

        showErrorState() {
            this.productsGrid.innerHTML = '<div class="error">Error loading products. Please try again.</div>';
            this.noProductsMessage.style.display = 'none';
            this.filteredProductsSection.style.display = 'block';
        }

        async submitAssistanceRequest() {
            const formData = this.getFormData();

            // Validate required fields
            if (!formData.first_name || !formData.email) {
                alert(this.lang.selection?.required_fields_error || 'Please fill in all required fields.');
                return;
            }

            // Here you would typically send the data to your backend
            // For now, we'll just show a success message
            alert(this.lang.selection?.request_submitted || 'Your request has been submitted. We will contact you soon!');

            // You could also send an email or save to database here
            console.log('Assistance request data:', formData);
        }
    }

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        new SelectionAssistanceManager();
    });

    // Also initialize on page load for dynamic content
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            new SelectionAssistanceManager();
        });
    } else {
        new SelectionAssistanceManager();
    }

})();