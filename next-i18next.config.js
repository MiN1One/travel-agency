const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'en', 'ru'],
    localeDetection: false
  },
  saveMissing: isDev,
  updateMissing: isDev,
  defaultNS: 'common',
  load: 'currentOnly',
  reloadOnPrerender: isDev,
};