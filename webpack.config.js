const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./source/app.js",

    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        stats: "errors-only",
        proxy: {
            "/api": "http://localhost:8080"
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
        new HTMLWebpackPlugin({
            template: './source/test.html',
        })
    ],
}