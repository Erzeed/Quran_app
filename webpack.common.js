const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    //entry
    entry: './src/app.js',
    //output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    //loader
    module: {
        rules: [
            {
              test: /\.css$/i,
              exclude: /styles/,
              use: ['to-string-loader','css-loader' ]           
            },
            {
              test: /\.css$/i,
              include: /styles/,
              use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader' ]
              },
              {
                test: /\.html$/i,
                use: ['html-loader']
              },
              {
                test: /\.js$/,        
                enforce: 'pre',
                use: ['source-map-loader'],
              },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
          }),
        ],                                
      },
    //plugin
    plugins: [
        new HtmlWebpackPlugin({
            title:'home',
            template: "./src/template.html",
            filename: "index.html",
            favicon: './src/img/icons/favicon.ico'
        }),
        new HtmlWebpackPlugin({
            title:'quran',
            template: "./src/quran.html",
            filename: "quran/index.html",
            favicon: './src/img/icons/favicon.ico'
        }),
        new MiniCssExtractPlugin()
    ]
};