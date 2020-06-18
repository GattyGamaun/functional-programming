const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          // options: {
          //   attrs: [':data-src'],
          // },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-syntax-object-rest-spread", '@babel/plugin-transform-spread', 'transform-object-rest-spread']
          },
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
  ]
};
