const { resolve: resolvePath } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({
  mode,
  destFolder
}) => {
  const isProduction = mode === 'production'
  const devtool = isProduction ? 'inline-source-map' : 'source-map'

  const config = {
    entry: {
      main: './src/main.js'
    },
    output: {
      path: resolvePath(__dirname, destFolder),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: resolvePath(__dirname, './public/index.html'),
      })
    ],
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    mode,
    devtool
  }

  return config
}
