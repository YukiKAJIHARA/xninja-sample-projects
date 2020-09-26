const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'main': [`./main.js`],
  },
  output: {
      path: path.join(__dirname, '/public'),
      // publicPath: '/public',
      filename: `main.js`,
      library: '',
      libraryExport: '',
      libraryTarget: 'umd',
      globalObject: 'this',
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
                ['@babel/plugin-transform-runtime', {
                    "corejs": 2
                }]
            ]
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
}