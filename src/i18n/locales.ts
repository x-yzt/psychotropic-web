export const locales = {
    en: "English",
    fr: "Français",
};

export type Locale = keyof typeof locales;
export type Catalog = Record<string, string>;

export const defaultLocale: Locale = "en";

export const translations: Record<Locale, Catalog> = {
    en: {
        "site.altLogo": "Psychotropic bot logo",
        "site.description": "Psychotropic is a Discord bot for harm reduction and chemistry.",
        "site.footer.madeBy": "Made with 💜 and 🍜 by ",
        "site.languages": "Languages",
        "site.title": "Psychotropic",
    },
    fr: {
        "site.altLogo": "Logo du bot Psychotropic",
        "site.description": "Psychotropic est un bot Discord conçu pour la réduction des risques et la chimie.",
        "site.language": "Langues",
        "site.footer.madeBy": "Fait avec 💜 et des 🍜 par ",
    },
} as const;


export const isLocale = (value: any): value is Locale => Object.hasOwn(translations, value);
