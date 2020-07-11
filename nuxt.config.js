
export default {
  mode: 'universal',

  target: 'static',
  
  vue: {
    config: {
      devtools:true
    }
  },

  head: {
    title: 'Jovem Programador',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {name: 'google-site-verification', content: 'VqCInf030Vyxmi9wC73jjWQE50ZuRNrLH3VS5ImZwxM'}
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
    { src: "~/assets/css/typo.css" },
    {src: "~/assets/css/spacing.css"}
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
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', {
      defaultIconPack: 'fas', 
      defaultIconComponent:'icon', 
      materialDesignIcons: false
    }
    ],
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/prismic',

    ['nuxt-fontawesome', {
      component: 'icon', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        //import 2 icons from set 
        // please note this is PRO set in this example, 
        // you must have it in your node_modules to actually import
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
    'vue-social-sharing/nuxt'
  ],

  prismic: {
    endpoint: 'https://blogjovemprogramador.cdn.prismic.io/api/v2',
    preview: false
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
