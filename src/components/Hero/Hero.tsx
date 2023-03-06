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
  const [activePlaceId, setActivePlaceId] = useState<number | null>(
    homeData.places[0].id
  );

  const activePlaceObj = useMemo(() => {
    return homeData.places.find(({ id }) => id === activePlaceId);
  }, [activePlaceId]);

  const tourEls = homeData.places.map((place, index) => {
    const isActive = activePlaceId === place.id;
    let activeNumber: any = index + 1,
      allPlacesCount: any = homeData.places.length;
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
            onClick={() => place.image && setActivePlaceId(place.id!)}
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
                href="/places/all"
                title={t("viewMore")!}
              >
                {t("viewMore")}
                <CustomIcon iconName="arrow-right" />
              </Link>
            </div>
          )}
        </div>
        {index < homeData.places.length - 1 && (
          <span className={classes.separator} />
        )}
      </React.Fragment>
    );
  });

  const bgImages = homeData.places.map((place, index) => {
    if (!place.image) {
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
          src={place.image}
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
      <h1 className="heading heading--xlg">
        {homeData.mainTitle}
      </h1>
      {activePlaceObj?.previewLink && (
        <Link
          className={classes.btnPlay}
          title={activePlaceObj.title}
          href={activePlaceObj.previewLink}
        >
          {t("watchShowrell")}
          <span>
            <IconPlay />
          </span>
        </Link>
      )}
      <div className={classes.list}>{tourEls}</div>
      <div className={classes.socialLinks}>
        <div className="container">
          <div className={classes.linksContent}>
            <a
              className="link--rounded"
              href={homeData.socialLinks.instagram}
              title="Instagram"
            >
              <Instagram />
            </a>
            <a
              className="link--rounded"
              href={homeData.socialLinks.telegram}
              title="Telegram"
            >
              <TbBrandTelegram />
            </a>
            <a
              className="link--rounded"
              href={homeData.socialLinks.youtTube}
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
