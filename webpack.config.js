/**
 * ./webpack.config.js
 */
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'front-end/dist');
const APP_DIR   = path.resolve(__dirname, 'front-end/app');


module.exports = {

    entry: APP_DIR + '/main.jsx',
    watch: true,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery' : 'jquery'
    })],
     module: {
        loaders: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader",
                options: {
                    strictMath: true,
                    noIeCompat: true
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader',
            exclude: /node_modules$/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules$/,
            query: {
                presets: ['es2015']
            }
        }]
    }

}