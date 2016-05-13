module.exports = {
  context: __dirname,
  entry: "./entry-sudoku.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        loaders: ["babel?presets[]=react,presets[]=es2015"]
      }
    ]
  },
};
