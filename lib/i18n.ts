import { getRequestConfig } from 'next-intl/server';

export const locales = ['my', 'en'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !isLocale(locale)) {
    locale = 'my';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
