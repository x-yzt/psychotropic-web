import { getRelativeLocaleUrl } from "astro:i18n";

import { type Catalog, defaultLocale, isLocale, type Locale, translations } from "./locales";


const translateTo = (locale: Locale) => {
    const catalog: Catalog = translations[locale];

    return function translate(key: keyof (typeof translations[typeof defaultLocale])) {
        const translation = Object.hasOwn(catalog, key) ? catalog[key] : translations[defaultLocale][key];

        if (translation) return translation;
        console.warn("No translation found for key", key);
        return key;
    };
}

const translator = (astro: { currentLocale?: string }) => {
    const currentLocale = isLocale(astro.currentLocale) ? astro.currentLocale : defaultLocale;

    return {
        currentLocale,
        translate: translateTo(currentLocale),
        translateUrl: (path: string) => getRelativeLocaleUrl(currentLocale, path),
        translateUrlTo: (locale: keyof typeof translations, path: string) => getRelativeLocaleUrl(locale, path),
    }
}

export default translator;
