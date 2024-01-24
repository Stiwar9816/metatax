export default defineNuxtConfig({
  app: {
      head: {
          title: 'MetaTax | MetaTax - Detector de evasiones tributarias',
          titleTemplate: '%s | MetaTax - Detector de evasiones tributarias',
          htmlAttrs: {
              lang: 'es',
          },
          meta: [
              { charset: 'utf-8' },
              {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no',
              },
              { hid: 'description', name: 'description', content: '' },
              {
                  name: 'MetaTax',
                  content: 'Detección de evasiones para un sistema tributario justo.',
              },
              { name: 'format-detection', content: 'telephone=no' },
          ],
          link: [
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
              },
          ],
      },
  },

  css: ['~/assets/css/app.css'],

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },

  modules: ['@pinia/nuxt', '@nuxtjs/i18n', 'nuxt-bootstrap-icons'],

  i18n: {
      locales: [
          { code: 'en', file: 'en.json' },
          { code: 'es', file: 'es.json' },
      ],
      lazy: true,
      defaultLocale: 'es',
      strategy: 'no_prefix',
      langDir: 'locales/',
  },

  vite: {
      optimizeDeps: { include: ['quill'] },
  },

  router: {
      options: { linkExactActiveClass: 'active' },
  },

  devtools: {
    enabled: true,
  },
});
