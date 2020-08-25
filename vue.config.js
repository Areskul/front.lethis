module.exports = {
  publicPath: "/",
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      plugins: [
        new MyAwesomeWebpackPlugin()
      ],
    } else {
      // mutate for development...
    }
  }
};
