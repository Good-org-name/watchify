// module.exports = {
//   entry: "./app/index.js",
//   mode: "development",
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-react"],
//         },
//       },
//     ],
//   },
// };

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
      
    ]
  }
}
