const path = require('path');
var webpack = require('webpack');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

var configuration = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module:{
      rules:[
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
        ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
    ]
  };


module.exports = configuration;