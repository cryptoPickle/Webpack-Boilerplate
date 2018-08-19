const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname, "../", "build"),
  entryPath: path.resolve(__dirname, "../", "src/App.js"),
  templatePath: path.resolve(__dirname, "../", "assets/index.html"),
  imagesFolder: "images",
  jsFolder: "js",
  cssFolder: "css"
};
