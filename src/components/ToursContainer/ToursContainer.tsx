import { IItem } from '@/interfaces/common.interface';
import { ITourType } from '@/interfaces/tour.interface';
import { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { SwiperSlide } from 'swiper/react';
import ImageCard from '../ImageCard/ImageCard';
import classes from './ToursContainer.module.scss';

interface ToursContainerProps {
  tours: IItem[];
  tourTypes?: ITourType[];
}

function ToursContainer(props: ToursContainerProps) {
  const { tours, tourTypes = [] } = props;
  const { t } = useTranslation();

  const tourTypeEls = tourTypes.map((type, index) => {
    return (
      <SwiperSlide 
        className={classes.tourType} 
        key={type.id ?? index}
      >
        {type.title}
      </SwiperSlide>
    );
  });
  
  const tourEls = tours.map((tour, index) => {
    return (
      <ImageCard item={tour} key={tour.id ?? index} />
    );
  });

  return (
    <section className={classes.tours}>
      <div className={classes.head}>
        
      </div>
    </section>
  );
}

export default memo(ToursContainer);