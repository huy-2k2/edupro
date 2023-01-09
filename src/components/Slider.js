import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import required modules
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
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
        {images.map((image) => (
          <SwiperSlide>
            <img className="object-cover w-full h-full" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
