const path = require('path');

const src = path.resolve('./client/src/index.js');
const dist = path.resolve('./client/dist/');
console.log(src, dist);

module.exports = {
  entry: src,
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client', 'dist')
  }
};