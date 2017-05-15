module.exports = {
  entry: './js/app.module.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
    ]
  }
  resolve: {
    modulesDirectories: ['node_modules', 'web_modules']
  }
};