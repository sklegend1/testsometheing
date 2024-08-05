import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from './components/Intl/locale';
import { useContext } from 'react';
import { LocaleContext } from './app/context/localeContext';
import { TheLocaleSelected } from './components/Utils/getSetLocale';
import { cookies } from 'next/headers';
import {Locale, defaultLocale} from '@/config';

 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
//   const locale = await getUserLocale();
const locale = cookies().get("NEXT_LOCALE")?.value || defaultLocale;
console.log("local is : "+locale)
 
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});