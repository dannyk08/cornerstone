const { resolve: resolvePath } = require('path')

module.exports = ({
  mode,
  destFolder
}) => {
  const config = {
    entry: {
      main: './src/main.js'
    },
    output: {
      path: resolvePath(__dirname, '..', destFolder),
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
    mode
  }

  return config
}
