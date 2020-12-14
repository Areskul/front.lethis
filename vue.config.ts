module.exports = {
  mode: "development",
  publicPath: "/",
  productionSourceMap: false,
  css: {
    extract: true,
  },
  chainWebpack: (config: any) => {
    config.module
      .rule("gql")
      .test(/\.gql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end()
      .rule("stylus")
      .test(/\.styl(us)?$/)
      .use(["vue-style-loader", "css-loader", "stylus-loader"])
      .end()
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
};
