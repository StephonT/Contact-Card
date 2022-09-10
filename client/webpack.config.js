const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // get images to show back up on the page.
    module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            //new rule to preprocess CSS files that uses both style-loader and css-loader. Uses a regular expression to identify CSS files then to serve them to the right loader
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            //new rule that directs JavaScript files to be handled by Babel
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults"}]
                ]
              }
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
          title: 'Webpack Plugin',
        })
      ]
  };