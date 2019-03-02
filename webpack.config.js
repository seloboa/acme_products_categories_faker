module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
};
