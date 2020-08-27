const TerserPlugin = require("terser-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  css: {
    extract: true,
  },
  // devtool: "",

  chainWebpack: (config) => {
    config.module
      .rule("graphql")
      .test(/\.graphql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
  // options: {
  //   publicPath: "../",
  //   hmr: process.env.NODE_ENV === "development",
  // },
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: "all",
        name: "vendor",
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: "~",
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    };
  },
};
