module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  css: {
    extract: true,
  },
  chainWebpack: (config) => {
    config.devServer.disableHostCheck(true);
  },
};
