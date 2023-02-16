import { useGlobalContext } from "@/contexts/GlobalContext";
import dynamic from "next/dynamic";
import React from "react";
import Footer from "../Footer/Footer";
import SafeHydrate from "./SafeHydrate";

interface LayoutProps {
  children: React.ReactNode;
}

const AsyncNavigation = dynamic(() =>
  import('@components/Navigation/Navigation')
);
const AsyncMobileNavigation = dynamic(() =>
  import('@components/MobileNavigation/MobileNavigation')
);

function Layout({ children }: LayoutProps) {
  const { media, headData } = useGlobalContext();
  return (
    <React.Fragment>
      <SafeHydrate releaseContent>
        {media.tablet && headData?.headerData
          ? <AsyncMobileNavigation />
          : <AsyncNavigation />
        }
      </SafeHydrate>
      {children}
      {headData?.footerData && <Footer />}
    </React.Fragment>
  );
};

export default Layout;