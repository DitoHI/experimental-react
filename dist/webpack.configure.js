"use strict";

module.exports = {
  // change to .tsx if necessary
  entry: './src/index.jsx',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [// changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
    {
      test: /\.([tj])sx?$/,
      use: {
        loader: 'awesome-typescript-loader'
      }
    }, // addition - add source-map support
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    }]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  // addition - add source-map support
  devtool: 'source-map'
};
//# sourceMappingURL=webpack.configure.js.map