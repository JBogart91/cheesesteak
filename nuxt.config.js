export default {
  ssr: false,
  srcDir: 'src/',
  head: {
    title: 'cheesesteak',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    base: '/'
  },
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: '~/assets/styles/main.scss'
  }
}
