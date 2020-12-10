const pathAliasMap = {
  "@/": "/src/",
  "@components/": "/src/components/",
  "@views/": "/src/views/",
};

export default {
  publicPath: "/",
  resolvers: [
    {
      alias(path: string) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res);
          }
        }
      },
    },
  ],
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
      .end();
  },
};
