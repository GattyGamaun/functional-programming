const merge = require('webpack-merge');
const common = require('./webpack.common.js');

console.log('Development');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});