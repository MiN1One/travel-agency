import { memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import SectionSkeleton from "../SectionSkeleton/SectionSkeleton";
import classes from './PhotoGallery.module.scss';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import DSlider from "../DSlider/DSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

interface PhotoGalleryProps {
  images: string[];
}

function PhotoGallery({ images }: PhotoGalleryProps) {
  const { t } = useTranslation();
  const [slides, setSlides] = useState(images);

  const onSlideChange = useCallback((direction: 'prev' | 'next') => {
    const slidesCopy = [...slides];
    if (direction === 'prev') {
      slidesCopy.unshift(slidesCopy.pop()!);
    } else {
      slidesCopy.push(slidesCopy.shift()!);
    }
    setSlides(slidesCopy);
  }, [slides]);

  const plainImageEls = images.map((image, index) => {
    return (
      <SwiperSlide key={index} className={classes.image}>
        <img 
          width="100%"
          height="100%"
          src={image}
          alt={t('galleryImage')!}
        />
      </SwiperSlide>
    );
  });

  return (
    <SectionSkeleton
      title={t('photoGallery')!}
      withContainer={false}
      headClassName={classes.head}
      className={classes.photos}
      headContent={(
        <>
          <span className={classes.separator} />
          <div className={classes.btnGroup}>
            <button 
              className="btn btn--round" 
              onClick={() => onSlideChange('prev')}
            >
              <HiOutlineChevronLeft />
            </button>
            <button 
              className="btn btn--round"
              onClick={() => onSlideChange('next')}
            >
              <HiOutlineChevronRight />
            </button>
          </div>
        </>
      )}
    >
      <div className={classes.imagesWrapper}>
        <Swiper
          className={classes.images}
          slidesPerView={1.15}
          spaceBetween={12}
          freeMode
          modules={[FreeMode]}
        >
          {plainImageEls}
        </Swiper>
      </div>
      <div className={classes.gallery}>
        <DSlider images={slides} />
      </div>
    </SectionSkeleton>
  );
}

export default memo(PhotoGallery);