const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './src/style/style.scss'],
  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.twig$/,
        loader: "twig-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/views/index.twig.js',
    })
  ]
};
