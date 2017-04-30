module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
};
