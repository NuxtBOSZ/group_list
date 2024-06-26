// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss' , '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['heroicons']
  }
})
