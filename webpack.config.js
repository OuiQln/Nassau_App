var path = require('path');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './client/dist/'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module : {
    rules: [
      {
        loader: 'babel-loader',
        test : /\.jsx?/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]      
          },
        },
        {
          test: /\.css$/,
          loader: combineLoaders([
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ])
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
};