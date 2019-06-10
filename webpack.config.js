const path = require("path");
// console.log(path.join(__dirname, "public"));
module.exports = {
  entry: "./src/import/app.js",
  mode: "none",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
