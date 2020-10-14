module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  css: {
    extract: true,
  },
  chainWebpack: (config) => {
    config.module
      .rule("gql")
      .test(/\.gql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};