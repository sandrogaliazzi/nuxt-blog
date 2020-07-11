
export default {
  mode: 'universal',

  target: 'static',
  
  vue: {
    config: {
      devtools:true
    }
  },

  head: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    title: 'Jovem Programador',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/typo.css',
    '~/assets/css/spacing.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/utils',
    '~/plugins/disqus',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-buefy',
    '@nuxtjs/dotenv',
    '@nuxtjs/prismic',
    '@nuxtjs/sitemap',
    'nuxt-fontawesome',
    'vue-social-sharing/nuxt'
  ],

  buefy: {
    defaultIconPack: 'fas', 
    defaultIconComponent:'icon', 
    materialDesignIcons: false
  },

  fontawesome: {
    component: 'icon', 
    imports: [
      //import whole set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]  
  },

  prismic: {
    endpoint: 'https://blogjovemprogramador.cdn.prismic.io/api/v2',
    preview: false
  },

  sitemap: {
    hostname: 'https://amazing-shannon-de30e0.netlify.app/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate: {
    fallback: '404.html'
  }
}
