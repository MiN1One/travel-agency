import { ITour } from "@/interfaces/tour.interface";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";
import classes from "./ImageCardExpanded.module.scss";
import classNames from "classnames";

interface ImageCardExpandedProps {
  item: ITour;
}

function ImageCardExpanded({ item }: ImageCardExpandedProps) {
  const { t } = useTranslation();

  const image = (
    <figure className={classNames(classes.image, "overlay")}>
      <img 
        width="100%" 
        height="100%" 
        alt={item.title} 
        src={item.cover_image_url}
      />
    </figure>
  );

  const link = (
    <Link
      className={classNames(
        "link link--arrow btn btn--pill btn--opaque btn--sm",
        classes.link
      )}
      title={t("viewMore")!}
      href={`/tours/${item.id}`}
    >
      {t("viewMore")}
      <CustomIcon iconName="arrow-right" />
    </Link>
  );

  return (
    <div className={classes.card}>
      <div className={classes.content}>
        {image}
        {item.tour_category_title && (
          <span className={classes.label}>
            {item.tour_category_title}
          </span>
        )}
        {item.short_description && (
          <p
            className={classNames(
              "text text--xl text--dark text--high",
              classes.description
            )}
          >
            {item.short_description}
          </p>
        )}
        {link}
      </div>
      {image}
      {link}
    </div>
  );
}

export default memo(ImageCardExpanded);
