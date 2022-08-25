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
            // {
            //     test: /\.css$/,
            //     use: [
            //             {
            //                 loader: "style-loader"
            //             },
            //             {
            //                 loader: ['to-string-loader', 'css-loader']
            //                 ,
            //             options: {
            //               esModule: false
            //       }     
            //             }
            //     ]
            // },
            {
              test: /\.css$/i,
              exclude: /styles/,
              use: [
                      {
                          loader: 'to-string-loader'
                      },
                      {
                          loader: 'css-loader'    
                      }
              ]           
            },
            /* rules buat global style */
            {
              test: /\.css$/i,
              include: /styles/,
              use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              // {
              //   test: /.s?css$/,
              //   use: [MiniCssExtractPlugin.loader, "css-loader"],
              // },
              {
                test: /\.html$/i,
                use: ['html-loader']
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