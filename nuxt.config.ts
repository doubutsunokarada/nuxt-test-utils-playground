// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'src/',
  rootDir: '.',
  modules: ['@nuxt/test-utils/module', '@hebilicious/vue-query-nuxt'],
  plugins: ['src/plugins/msw.client'],
});
