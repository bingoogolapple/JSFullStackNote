/**
 * Created by bingoogolapple on 16/8/21.
 */

var path = require('path');
var webpack = require('webpack');

var args = require('node-args');

var config = {
    entry: {
        admin: './admin/index.js',
        front: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        noParse: [/jquery/, /silly-datetime/],
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /images/,
            loader: 'file'
        }, {
            test: /icons/,
            loader: 'url'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
        }]
    },
    devServer: {
        proxy: {
            '/comment': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
};

if (args.minify) {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ];
}

module.exports = config;