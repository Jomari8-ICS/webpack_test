
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ]
};