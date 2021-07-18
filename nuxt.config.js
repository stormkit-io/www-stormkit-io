export default {
  generate: {
    fallback: 'error.html',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Stormkit - Serverless infrastructure for javascript applications',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'httpEquiv',
        name: 'x-ua-compatible',
        content: 'ie=edge',
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'qy_tyF_WyY51Q2fisZBBV-LlCddUEf0wF8fXM99u_l8',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@stormkitio',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@savasvedova',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Serverless infrastructure for javascript applications',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Stormkit integrates perfectly with your git flow. It builds, deploys and scales your javascript apps seamlessly.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://www.stormkit.io/stormkit-logo.png',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.stormkit.io/stormkit-logo.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.stormkit.io/',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        defer: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '@/assets/css/docs.css', lang: 'css' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Tailwindcss module configuration
   ** See https://tailwindcss.nuxtjs.org/options
   */
  tailwindcss: {
    jit: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},

    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  router: {
    linkActiveClass: 'active-link',
  },
}
