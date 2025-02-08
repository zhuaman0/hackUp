// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2024-11-01',
 devtools: { enabled: true },
 components: true,

 css: [
   '/assets/css/style.css'
 ],

 modules: ['@nuxtjs/tailwindcss'],
 runtimeConfig: {
	openaiKey: ''
 },
 build: {
  transpile: []
 }
})

