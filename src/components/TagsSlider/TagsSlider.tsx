import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './TagsSlider.module.scss';

interface TagsSliderProps {
  items: string[];
  onClickItem: (value: string) => void;
}

function TagsSlider({ items, onClickItem }: TagsSliderProps) {
  const tagEls = items.map((item, index) => {
    return (
      <SwiperSlide 
        className={classes.item} 
        onClick={() => onClickItem(item)}
      >
        {item}
      </SwiperSlide>
    );
  });

  return (
    <Swiper className={classes.slider}>
      {tagEls}
    </Swiper>
  );
}

export default memo(TagsSlider);