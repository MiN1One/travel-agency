import { useGlobalContext } from "@/contexts/GlobalContext";
import Link from "next/link";
import { memo, useState } from "react";
import Logo from "../Common/Logo";
import classes from './MobileNavigation.module.scss';
import { IoMenuOutline } from 'react-icons/io5';
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { VscClose } from "react-icons/vsc";
import useHideScrollbar from "@/hooks/useHideScrollbar";
import { CallCalling } from "iconsax-react";
import { useRouter } from "next/router";

function MobileNavigation() {
  const { headData } = useGlobalContext();
  const { links, phoneNumber } = headData?.headerData || {};
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();

  useHideScrollbar(showDrawer);

  const linkEls = links?.map((link, index) => {
    return (
      <li 
        className={classes.item} 
        key={link.id ?? index} 
        aria-label={link.title}
      >
        <Link title={link.title} href={link.link}>
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <header className={classNames(
      classes.navigation,
      { [classes.home]: router.pathname === '/' }
    )}>
      <div 
        role="dialog" 
        className={classNames(
          classes.drawer,
          { [classes.active]: showDrawer }
        )}
      >
        <div>
          <ul className={classes.list}>
            {linkEls}
          </ul>
          <a 
            href={`tel:${phoneNumber}`} 
            title={t('phoneNumber')!} 
            className={classes.phone}
          >
            <CallCalling />
            {phoneNumber}
          </a>
        </div>
        <button 
          onClick={() => setShowDrawer(false)}
          className={classes.btnClose}
        >
          <VscClose />
        </button>
      </div>
      <div className="container">
        <nav className={classes.content}>
          <Link 
            className={classes.logo} 
            title={t('home')!} 
            href="/"
          >
            <Logo />
          </Link>
          <button 
            title={t('openDrawer')!}
            onClick={() => setShowDrawer(true)} 
            className={classes.btnOpen}
          >
            <IoMenuOutline />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default memo(MobileNavigation);