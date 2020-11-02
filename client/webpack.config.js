const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { HtmlWebpackPlugin } = require('html-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    } ,
    mode:'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /scss/
            },
            // },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                "test": /\.html$/,
                "use":[
                    {
                    loader: 'html-loader'
                }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
       ]
}