import type { AppProps } from 'next/app';
import '@/sass/index.scss';
import { GlobalContextProvider } from '@/contexts/GlobalContext';
import { appWithTranslation } from 'next-i18next';
import 'swiper/swiper.min.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider initialData={pageProps.headData}>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default appWithTranslation(App);
