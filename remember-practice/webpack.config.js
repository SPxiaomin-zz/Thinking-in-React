const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.resolve(APP_PATH, 'app.jsx')
    ]
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: APP_PATH
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        include: APP_PATH
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      APP_PATH,
      'node_modules'
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Thinking in React'
    })
  ]
};
