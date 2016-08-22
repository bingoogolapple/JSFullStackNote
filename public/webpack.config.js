/**
 * Created by bingoogolapple on 16/8/21.
 */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /images/,
            loader: 'file'
        }, {
            test: /icons/,
            loader: 'url'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
        }, {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new ExtractTextPlugin("[name].bundle.css")
    ],
    devServer: {
        proxy: {
            '/comment': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
};


if (process.env.NODE_ENV === 'production') {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin("[name].bundle.css")
    ];
}

module.exports = config;