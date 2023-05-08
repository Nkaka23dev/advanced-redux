const path = require('path');

module.exports = {
  experiments: {
    topLevelAwait: true,
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true
};