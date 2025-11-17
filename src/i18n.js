import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/common.json'
import es from './locales/es/common.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      es: { common: es }
    },
  // try to load saved language from localStorage, default to 'en'
  lng: (typeof window !== 'undefined' && localStorage.getItem('lng')) ? localStorage.getItem('lng') : 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  })

export default i18n
