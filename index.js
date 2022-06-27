const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
  entry: 'index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './lib'),
    library: {
      type: 'commonjs-static',
    },
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            pure_funcs: ['console.log']
          }
        }
      }),
    ],
  },
}