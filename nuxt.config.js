import theme from '@yiddishe-kop/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#ffad1f'
  },
  loading: { color: '#ffad1f' },
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
  },
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
})
