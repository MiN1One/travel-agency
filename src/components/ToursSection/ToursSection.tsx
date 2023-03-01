import { memo, useState } from "react";
import { useTranslation } from "next-i18next";
import classes from './ToursSection.module.scss';
import SectionSkeleton from "../SectionSkeleton/SectionSkeleton";
import { IItem } from "@/interfaces/common.interface";
import { Swiper, SwiperSlide, } from 'swiper/react';
import ImageCard from "../ImageCard/ImageCard";
import Link from "next/link";
import { ITourType } from "@/interfaces/tour.interface";
import classNames from "classnames";

interface ToursSectionProps {
  tours: IItem[];
  tourTypes?: ITourType[];
}

function ToursSection({ tours, tourTypes }: ToursSectionProps) {
  const { t } = useTranslation();
  const [activeTourType, setActiveTourType] = useState<
    string | null
  >(null);

  const tourEls = tours.map((tour, index) => {
    return (
      <SwiperSlide key={index}>
        <ImageCard item={tour} />
      </SwiperSlide>
    );
  });

  const tourTypeEls = tourTypes?.map((type, index) => {
    return (
      <SwiperSlide
        key={index}
        aria-label={type.title}
        tabIndex={0}
        className={classNames(
          classes.tagItem,
          { active: activeTourType === type.title },
          "btn btn--pill btn--dark"
        )}
        onClick={() => setActiveTourType(type.title)}
      >
        {type.title}
      </SwiperSlide>
    );
  });

  return (
    <SectionSkeleton
      className={classes.tours}
      contentClassName={classes.content}
      headClassName={classes.head}
      title={t('tours')!}
      headContent={Boolean(tourTypes?.length) && (
        <Swiper
          freeMode
          className={classes.list}
          slidesPerView={5}
          spaceBetween={10}
        >
          {tourTypeEls}
        </Swiper>
      )}
    >
      <Swiper
        className={classes.slider}
        spaceBetween={30}
        slidesPerView={4}
      >
        {tourEls}
      </Swiper>
      <Link 
        href="/tours" 
        className="btn btn--lg btn--fullWidth btn--green btn--pill" 
        title={t('viewAllTours')!}
      >
        {t('viewAllTours')}
      </Link>
    </SectionSkeleton>
  );
}

export default memo(ToursSection);