import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

// const ns = ['common']
// const supportedLngs = ['ru', 'en']
// const resources = ns.reduce((acc, n) => {
//   supportedLngs.forEach((lng) => {
//     if (!acc[lng]) acc[lng] = {}
//     acc[lng] = {
//       ...acc[lng],
//       [n]: require(`../public/locales/${lng}/${n}.json`),
//     }
//   })
//   return acc
// }, {})

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .use(
    resourcesToBackend(
      (lng: string, ns: string) =>
        import(`../../../../public/locales/${lng}/${ns}.json`)
    )
  )
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    debug: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18n
