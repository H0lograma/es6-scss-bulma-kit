const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Glob = require('glob');
const templates = Glob.sync('*.twig', {cwd: './src/views',}).map(
  template => new HtmlWebpackPlugin({
    filename: template.replace('twig', 'html'),
    template: `./src/views/${template}.js`,
  })
);

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
  plugins: templates
};
