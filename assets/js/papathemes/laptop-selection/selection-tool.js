/**
 * Laptop Selection Assistance Tool
 * Standalone selection form for filtering laptop products
 */

(function() {
    'use strict';


    class LaptopSelectionTool {
        constructor() {
            console.log('=== Laptop Selection Tool Initialized ===');

            // Support both forms: pc-selection-form and select-assist-form
            this.form = document.getElementById('pc-selection-form') || document.getElementById('select-assist-form');
            this.filterButton = document.getElementById('filter-products');
            this.filteredProductsSection = document.getElementById('filtered-products-section');
            this.productsGrid = document.getElementById('filtered-products-list');
            this.noProductsMessage = document.getElementById('no-products-message');

            // Get injected values from window
            this.categoryId = window.pcBuilderCategoryId || '';
            this.lang = window.pcBuilderLangJSON || {};

            console.log('Category ID:', this.categoryId);
            console.log('Language JSON available:', !!this.lang);

            if (!this.form) {
                console.error('Form not found - element with id "pc-selection-form" or "select-assist-form" is missing');
                return;
            }

            this.init();
        }

        init() {
            if (this.filterButton) {
                this.filterButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.filterProducts();
                });
            }

            if (this.form) {
                // If this is the select-assist-form, intercept submit to also show filtered products
                if (this.form.id === 'select-assist-form') {
                    this.form.addEventListener('submit', (e) => {
                        // Allow the POST to Keap/Infusionsoft, but also show filtered products
                        setTimeout(() => {
                            this.filterProducts();
                        }, 100); // Let the form POST proceed, then show products
                    });
                } else {
                    // For the original form, prevent default and handle in JS
                    this.form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        this.handleRequestAssistance();
                    });
                }
            }
        }

        getFormData() {
            const formData = new FormData(this.form);

            // Support both forms: pc-selection-form and select-assist-form
            if (this.form.id === 'select-assist-form') {
                // Map select-assist-form fields to expected criteria
                return {
                    computer_condition: (() => {
                        const val = formData.get('inf_option_Doyouwanttoknowaboutnewcomputersorrefurbished');
                        if (val === '4672') return 'new';
                        if (val === '4674') return 'refurbished';
                        return '';
                    })(),
                    computer_type: (() => {
                        const val = formData.get('inf_option_Whattypeofcomputerareyoulookingfor');
                        if (val === '4678') return 'laptop';
                        if (val === '4680') return 'tablet';
                        return '';
                    })(),
                    job_use: formData.get('inf_option_Willyoubeusingthiscomputerforyourjob') === '1069',
                    environment: [
                        formData.get('inf_option_Wet') ? 'wet' : null,
                        formData.get('inf_option_Oily') ? 'oily' : null,
                        formData.get('inf_option_DustyDirtySandy') ? 'dusty' : null,
                        formData.get('inf_option_Humid') ? 'humid' : null,
                        formData.get('inf_option_Rough') ? 'rough' : null,
                        formData.get('inf_option_Hot') ? 'hot' : null,
                        formData.get('inf_option_Cold') ? 'cold' : null,
                        formData.get('inf_option_BrightSunny') ? 'bright_sunny' : null
                    ].filter(Boolean),
                    vibration_shock: formData.get('inf_option_Willthiscomputerbesubjectedtovibrationorshock') === '1119',
                    moving_vehicle: formData.get('inf_custom_usevehicle') === 'Yes' || formData.get('inf_custom_usevehicle') === 'Yes and I will need to mount it',
                    touchscreen: formData.get('inf_custom_featuretouchscreen') === 'Yes',
                    mobile_data: formData.get('inf_custom_featureWWANGobi') === 'Yes',
                    gps: formData.get('inf_custom_DoyouneedGPS') === 'Yes',
                    optical_drive: formData.get('inf_custom_featureMediaDrive') === 'Yes',
                    budget: formData.get('inf_custom_Budget'),
                    additional_notes: formData.get('inf_misc_Anyadditionalnotes'),
                    first_name: formData.get('inf_field_FirstName'),
                    email: formData.get('inf_field_Email'),
                    phone: formData.get('inf_field_Phone1'),
                    contact_method: (() => {
                        const val = formData.get('inf_option_Howwouldyoulikeustocontactyou');
                        if (val === '1105') return 'phone';
                        if (val === '1107') return 'email';
                        return '';
                    })(),
                    newsletter: formData.get('inf_option_SubscribetoourNewsletter') === '1111'
                };
            } else {
                // Default pc-selection-form
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
        }

        async filterProducts() {
            console.log('=== Starting Product Filter ===');
            
            if (!this.categoryId) {
                console.error('Category ID not set. Check template injections.');
                this.showError('Category ID is missing. Please refresh the page.');
                return;
            }

            const formData = this.getFormData();
            console.log('Form data collected:', formData);

            this.showLoadingState();

            try {
                const products = await this.fetchProducts();
                console.log(`Fetched ${products.length} products from GraphQL`);
                
                const filtered = this.filterProductsByCriteria(products, formData);
                console.log(`Filtered to ${filtered.length} matching products`);
                
                this.displayFilteredProducts(filtered);
            } catch (error) {
                console.error('Error during filtering:', error);
                this.showError(`Error loading products: ${error.message}`);
            }
        }

        async fetchProducts() {
            console.log('Fetching products from category:', this.categoryId);

            const query = `
                query GetCategoryProducts($categoryId: Int!) {
                    site {
                        category(entityId: $categoryId) {
                            name
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
                                        images(first: 1) {
                                            edges {
                                                node {
                                                    url(width: 400, height: 400)
                                                    altText
                                                }
                                            }
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
                                        categories {
                                            edges {
                                                node {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            children {
                                edges {
                                    node {
                                        name
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
                                                    images(first: 1) {
                                                        edges {
                                                            node {
                                                                url(width: 400, height: 400)
                                                                altText
                                                            }
                                                        }
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
                                                    categories {
                                                        edges {
                                                            node {
                                                                name
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
                }
            `;

            try {
                const response = await fetch('/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: query,
                        variables: {
                            categoryId: parseInt(this.categoryId)
                        }
                    })
                });

                console.log('GraphQL Response Status:', response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.errors) {
                    console.error('GraphQL Errors:', result.errors);
                    throw new Error(result.errors[0].message || 'GraphQL Error');
                }

                if (!result.data?.site?.category) {
                    console.error('Invalid response structure:', result);
                    throw new Error('Category not found');
                }

                const categoryData = result.data.site.category;
                let allProducts = [];

                // Add products from main category
                if (categoryData.products?.edges) {
                    console.log(`Main category "${categoryData.name}": ${categoryData.products.edges.length} products`);
                    allProducts = allProducts.concat(categoryData.products.edges.map(e => e.node));
                }

                // Add products from subcategories
                if (categoryData.children?.edges) {
                    console.log(`Found ${categoryData.children.edges.length} subcategories`);
                    categoryData.children.edges.forEach(child => {
                        if (child.node.products?.edges) {
                            console.log(`  - "${child.node.name}": ${child.node.products.edges.length} products`);
                            allProducts = allProducts.concat(child.node.products.edges.map(e => e.node));
                        }
                    });
                }

                // Remove duplicates
                const uniqueProducts = allProducts.filter((product, index, self) =>
                    index === self.findIndex(p => p.entityId === product.entityId)
                );

                console.log(`Total products: ${allProducts.length}, After dedup: ${uniqueProducts.length}`);

                return uniqueProducts;
            } catch (error) {
                console.error('Fetch error:', error);
                throw error;
            }
        }

        filterProductsByCriteria(products, criteria) {
            // Ruggedness logic
            const fullyRuggedConditions = ['wet', 'oily', 'rough'];
            const semiRuggedConditions = [
                'dusty', 'dusty_dirty_sandy', 'humid', 'hot', 'cold', 'bright_sunny'
            ];

            // Determine which ruggedness is needed
            let ruggedType = null;
            if (criteria.environment && criteria.environment.length > 0) {
                if (criteria.environment.some(cond => fullyRuggedConditions.includes(cond))) {
                    ruggedType = 'fully';
                } else if (
                    criteria.environment.some(cond => semiRuggedConditions.includes(cond)) ||
                    criteria.vibration_shock || criteria.moving_vehicle
                ) {
                    ruggedType = 'semi';
                }
            } else if (criteria.vibration_shock || criteria.moving_vehicle) {
                ruggedType = 'semi';
            }

            // Condition logic
            const newConditions = ['new', 'new (open box)'];
            const refurbishedConditions = ['new (open box)', 'refurbished', 'refurbished (lowhour)', 'scratch & dent'];

            return products.filter(product => {
                const customFields = product.customFields?.edges || [];
                const categories = product.categories?.edges || [];

                // Helper to get custom field value
                const getCustomField = (name) => {
                    const field = customFields.find(e => e.node.name === name);
                    return field ? field.node.value : '';
                };

                // Filter by computer type
                if (criteria.computer_type && criteria.computer_type !== 'not_sure') {
                    const categoryNames = categories.map(e => e.node.name.toLowerCase());
                    const productName = product.name.toLowerCase();

                    switch (criteria.computer_type) {
                        case 'laptop':
                            if (!categoryNames.some(n => n.includes('laptop')) && !productName.includes('laptop')) {
                                return false;
                            }
                            break;
                        case 'tablet':
                            if (!categoryNames.some(n => n.includes('tablet')) && !productName.includes('tablet')) {
                                return false;
                            }
                            break;
                        case 'desktop':
                            if (!categoryNames.some(n => n.includes('desktop')) && !productName.includes('desktop')) {
                                return false;
                            }
                            break;
                    }
                }

                // Filter by condition (New/Refurbished)
                if (criteria.computer_condition) {
                    const condition = getCustomField('Condition').toLowerCase();
                    const selected = criteria.computer_condition.toLowerCase();
                    if (selected === 'new') {
                        if (!newConditions.some(valid => condition.includes(valid))) {
                            return false;
                        }
                    } else if (selected === 'refurbished') {
                        if (!refurbishedConditions.some(valid => condition.includes(valid))) {
                            return false;
                        }
                    }
                }

                // Filter by budget
                if (criteria.budget) {
                    const price = product.prices?.price?.value || 0;
                    let maxPrice = Infinity;

                    switch (criteria.budget) {
                        case 'under_500': maxPrice = 500; break;
                        case '500_1000': maxPrice = 1000; break;
                        case '1000_1500': maxPrice = 1500; break;
                        case '1500_2000': maxPrice = 2000; break;
                    }

                    if (price > maxPrice) return false;
                }

                // Filter by touchscreen
                if (criteria.touchscreen) {
                    const touchScreen = getCustomField('Touch Screen');
                    if (!touchScreen || !touchScreen.toLowerCase().includes('yes')) {
                        return false;
                    }
                }

                // Rugged filtering
                const ipRating = getCustomField('Ingress Protection Rating');
                if (ruggedType === 'fully') {
                    if (!ipRating || !ipRating.includes('IP6')) {
                        return false;
                    }
                } else if (ruggedType === 'semi') {
                    if (!ipRating || (!ipRating.includes('IP5') && !ipRating.includes('IP6'))) {
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
            this.productsGrid.innerHTML = products.map(product => this.createProductCard(product)).join('');
        }

        createProductCard(product) {
            const imageUrl = product.images?.edges?.[0]?.node?.url || '/product_images/default.png';
            const imageAlt = product.images?.edges?.[0]?.node?.altText || product.name;
            const price = product.prices?.price?.value || 0;
            const currency = product.prices?.price?.currencyCode || 'USD';
            const description = this.stripHtml(product.description || '').substring(0, 150) + '...';

            return `
                <div class="papathemes-product-card">
                    <img src="${imageUrl}" alt="${imageAlt}" class="product-image">
                    <a href="${product.path}" class="product-title">${product.name}</a>
                    <div class="product-price">${this.formatPrice(price, currency)}</div>
                    <div class="product-description">${description}</div>
                    <a href="${product.path}" class="product-link">View Product</a>
                </div>
            `;
        }

        formatPrice(price, currency) {
            try {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: currency || 'USD'
                }).format(price);
            } catch (e) {
                return `$${price.toFixed(2)}`;
            }
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

        showError(message) {
            this.productsGrid.innerHTML = `<div class="error-message">${message}</div>`;
            this.noProductsMessage.style.display = 'none';
            this.filteredProductsSection.style.display = 'block';
        }

        async submitAssistanceRequest() {
            const formData = this.getFormData();

            if (!formData.first_name || !formData.email) {
                alert('Please fill in all required fields (Name and Email)');
                return;
            }

            console.log('Assistance request submitted:', formData);
            alert('Your request has been submitted. We will contact you soon!');
        }
    }

    // Initialize when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new LaptopSelectionTool();
        });
    } else {
        new LaptopSelectionTool();
    }

})();
