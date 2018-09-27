module.exports = {
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 'web-request-starter-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WEB制作依頼時の必須項目用テンプレートです' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    {src: '~plugins/element-ui'}
  ],
  modules: [
    ['@nuxtjs/moment']
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/style.scss'
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
