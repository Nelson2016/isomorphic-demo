const path = require('path');
const webpack = require('webpack');
const autoPrefix = require('autoprefixer');
const postCssImport = require('postcss-import');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        'server-side': './admin/index.js',
        'client-side': './client/index.js'
    },
    output: {
        'path': path.resolve(rootDir, 'build/'),
        'publicPath': "build/",
        'filename': '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: (loader) => [
                            autoPrefix({browsers: ['last 5 versions']}),
                            postCssImport()
                        ]
                    }
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.(woff|svg|eot|ttf)$/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                    }
                }]
            }
        ]
    },
    plugins: [
    ]
}