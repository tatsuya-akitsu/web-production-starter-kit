module.exports = {
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | POiDER',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WEB制作依頼時の必須項目用テンプレートです' },
      { name: 'msapplication-config', content: '/img/favicons/browserconfig.xml' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/img/favicons/mstile-144x144.png' },
      { name: 'theme-color', content: '#f5deb3' }  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicons/apple-touch-icon-180x180.png' },
      { rel: 'mask-icon', color: '#555', href: '/img/favicons/safari-icon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicons/android-chrome-192x192.png' },
      { rel: 'manifest', href: '/img/favicons/manifest.json' },  
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/sanitize.css/2.0.0/sanitize.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    name: 'rotating-plane',
    color: '#FFFFFF',
    background: '#0ecec8'
  },
  /*
  ** Build configuration
  */
  plugins: [
    {src: '~plugins/element-ui'}
  ],
  modules: [
    ['@nuxtjs/moment'],
    ['nuxt-sass-resources-loader', [
      '~/assets/sass/variable.scss',
      '~/assets/sass/mixin.scss',
    ]]
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [ 'element-ui' ],
    vendor: [ 'moment' ]
  }
}
