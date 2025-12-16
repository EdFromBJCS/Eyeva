const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    LodashPlugin = require('lodash-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack');

// Common configuration, with extensions in webpack.dev.js and webpack.prod.js.
module.exports = {
    bail: true,
    context: __dirname,
    entry: {
        main: './assets/js/app.js',
        head_async: ['lazysizes'],
        font: './assets/js/theme/common/font.js',
        polyfills: './assets/js/polyfills.js',
        polyfill_form_data: ['formdata-polyfill'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /(assets\/js|assets\\js|stencil-utils)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import', // add support for dynamic imports (used in app.js)
                            'lodash', // Tree-shake lodash
                        ],
                        presets: [
                            ['@babel/preset-env', {
                                loose: true, // Enable "loose" transformations for any plugins in this preset that allow them
                                modules: false, // Don't transform modules; needed for tree-shaking
                                useBuiltIns: 'entry',
                                corejs: '^3.6.5',
                            }],
                        ],
                    },
                },
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$"],
                },
            },
        ],
    },
    output: {
        chunkFilename: 'theme-bundle.chunk.[name].js',
        filename: 'theme-bundle.[name].js',
        path: path.resolve(__dirname, 'assets/dist'),
    },
    // papathemes-eyeva: Split chunks for file size optimization
    optimization: {
        splitChunks: {
            // Global options apply to ALL cache groups unless overridden
            // minSize: 128000, // ~128 KB
            // minSize: 64000, // ~64 KB

            cacheGroups: {
                // Turn off default vendor splitting
                // default: false,
                // defaultVendors: false,
                // vendors: false,

                // Force moment + shipping-countdown.js into "shipping_countdown"
                shippingCountdown: {
                    name: 'shipping-countdown',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]moment.*|[\\/]assets[\\/]js[\\/]papathemes[\\/]shipping-countdown\.js/,
                    priority: 50, // Higher than vendors
                    enforce: true, // Force chunk creation even if not "common"
                    minSize: 0, // Bypass size constraints
                },

                // jstree chunk
                jstree: {
                    name: 'jstree',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]jstree[\\/]/,
                    priority: 50,
                    enforce: true,
                    minSize: 0, // Bypass size constraints
                },

                // Tells Webpack: "Anything from 'lodash', 'url', 'mustache' always goes in 'main'."
                // mainLodash: {
                //     name: 'main', // name of the chunk = 'main'
                //     test: (module) => module.resource && /[\\/]node_modules[\\/]lodash/.test(module.resource),
                //     chunks: 'all',
                //     enforce: true,
                //     priority: 40, // Make sure this outranks other groups
                // },
            },
        },
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 1024 * 300,
        maxEntrypointSize: 1024 * 300,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['assets/dist'],
            verbose: false,
            watch: false,
        }),
        new LodashPlugin(), // Complements babel-plugin-lodash by shrinking its cherry-picked builds further.
        new webpack.ProvidePlugin({ // Provide jquery automatically without explicit import
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
        // papathemes-eyeva: Ignore all locale files of moment.js for smaller bundle size
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        }),

    ],
    resolve: {
        fallback:  { "url": require.resolve("url/") },
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
            jstree: path.resolve(__dirname, 'node_modules/jstree/dist/jstree.min.js'),
            lazysizes: path.resolve(__dirname, 'node_modules/lazysizes/lazysizes.min.js'),
            'slick-carousel': path.resolve(__dirname, 'node_modules/slick-carousel/slick/slick.min.js'),
            'svg-injector': path.resolve(__dirname, 'node_modules/svg-injector/dist/svg-injector.min.js'),
            'blaze-slider': path.resolve(__dirname, 'node_modules/blaze-slider/dist/blaze-slider.esm.js'),
        },
    },
};
