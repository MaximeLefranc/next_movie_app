import { availableLocales } from './i18n';

const dictionaries = availableLocales.reduce((acc, locale) => {
  return {
    ...acc,
    [locale]: () =>
      import(`../dictionaries/${locale}.json`).then((module) => module.default),
  };
}, {});

export const getDictionary = async (locale) => dictionaries[locale]();
