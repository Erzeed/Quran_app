const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
                test: /\.css$/,
                use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              }
        ]
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    //plugin
    plugins: [
        new HtmlWebpackPlugin({
            title:'home',
            template: "./src/template.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            title:'quran',
            template: "./src/quran.html",
            filename: "quran/index.html"
        }),
        new MiniCssExtractPlugin()
    ]
};
