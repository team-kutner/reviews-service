const path = require('path');

const src = path.resolve('./public/src/index.js');
const dist = path.resolve('./public/dist/');
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
  devServer: {
    contentBase: path.join(__dirname, 'public', 'dist')
  }
};