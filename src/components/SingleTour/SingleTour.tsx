import { IItem } from '@/interfaces/common.interface';
import { memo, useState } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import classes from './SingleTour.module.scss';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import Swiper, { Navigation } from 'swiper';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ToursSlider from '../ToursSlider/ToursSlider';

interface SingleTourProps {
  tour: IItem;
  recommendedTours?: IItem[];
}

function SingleTour({ tour, recommendedTours }: SingleTourProps) {
  const { t } = useTranslation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [swiper, setSwiper] = useState<Swiper>();

  const imageEls = tour.images?.map((image, index) => {
    return (
      <SwiperSlide key={index} className={classes.image}>
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
        tabIndex={0}
        onClick={() => swiper?.slideTo(index + 1)}
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
        <Breadcrumbs items={[
          { link: '/tours', value: 'tours' },
          { link: `/tours/${tour.id}`, title: tour.title },
        ]} />
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.head}>
              <h1 className="heading heading--1 text--dark">
                {tour.title}
              </h1>
            </div>
            <SwiperContainer 
              loop
              onInit={setSwiper}
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
                <button className={classNames(classes.prev, "btn btn--round")}>
                  <HiOutlineChevronLeft />
                </button>
                <button className={classNames(classes.next, "btn btn--round")}>
                  <HiOutlineChevronRight />
                </button>
              </div>
            </SwiperContainer>
            <div className={classes.priceContainer}>
              {tour.price && (
                <span className={classes.price}>
                  {tour.price}
                </span>
              )}
              <div className={classes.actions}>
                <button className="btn btn--green btn--pill btn--light">
                  {t('bookTour')}
                </button>
                <button className="btn btn--outline btn--pill btn--dark">
                  {t('askQuestion')}
                </button>
              </div>
            </div>
            {tour.description && (
              <div className={classes.description}>
                <p 
                  className="text text--dark"
                  dangerouslySetInnerHTML={{ __html: tour.description }}
                />
              </div>
            )}
            <button className={classNames(
              'btn btn--pill btn--green btn--fullWidth', 
              classes.ctaBtn
            )}>
              {t('bookTour')}
            </button>
          </div>
        </div>
      </div>
      <div className={classes.recommendedTours}>
        <ToursSlider tours={recommendedTours || []} />
      </div>
    </main>
  );
}

export default memo(SingleTour);