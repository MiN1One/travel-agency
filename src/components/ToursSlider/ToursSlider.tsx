import { Swiper, SwiperSlide } from "swiper/react";
import { memo } from 'react';
import { IItem } from "@/interfaces/common.interface";
import ImageCard from "../ImageCard/ImageCard";
import { FreeMode } from "swiper";

interface ToursSliderProps {
  tours: IItem[];
}

function ToursSlider({ tours }: ToursSliderProps) {

  const cardEls = tours.map((tour, index) => {
    return (
      <SwiperSlide key={tour.id ?? index}>
        <ImageCard item={tour} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      freeMode
      loop
      spaceBetween={20}
      modules={[FreeMode]}
      slidesPerView={5.5}
      breakpoints={{
        1600: {
          slidesPerView: 6.5
        }
      }}
    >
      {cardEls}
    </Swiper>
  );
}

export default memo(ToursSlider);