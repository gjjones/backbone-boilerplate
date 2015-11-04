var webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.js$/, loader: 'eslint-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Backbone': 'backbone',
      '_': 'lodash',
      '$': 'jquery'
    })
  ]
}
