const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.ts',
  },
  output:{
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  }, 
devServer: {
  static: {
    directory: path.resolve(__dirname, 'dist'),
  }
},
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      } 
    ]
  }
}