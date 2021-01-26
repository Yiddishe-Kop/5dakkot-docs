import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#ffad1f'
  },
  loading: { color: '#ffad1f' },
  css: [
    './css/custom.css'
  ],
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }, {
      code: 'he',
      iso: 'he-IL',
      file: 'he-IL.js',
      name: 'עברית'
    }],
    defaultLocale: 'he',
    langDir: '../../../../i18n/'
  },
  plugins: [
    '../../../../plugins/i18n.client.js'
  ],
  pwa: {
    manifest: {
      name: '5Dakkot Docs',
      short_name: '5Dakkot',
      background_color: '#ffad1f',
      theme_color: '#ffad1f',
    },
    meta: {
      twitterCard: 'summary_large_image',
    }
  },
  googleFonts: {
    families: {
      Heebo: true
    }
  },
})
