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
    const sliderWrapperEl = sliderWrapperRef.current;
    const slides = images.length % 2 === 0 
      ? [images.slice(-1).pop(), ...images] 
      : images;
    const slideElsTemplates = slides.map((image, index) => {
      return `
        <figure 
          class="${classNames(
            classes.image, 
            { [classes.center]: index === middleSlideIndex }
          )}"
        > 
          <img
            src=${image}
            alt="${t('galleryImage')}"
            width="100%"
            height="100%"
          >
        </figure>
      `
    });
    const tempEl = document.createElement('div');
    tempEl.innerHTML = slideElsTemplates.join('');
    const slidesEls = Array.from(
      tempEl.querySelectorAll(`.${classes.image}`)
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
    sliderWrapperEl.innerHTML = tempEl.innerHTML;
  }, [middleSlideIndex, images]);

  useEffect(() => {
    const debounceSetupGallery = debounce(setupGallery, 500);
    setupGallery();
    window.addEventListener('resize', debounceSetupGallery);
    return () => {
      window.removeEventListener('rezise', debounceSetupGallery)
    }
  }, [setupGallery]);

  const itemEls = useMemo(() => {
    const slides = images.length % 2 === 0 
      ? [images.slice(-1).pop(), ...images] 
      : images;

    return slides.map((image, index) => {
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
  }, []);  

  return (
    <div className={classes.slider}>
      <div className={classes.content} ref={sliderWrapperRef}>
        {itemEls}
      </div>
    </div>
  );
}

export default memo(DSlider);