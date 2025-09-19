import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export const getMessages = async (locale: string = 'en') => {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch {
    console.warn(`Failed to load messages for locale ${locale}, falling back to English`);
    return (await import(`../messages/en.json`)).default;
  }
};

export default getRequestConfig(async ({ requestLocale }) => {
  try {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    return {
      locale,
      messages: await getMessages(locale),
    };
  } catch (error) {
    console.error('Error in getRequestConfig:', error);
    return {
      locale: 'en',
      messages: await getMessages('en'),
    };
  }
});
