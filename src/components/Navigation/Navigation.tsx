import { useGlobalContext } from "@/contexts/GlobalContext";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import Logo from "../Common/Logo";
import classes from "./Navigation.module.scss";
import { Call } from "iconsax-react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { fixNavigationUrl } from "@/utils/url.utils";
// import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function Navigation() {
  const { headData } = useGlobalContext();
  const { menus = [], company_info } = headData?.headerData || {};
  const { t } = useTranslation();
  const router = useRouter();

  // useSmoothScroll();

  const navigationItemEls = menus.map((item, index) => {
    return (
      <li 
        key={index} 
        className={classes.item} 
        aria-label={item.title}
      >
        <Link 
          href={fixNavigationUrl(router.pathname, item.url)} 
          title={item.title}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <header
      className={classNames(classes.navigation, {
        [classes.notHome]: router.pathname !== "/",
      })}
    >
      <div className="container">
        <nav role="navigation" className={classes.content}>
          <Link href="/" title={t('home')!}>
            <Logo src={company_info?.logo_url} />
          </Link>
          <ul className={classes.list}>{navigationItemEls}</ul>
          <a
            href={`tel:${company_info?.contact_phone_number}`}
            title={t("phoneDescription")!}
            className={classNames(classes.btn, "btn btn--pill")}
          >
            <Call />
            {company_info?.contact_phone_number}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default memo(Navigation);
