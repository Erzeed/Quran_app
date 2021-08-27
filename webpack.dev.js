const { default: merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common.js");

module.exports = merge(webpackCommon , {
    mode : 'development'
})

