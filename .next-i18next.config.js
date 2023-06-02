module.exports = {
  partialBundledLanguages: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sq'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV !== 'production' ? true : false,
  debug: +process.env.DEBUG_MODE && process.env.NODE_ENV !== 'production' ? true : false,
};
