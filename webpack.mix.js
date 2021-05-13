const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications();

mix.browserSync({
  proxy: "localhost:8000",
  notify: false,
});

mix.vue({
  version: 2,
  extractStyles: true,
});

mix.js("resources/js/app.js", "public/js");

mix.sass("resources/css/app.scss", "public/css");

mix.webpackConfig({
  output: {
    chunkFilename: "js/[name].js?id=[chunkhash]",
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
      "@": path.resolve("resources/js"),
    },
  },
});

mix.extract().version();

mix.override((config) => {
  config.module.rules.push({
    test: /\.vue$/,
    use: [{ loader: "vue-svg-inline-loader" }],
  });
});
