module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  css: {
    extract: true,
  },
  chainWebpack: (config) => {
    config.module
      .rule("graphql")
      .test(/\.graphql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};
