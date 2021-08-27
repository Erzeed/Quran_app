const { default: merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common.js");

module.exports = merge(webpackCommon, {
    mode: 'production',
    module : {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
})