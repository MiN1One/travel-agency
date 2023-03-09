import { DEFAULT_LOCALE } from '@/interfaces/locales.interface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchData } from './client-fetch.utils';

export const fetchMainData = async (
  locale: string = DEFAULT_LOCALE,
  ...namespaces: string[]
) => {
  const [
    translations, 
    headerData, 
    footerData
  ] = await Promise.all([
    serverSideTranslations(
      locale, 
      ['common', ...namespaces]
    ),
    fetchData('/header', locale),
    fetchData('/footer', locale),
  ]);
  return {
    ...translations,
    headData: {
      headerData,
      footerData
    }
  };
};