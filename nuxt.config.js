export default {
  server: {
    port: 8010,
    host: "127.0.0.1",
  },
  env: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://yiguan.gooeto.com"
        : "https://yiguantest.gooeto.com",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "智能导诊",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vant/lib/index.css", "@assets/styles/global.less"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vant.js",
    },
    {
      src: "~/plugins/lib-flexible.js",
      mode: "client",
    },
    { src: "~/plugins/store-cache.js", ssr: false },
    "~/plugins/axios.js",
    "~/plugins/request.js",
    "~/plugins/api.js",
    "~/plugins/vue-global.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    "@nuxtjs/style-resources",
  ],

  styleResources: {
    less: ["./assets/styles/variable.less"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-pxtorem": {
          rootValue: 37.5,
          propList: ["*"],
        },
      },
      preset: {
        autoprefixer: true,
      },
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
        config.devtool = "#source-map" // 表示在开发模式的 client 端启用 source-map
      }
    },
  },
}
