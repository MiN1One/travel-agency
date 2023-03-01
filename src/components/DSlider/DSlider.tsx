import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import classes from './DSlider.module.scss';
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { debounce } from "@/utils/throttle.utils";

interface DSliderProps {
  images: string[];
  width?: string;
  height?: string;
}

const SLIDE_SCALE_RATIO = .2;
const IMAGE_ASPECT_RATIO = .56;

function DSlider({ images }: DSliderProps) {
  const { t } = useTranslation();
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  const middleSlideIndex =  Math.floor(images.length / 2);

  const setupGallery = useCallback(() => {
    if (!sliderWrapperRef.current) return;
    const sliderWrapperEl = sliderWrapperRef.current
    const slidesEls = Array.from(
      sliderWrapperEl.querySelectorAll(`.${classes.image}`)
    ) as HTMLElement[];
    const middleSlide = sliderWrapperEl.querySelector(`.${classes.center}`)!;
    const middleSlideOffset = middleSlide.getBoundingClientRect().left;
    let baseWidth = middleSlideOffset / middleSlideIndex;
    let baseHeight = IMAGE_ASPECT_RATIO * baseWidth;
    slidesEls.forEach((slide, index, self) => {
      const rightSlide = index > middleSlideIndex;
      if (rightSlide) {
        baseWidth -= (baseWidth * SLIDE_SCALE_RATIO);
        baseHeight -= (baseHeight * SLIDE_SCALE_RATIO);
      } else {
        baseWidth += (baseWidth * SLIDE_SCALE_RATIO);
        baseHeight += (baseHeight * SLIDE_SCALE_RATIO);
      }
      slide.style.width = `${baseWidth}px`;
      slide.style.height = `${baseHeight}px`;
      const rightSlideCurrIndex = self.length - middleSlideIndex - (index - middleSlideIndex) - 1;
      if (index !== middleSlideIndex) {
        slide.style[rightSlide ? 'right' : 'left'] = rightSlide 
          ? `${(middleSlideOffset / middleSlideIndex) * rightSlideCurrIndex}px`
          : `${(middleSlideOffset / middleSlideIndex) * index}px`;
      }
      if (rightSlide) {
        slide.style.zIndex = rightSlideCurrIndex.toString();
      }
    });
  }, [middleSlideIndex, images]);

  useEffect(() => {
    setupGallery();
  }, [setupGallery]);

  useEffect(() => {
    const debounceSetupGallery = debounce(setupGallery, 500);
    window.addEventListener('resize', debounceSetupGallery);
    return () => {
      window.removeEventListener('rezise', debounceSetupGallery)
    }
  }, [setupGallery]);

  const itemEls = useMemo(() => {
    return images.map((image, index) => {
      return (
        <figure 
          className={classNames(
            classes.image, 
            { [classes.center]: index === middleSlideIndex }
          )} 
          key={index}
        > 
          <img
            src={image}
            alt={t('galleryImage')!}
            width="100%"
            height="100%"
          />
        </figure>
      );
    });
  }, [images]);  

  return (
    <div className={classes.slider} ref={sliderWrapperRef}>
      <div className={classes.content}>
        {itemEls}
      </div>
    </div>
  );
}

export default memo(DSlider);