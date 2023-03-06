import { IItem } from "@/interfaces/common.interface";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";
import classes from './ImageCardExpanded.module.scss';
import classNames from "classnames";

interface ImageCardExpandedProps {
  item: IItem;
}

function ImageCardExpanded({ item }: ImageCardExpandedProps) {
  const { t } = useTranslation();

  const image = (
    <figure className={classNames(classes.image, 'overlay')}>
      <img 
        width="100%"
        height="100%"
        alt={item.title}
        src={item.image}
      />
    </figure>
  );

  return (
    <div className={classes.card}>
      <div className={classes.content}>
        {image}
        <span className={classes.label}>
          {item.type}
        </span>
        {item.description && (
          <p className={classNames(
            'text text--xl text--dark text--high', 
            classes.description
          )}>
            {item.description}
          </p>
        )}
      </div>
      {image}
      <Link 
        className={classNames(
          'link link--arrow btn btn--pill btn--opaque btn--sm', 
          classes.link
        )}
        title={t('viewMore')!} 
        href={item.link || `/tours/${item.id}`}
      >
        {t('viewMore')}
        <CustomIcon iconName="arrow-right" />
      </Link>
    </div>
  )
}

export default memo(ImageCardExpanded);