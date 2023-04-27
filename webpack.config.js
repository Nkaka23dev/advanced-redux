const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true, // Enable watch mode
  watchOptions: {
    ignored: /node_modules/, // Ignore changes to node_modules directory
  },
  mode: "development"
};
