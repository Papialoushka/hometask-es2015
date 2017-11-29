const path = require('path');

module.exports = {
  entry: [
    //'babel-polyfill',
    './src/news-module.js'
  ],
  output: {
    filename: 'news-module.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory=true",
        include: [
          path.resolve(__dirname, "src"),
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};