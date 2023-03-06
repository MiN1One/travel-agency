import { IItem } from "@/interfaces/common.interface";
import classNames from "classnames";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";
import classes from "./ImageCard.module.scss";

interface ImageCardProps {
  item: IItem;
}

function ImageCard({ item }: ImageCardProps) {
  const { t } = useTranslation();

  return (
    <div
      role="cell"
      className={classNames("overlay", classes.card, {
        [classes.hasDescription]: item.description,
      })}
    >
      <figure className={classes.image}>
        <img alt={item.title} width="100%" height="100%" src={item.image} />
      </figure>
      <div className={classes.content}>
        {item.description && (
          <p
            className={classNames(
              classes.description,
              "text text--light text--sm"
            )}
          >
            {item.description}
          </p>
        )}
        {item.link && (
          <Link
            title={t("viewMore")!}
            className={classNames(
              classes.link,
              "btn btn--pill btn--sm btn--opaque"
            )}
            href={item.link}
          >
            {t("viewMore")}
            <CustomIcon iconName="arrow-right" />
          </Link>
        )}
      </div>
      <span className={classNames(classes.title, "text-oveflow")}>
        {item.title}
      </span>
    </div>
  );
}

export default memo(ImageCard);
