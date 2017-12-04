const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    watchContentBase: true,
    hot: true
  }
});