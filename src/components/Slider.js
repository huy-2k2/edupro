import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

export default function Slider({ images }) {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        navigation
        autoplay={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {images.map((image) => (
          <SwiperSlide>
            <img className="object-cover w-full h-full" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
