import { IItem } from '@/interfaces/common.interface';
import { memo, useState } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import classes from './SingleTour.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navigation from '../Navigation/Navigation';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ToursSlider from '../ToursSlider/ToursSlider';

interface SingleTourProps {
  tour: IItem;
  recommendedTours?: IItem[];
}

function SingleTour({ tour }: SingleTourProps) {
  const { t } = useTranslation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageEls = tour.images?.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img 
          src={image}
          alt={`${tour.title} ${t('image')}`} 
          width="100%" 
          height="100%"
        />
      </SwiperSlide>
    );
  });

  const dotEls = tour.images?.map((_, index) => {
    return (
      <li
        key={index}
        className={classNames(
          classes.dot,
          { [classes.active]: activeImageIndex === index }
        )}
        aria-label-hidden="true"
        role="button"
        aria-label={t('imageNavigation')!}
      />
    );
  });

  return (
    <main className={classes.tour}>
      <div className="container">
        <div className={classes.content}>
          <Breadcrumbs items={[
            { link: '/tours', value: 'tours' },
            { link: `/tours/${tour.id}`, title: tour.title },
          ]} />
          <div className={classes.head}>
            <h1 className="heading heding--1">
              {tour.title}
            </h1>
          </div>
          <Swiper 
            loop
            slidesPerView={1}
            modules={[Navigation]}
            onSlideChange={({ realIndex }) => setActiveImageIndex(realIndex)}
            className={classes.images}
            navigation={{
              nextEl: `.${classes.next}`,
              prevEl: `.${classes.prev}`,
            }}
          >
            {imageEls}
            <ul className={classes.dots}>
              {dotEls}
            </ul>
            <div className={classes.btnGroup}>
              <button className={classNames(classes.prev, "btn btn--rounded")}>
                <HiOutlineChevronLeft />
              </button>
              <button className={classNames(classes.next, "btn btn--rounded")}>
                <HiOutlineChevronRight />
              </button>
            </div>
          </Swiper>
          <div className={classes.priceContainer}>
            {tour.price && (
              <span className={classes.price}>
                {tour.price}
              </span>
            )}
            <div className={classes.actions}>
              <button className="btn btn--green btn--pill">
                {t('bookTour')}
              </button>
              <button className="btn btn--outline btn--pill">
                {t('askQuestion')}
              </button>
            </div>
          </div>
          {tour.description && (
            <p className={classNames('text text--dark', classes.description)}>
              {tour.description}
            </p>
          )}
          <button className={classNames(
            'btn btn--pill btn--fullWidth', 
            classes.ctaBtn
          )}>
            {t('bookTour')}
          </button>
          <div className={classes.recommendedTours}>
            <ToursSlider tours={[]} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default memo(SingleTour);