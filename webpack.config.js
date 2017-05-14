const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './_scripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js')
  },
  plugins: [
    new webpack.ProvidePlugin({ // inject ES5 modules as global vars
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether'
    })
  ]
};
