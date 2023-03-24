import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";

export const fetchData = async <T = any>(
  path: string, 
  locale: string = DEFAULT_LOCALE, 
  options?: RequestInit
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
    if (response.ok) {
      return response.json() as T;
    }
    return null as T;
  } catch (er) {
    console.log('Error fetching data', er);
    return null as T;
  }
};