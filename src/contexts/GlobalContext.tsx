import useMedia from "@/hooks/useMedia";
import { useRouter } from "next/router";
import { createContext, FC, useCallback, useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { IHeadData } from "@/interfaces/common.interface";
import { StateSetter } from "@/interfaces/utils.interface";

interface IGlobalContext {
  activeLang: string;
  media: Record<string, boolean>;
  headData: IHeadData | null;
  setHeadData: StateSetter<IHeadData | null>;
  changeLanguage: (lang: string) => void;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
  initialData: IHeadData;
}

const globalContext = createContext({} as IGlobalContext);

export const useGlobalContext = () => useContext(globalContext);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = 
  ({ children, initialData }) => {
    const [headData, setHeadData] = useState<IHeadData | null>(initialData || null);
    const media = useMedia(
      ['xs', 'only screen and (max-width: 34.375em)'],
      ['mobile', 'only screen and (max-width: 48em)'],
      ['tablet', 'only screen and (max-width: 64em)'],
      ['wide', '(min-width: 87.5em)']
    );
    const router = useRouter();
    const activeLang = router.locale || 'uz';
    const { i18n } = useTranslation();
    
    const changeLanguage = useCallback(async (lang: string) => {
      if (activeLang === lang) return;
      await i18n.changeLanguage(lang);
      await router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, }
        }, 
        undefined, 
        { locale: lang, }
      );
      window.location.reload();
    }, [router, activeLang, i18n]);

    const state: IGlobalContext = {
      activeLang,
      media,
      headData,
      setHeadData,
      changeLanguage,
    };

    return (
      <globalContext.Provider value={state}>
        {children}
      </globalContext.Provider>
    );
  };