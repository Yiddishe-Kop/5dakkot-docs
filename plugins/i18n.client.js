export default function ({ app }) {
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    document.body.setAttribute('dir', newLocale == 'he' ? 'rtl' : 'ltr')
  }
}
