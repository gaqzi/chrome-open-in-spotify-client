const path = require('path')

module.exports = {
  entry: './chrome',
  output: {
    filename: 'open-in-client.js',
    path: path.resolve(__dirname, 'dist', 'chrome')
  }
}
