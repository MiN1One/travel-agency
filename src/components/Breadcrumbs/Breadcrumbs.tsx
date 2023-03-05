import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import classes from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  items: {
    link: string;
    value?: "tours" | "places-of-interest" | "about" | "services";
    title?: string;
  }[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useTranslation();

  const breadItemEls = items.map((item, index) => {
    return (
      <li 
        className={classes.item} 
        aria-label={item.title || t(item.value!)!} 
        key={index}
      >
        <Link 
          href={item.link} 
          title={item.title || t(item.value!)!}
        >
          {item.title || t(item.value!)}
        </Link>
      </li>
    );
  });

  return (
    <div className="container">
      <ul className={classes.breads}>
        <li className={classes.item} aria-label={t("home")!}>
          <Link href="/" title={t("home")!}>
            {t("home")!}
          </Link>
        </li>
        {breadItemEls}
      </ul>
    </div>
  );
}

export default memo(Breadcrumbs);
