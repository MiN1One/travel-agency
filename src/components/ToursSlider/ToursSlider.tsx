import { Swiper, SwiperSlide } from "swiper/react";
import { memo } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { FreeMode } from "swiper";
import { ITour } from "@/interfaces/tour.interface";

interface ToursSliderProps {
  tours: ITour[];
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
      spaceBetween={12}
      slidesPerView={1.1}
      centeredSlides={true}
      loop={true}
      modules={[FreeMode]}
      breakpoints={{
        551: {
          spaceBetween: 10,
          slidesPerView: 2.5,
        },
        769: {
          slidesPerView: 4,
          freeMode: true,
          spaceBetween: 20,
        },
        1401: {
          slidesPerView: 5.5,
        },
        1600: {
          slidesPerView: 5.85,
        },
      }}
    >
      {cardEls}
    </Swiper>
  );
}

export default memo(ToursSlider);
