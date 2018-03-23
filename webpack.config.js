let path = require('path');
let webpack = require('webpack');
let FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = ['dist'];

// the clean options to use
let cleanOptions = {
  root:     __dirname,
  verbose:  true,
  dry:      false
}


var configuration = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
       devServer: {
        contentBase: './dist'
     },
    module:{
      rules:[
        { test: /\.s[ac]ss$/, use:['style-loader', 'css-loader', 'sass-loader']},
        { test: /\.css$/, use: ['style-loader', 'css-loader']},
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
      new CleanWebpackPlugin(pathsToClean, cleanOptions),
      new HtmlWebpackPlugin({ 
        filename: 'index.html',
        template: 'src/index.html'
      })
    ]
  };


module.exports = configuration;