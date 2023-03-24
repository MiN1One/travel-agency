import { useEffect, useCallback } from 'react';

export const useSmoothScroll = (loaded: boolean = true) => {
  const onClickLink = useCallback(
    function (this: Element, e: globalThis.Event) {
      e.preventDefault();
      const element = document.querySelector(this.getAttribute('href')!);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }, []
  );

  useEffect(() => {
    if (loaded) {
      const linkItems = document.querySelectorAll('a[href^="#"]');
      linkItems.forEach(anchor => {
        anchor.addEventListener('click', () => console.log('click'));
      });
      return () => {
        linkItems.forEach(anchor => {
          anchor.removeEventListener('click', onClickLink);
        });
      };
    }
  }, [loaded]);
};