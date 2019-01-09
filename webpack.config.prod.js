const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const common = require('./webpack.config.common');

module.exports = merge(
    common,
    {
      mode: 'production',
      devtool: 'source-map',
      optimization: {
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6
            }
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      ],
      module: {
        rules: [
          {
            test: /\.s?css/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ]
          }
        ]
      }
    }
);
