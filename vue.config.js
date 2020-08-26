const TerserPlugin = require("terser-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  // devtool: "",
  // rules: [
  //   {
  //     test: /\.scss$/,
  //     use: ExtractTextPlugin.extract({
  //       fallback: "style-loader",
  //       use: ["css-loader", "sass-loader"],
  //     }),
  //   },
  // ],
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
