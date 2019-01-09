const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: {
        index: './src/index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html.ejs'
        })
    ]
}


module.exports = config;
