import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Profile: 'Profile',
          'Sign Out': 'Sign Out',
          ALL: 'ALL',
          PHYSICAL: 'PHYSICAL',
          VIRTUAL: 'VIRTUAL',
        },
      },
      cn: {
        translations: {
          Profile: '账号',
          'Sign Out': '登出',
          ALL: '所有',
          PHYSICAL: '物理',
          VIRTUAL: '虚拟',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
