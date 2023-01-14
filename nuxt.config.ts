import { defineNuxtConfig } from 'nuxt/config'

const lifecycle = process.env.npm_lifecycle_event
const baseUrl = 'http://192.168.231.197:7002/dev';
const localeUrl = 'http://192.168.0.133:7000';


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    reactivityTransform: true
  },
  runtimeConfig: {
    public: {
      apiBase: '/api',
      localeUrl: localeUrl,
      baseUrl: localeUrl,
      useProxy: false,
    },
  },
  app: {
    baseURL: '/UPRODFRONT/',
    cdnURL: './',
    head: {
      title: 'UPRod.Frontend',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'UProd',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // css
  css: ['~/assets/scss/index.scss'],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', 'nuxt-proxy'],

  // auto import components
  components: {
    global: true,
    dirs: ['~/components']
  },

  ssr: false,
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      [
        'btn',
        'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      ],
    ],
  },
})