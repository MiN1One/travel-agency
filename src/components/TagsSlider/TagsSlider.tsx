import classNames from 'classnames';
import { memo } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import classes from './TagsSlider.module.scss';

interface TagsSliderProps extends SwiperProps {
  items: string[];
  activeItem?: string;
  onClickItem: (value: string) => void;
}

function TagsSlider(props: TagsSliderProps) {
  const { items, onClickItem, activeItem, ...rest } = props;

  const tagEls = items.map((item, index) => {
    return (
      <SwiperSlide 
        tabIndex={0}
        key={index}
        className={classNames(
          classes.item,
          { [classes.active]: item === activeItem }
        )} 
        onClick={() => onClickItem(item)}
      >
        {item}
      </SwiperSlide>
    );
  });

  return (
    <div className={classes.sliderWrapper}>
      <Swiper 
        {...rest}
        className={classes.slider}
        modules={[Navigation]}
        slidesPerView={2}
        breakpoints={{
          501: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 4,
          },
          1025: {
            slidesPerView: 5
          }
        }}
        navigation={{
          prevEl: `.${classes.prev}`,
          nextEl: `.${classes.next}`,
        }}
      >
        {tagEls}
      </Swiper>
      <button className={classNames(classes.btnControl, classes.prev)}>
        <HiOutlineChevronLeft />
      </button>
      <button className={classNames(classes.btnControl, classes.next)}>
        <HiOutlineChevronRight />
      </button>
    </div>
  );
}

export default memo(TagsSlider);