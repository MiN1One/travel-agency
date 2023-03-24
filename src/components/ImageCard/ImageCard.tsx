import classNames from "classnames";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";
import classes from "./ImageCard.module.scss";
import { ITour } from "@/interfaces/tour.interface";

interface ImageCardProps {
  item: ITour;
}

function ImageCard({ item }: ImageCardProps) {
  const { t } = useTranslation();

  return (
    <div
      role="cell"
      className={classNames("overlay", classes.card, {
        [classes.hasDescription]: item.short_description,
      })}
    >
      <figure className={classes.image}>
        <img 
          alt={item.title} 
          width="100%" 
          height="100%" 
          src={item.cover_image_url}
        />
      </figure>
      <div className={classes.content}>
        {item.short_description && (
          <p
            className={classNames(
              classes.description,
              "text text--light text--sm"
            )}
          >
            {item.short_description}
          </p>
        )}
        <Link
          title={item.title}
          className={classNames(
            classes.link,
            "btn btn--pill btn--sm btn--opaque"
          )}
          href={`/tours/${item.id}`}
        >
          {t("viewMore")}
          <CustomIcon iconName="arrow-right" />
        </Link>
      </div>
      <span className={classNames(classes.title, "text-oveflow")}>
        {item.title}
      </span>
    </div>
  );
}

export default memo(ImageCard);
