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
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: isProduction ?
                    'cs-app--[local]' :
                    '[name]__[local]'
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: resolvePath(__dirname, './public/index.html'),
      })
    ],
    resolve: {
      alias: {
        '@csApp': resolvePath(__dirname, './src')
      }
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    mode,
    devtool
  }

  if (!isProduction) {
    config.devServer = {
      contentBase: resolvePath(__dirname, destFolder),
      compress: true,
      port: 3000,
      hot: true,
      open: true,
    }
  }

  return config
}
