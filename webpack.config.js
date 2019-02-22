var path = require('path');

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
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
};