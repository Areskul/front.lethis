module.exports = {
  publicPath: "/",
  transpileDependencies: [/^@storefront-ui/],
  css: {
    loaderOptions: {
      sass: {
        implementation: require("dart-sass"),
      },
    },
  },
};
