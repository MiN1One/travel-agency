import { headerData } from '@/config/navigation.config';
import { IHeadData } from '@/interfaces/common.interface';
import { footerData } from '@/config/footer.config';
import { DEFAULT_LOCALE } from '@/interfaces/locales.interface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const fetchData = async (
  path: string, 
  locale: string = DEFAULT_LOCALE, 
  options: RequestInit
) => {
  try {
    const response = await fetch(
      process.env.API_URL! + '/' + path, 
      {
        ...(options || {}),
        headers: {
          ...(options?.headers || {}),
          'Accept-Language': locale
        },
      }
    );
    return response.json();
  } catch (er) {
    console.log('Error fetching data', er);
    return null;
  }
};

export const fetchMainData = async (
  locale: string = DEFAULT_LOCALE,
  ...namespaces: string[]
) => {
  const translations = await serverSideTranslations(
    locale, 
    ['common', ...namespaces]
  );
  const headData: IHeadData = {
    headerData,
    footerData,
  };
  return {
    ...translations,
    headData
  };
};