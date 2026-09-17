export default {
  target: 'static',
  ssr: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/styles/main.scss'
  ],
  plugins: [],
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],
  axios: {},
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
        sassOptions: {
          quietDeps: true
        }
      }
    },
    extend (config, ctx) {}
  },
  generate: {
    fallback: true
  },
  webfontloader: {
    google: {
      families: ['Open+Sans:300,400,600,700,800&display=swap']
    }
  }
}
