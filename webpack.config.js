const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'bundle.js',
    library: 'Bundle',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
