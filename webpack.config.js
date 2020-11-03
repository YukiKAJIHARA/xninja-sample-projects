
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

// module.exports = {
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: 9000,
//   },
//   context: path.resolve(__dirname, 'src'),
//   entry: {
//     'main': [`./main.js`],
//   },
//   output: {
//       path: path.join(__dirname, '/public'),
//       // publicPath: '/public',
//       filename: `main.js`,
//       library: '',
//       libraryExport: '',
//       libraryTarget: 'umd',
//       globalObject: 'this',
//   },
//   module: {
//     rules: [  
//       {
//         test: /\.css/,
//         use: [
//           "style-loader",
//           { loader: "css-loader", options: { url: false } },
//         ],
//       },
//       {
//         test   : /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//             ],
//             plugins: [
//                 ['@babel/plugin-transform-runtime', {
//                     "corejs": 2
//                 }]
//             ]
//           }
//         }
//       }
//     ]
//   },
// }

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'index': './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.js"
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Custom template',
      template: './index.html',
      chunks: ['page1'],
      // filename: 'index.html'
      // Cache Busting
      hash: true,
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};