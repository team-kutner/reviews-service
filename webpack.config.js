const path = require('path');

const src = path.resolve('./client/index.js');
const dist = path.resolve('./public');
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
    },{
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'api/reviews/images/[hash]-[name].[ext]',
              //the path that will show on the actual webpage after being transpiled, normally it will be a relative path.
              publicPath: '/'
            },
          },
        ],
      }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};