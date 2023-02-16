import { useEffect } from "react";

const useHideScrollbar = (hide: boolean) => {
  useEffect(() => {
    if (hide) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.removeProperty('overflow');
    }
  }, [hide]);
};

export default useHideScrollbar;