import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'next-i18next';
import classes from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  items: {
    link: string;
    value: 'tours' | 'places-of-interest' | 'about' | 'services';
  }[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useTranslation();

  const breadItemEls = items.map((item, index) => {
    return (
      <li
        className={classes.item}
        aria-label={t(item.value)!}
        key={index}
      >
        <Link href={item.link} title={t(item.value)!}>
          {t(item.value)}
        </Link>
      </li>    
    );
  });

  return (
    <ul className={classes.breads}>
      <li className={classes.item} aria-label={t('home')!}>
        <Link href="/" title={t('home')!}>
          {t('home')!}
        </Link>
      </li> 
      {breadItemEls}
    </ul>
  );
}

export default memo(Breadcrumbs);