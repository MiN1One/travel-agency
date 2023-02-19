import { memo } from "react";
import { useTranslation } from "next-i18next";
import classes from './ToursSection.module.scss';
import SectionSkeleton from "../SectionSkeleton/SectionSkeleton";
import { IItem } from "@/interfaces/common.interface";
import { Swiper, SwiperSlide, } from 'swiper/react';
import ImageCard from "../ImageCard/ImageCard";
import Link from "next/link";

interface ToursSectionProps {
  tours: IItem[];
}

function ToursSection({ tours }: ToursSectionProps) {
  const { t } = useTranslation();

  const tourEls = tours.map(tour => {
    return (
      <SwiperSlide key={tour.id}>
        <ImageCard item={tour} />
      </SwiperSlide>
    );
  });

  return (
    <SectionSkeleton
      className={classes.tours}
      contentClassName={classes.content}
      title={t('tours')!}
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