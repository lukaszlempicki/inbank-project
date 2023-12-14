const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "InBank project";
      args[0].meta = {
        viewport:
          "width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no",
      };
      return args;
    });

    config.resolve.alias.set(
      "vue$",
      // If using the runtime only build
      path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js")
      // Or if using full build of Vue (runtime + compiler)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    );
  },
});
