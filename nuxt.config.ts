import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  components: [
    { path: '~/components', extensions: ['vue'] }
  ],
  alias: {
    "~styles": "/assets/styles",
    "~images": "/assets/images",
  },
  css: [
    '@/assets/styles/main.scss'
  ],

})
