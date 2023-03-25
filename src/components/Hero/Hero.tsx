import { IHomeData } from "@/interfaces/home.interface";
import React, { memo, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import classes from "./Hero.module.scss";
import classNames from "classnames";
import Link from "next/link";
import CustomIcon from "../Common/CustomIcon";
import IconPlay from "../Common/IconPlay";
import { Instagram, Youtube } from "iconsax-react";
import { TbBrandTelegram } from "react-icons/tb";

interface HeroProps {
  homeData: IHomeData;
}

function Hero({ homeData }: HeroProps) {
  const { t } = useTranslation();
  const { hero } = homeData || {};
  const [activePlaceId, setActivePlaceId] = useState<number | null>(
    hero.tours[0].id
  );

  const tourEls = hero.tours.map((place, index) => {
    const isActive = activePlaceId === place.id;
    let activeNumber: any = index + 1,
      allPlacesCount: any = hero.tours.length;
    if (activeNumber < 10) {
      activeNumber = "0" + activeNumber;
    }
    if (allPlacesCount < 10) {
      allPlacesCount = "0" + allPlacesCount;
    }
    return (
      <React.Fragment key={index}>
        <div
          className={classNames(classes.item, { [classes.active]: isActive })}
          tabIndex={0}
          role="columnheader"
        >
          <span
            className={classes.title}
            onClick={() =>
              place.banner_image_url && setActivePlaceId(place.id!)
            }
          >
            {place.title}
          </span>
          {isActive && (
            <div className={classes.itemGroup}>
              <div className="text">
                {activeNumber}/
                <span className="text--sm">{allPlacesCount}</span>
              </div>
              <Link
                className="link link--arrow"
                href={`/tours/${activePlaceId}`}
                title={t("viewMore")!}
              >
                {t("viewMore")}
                <CustomIcon iconName="arrow-right" />
              </Link>
            </div>
          )}
        </div>
        {index < hero.tours.length - 1 && (
          <span className={classes.separator} />
        )}
      </React.Fragment>
    );
  });

  const bgImages = hero.tours.map((place, index) => {
    if (!place.banner_image_url) {
      return null;
    }
    return (
      <figure
        key={index}
        className={classNames(classes.bgImage, {
          [classes.active]: place.id === activePlaceId,
        })}
      >
        <img
          src={place.banner_image_url}
          alt={place.title || t("placeImage")!}
          width="100%"
          height="100%"
        />
      </figure>
    );
  });

  return (
    <section className={classes.hero}>
      {bgImages}
      <h1 className="heading heading--xlg">Uzbekistan</h1>
      {hero.company_info.video_url && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={classes.btnPlay}
          title={t("showRell")!}
          href={hero.company_info.video_url}
        >
          {t("watchShowrell")}
          <span>
            <IconPlay />
          </span>
        </a>
      )}
      <div className={classes.list}>{tourEls}</div>
      <div className={classes.socialLinks}>
        <div className="container">
          <div className={classes.linksContent}>
            <a
              className="link--rounded"
              href={hero.company_info.instagram_link}
              title="Instagram"
            >
              <Instagram />
            </a>
            <a
              className="link--rounded"
              href={hero.company_info.telegram_link}
              title="Telegram"
            >
              <TbBrandTelegram />
            </a>
            <a
              className="link--rounded"
              href={hero.company_info.youtube_link}
              title="Youtube"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
