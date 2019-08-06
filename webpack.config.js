const { resolve: resolvePath } = require('path')

module.exports = ({
  mode,
  destFolder
}) => ({
  entry: {
    main: './src/main.js'
  },
  output: {
    path: resolvePath(__dirname, '..', destFolder),
    filename: "[name].js"
  },
  mode
})
