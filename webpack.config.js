var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

//const bundleExtractPlugin = new ExtractTextPlugin({
//    filename: 'css/bundle.css',
//});

//const vendorsExtractPlugin = new ExtractTextPlugin({
//    filename: 'css/vendors.css',
//});

module.exports = {
    entry: {public: ['babel-polyfill', './src/index.js'
        ],
//            admin: './RisknetFM/index.jsx'
    },
    output: {
//        path: path.resolve('dist'),
        path: path.join(__dirname,'dist'),
        filename: '[name].js',
        chunkFilename: "chunk-[id]/[chunkhash:8].chunk.js",
        // make sure that publicPath end up with /
//        publicPath: (publicPath+"/").replace(/\/\/$/, '/')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        symlinks: false,
    },
    module: {
        rules: [
            {test:/\.js$/,loader:'babel-loader',exclude:'/node_modules/'},
            {test:/\.jsx$/,loader:'babel-loader',exclude:'/node_modules/'},
//            {test:/\.jsx$/,loader:'react-hot!babel',exclude:'/node_modules/'},
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: bundleExtractPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
//                use: ExtractTextPlugin.extract({fallbackLoader: "style-loader",loader: "css-loader"}),
//                use: vendorsExtractPlugin.extract({
//                    use: ['css-loader'],
//                }),
//                use: ExtractTextPlugin.extract({fallbackLoader: "style-loader",loader: "css-loader"}),
                //loader: 'style-loader!css-loader',
                exclude: /(node_modules)/
//                use: ExtractTextPlugin.extract({fallbackLoader: "style-loader",loader: "css-loader"})
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: /(node_modules)/
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}
