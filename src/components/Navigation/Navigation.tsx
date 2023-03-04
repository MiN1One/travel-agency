import { useGlobalContext } from "@/contexts/GlobalContext";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import Logo from "../Common/Logo";
import classes from './Navigation.module.scss';
import { Call } from 'iconsax-react';
import classNames from "classnames";
import { useRouter } from "next/router";

function Navigation() {
  const { headData } = useGlobalContext();
  const { links = [], phoneNumber } = headData?.headerData || {};
  const { t } = useTranslation();
  const router = useRouter();

  const navigationItemEls = links.map((item, index) => {
    return (
      <li 
        key={index}
        className={classes.item}
        aria-label={item.title}
      >
        <Link href={item.link} title={item.title}>
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <header className={classNames(
      classes.navigation,
      { [classes.notHome]: router.pathname !== '/' }
    )}>
      <div className="container">
        <nav role="navigation" className={classes.content}>
          <Logo />
          <ul className={classes.list}>
            {navigationItemEls}
          </ul>
          <a
            href={`tel:${phoneNumber}`} 
            title={t('phoneDescription')!} 
            className={classNames(classes.link, "btn btn--pill")}
          >
            <Call />
            {phoneNumber}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default memo(Navigation);