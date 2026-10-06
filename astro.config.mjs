import { defineConfig } from 'astro/config';
import { defaultLocale, translations } from './src/i18n/locales';

// When ran by GitHub Actions, GITHUB_REPOSITORY is "owner/repo"
const REPO = process.env.GITHUB_REPOSITORY;

let site = REPO ? 'https://psychotropic.mixtures.info' : 'http://localhost:4321'
let base = '/';

export default defineConfig({
    site,
    base,
    i18n: {
        locales: Object.keys(translations),
        defaultLocale,
        fallback: {
            fr: "en",
        },
        routing: {
            prefixDefaultLocale: true,
        },
    }
});
