import React, { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import HeaderCourse from "../components/HeaderCourse";
import AppLayout from "../layouts/AppLayout";
import { useFavorite } from "../contexts/FavoriteContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTopCourse } from "../model/CourseModel";
import { SIZE_TOP_COURSE } from "../config";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function HomePage() {
  function getSize() {
    return Math.floor(window.innerWidth / 320);
  }
  const [size, setSize] = useState(getSize);
  const [favorite] = useFavorite();
  useEffect(() => {
    function haneleResize() {
      setSize(getSize());
    }
    window.addEventListener("resize", haneleResize);
    return () => window.removeEventListener("resize", haneleResize);
  }, []);
  return (
    <div>
      <AppLayout>
        <Banner></Banner>
        <div className="px-5 pb-5">
          <div className="mt-10 lg:mt-20 w-[1400px] max-w-full mx-auto">
            <div>
              {!!favorite.length && (
                <div>
                  <HeaderCourse text="Khóa học yêu thích"></HeaderCourse>
                  <div className="flex mt-5">
                    <Swiper
                      slidesPerView={size}
                      spaceBetween={0}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                      {favorite.map((course) => (
                        <SwiperSlide>
                          <div className="mr-5">
                            <Card course={course}></Card>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              )}
              <div className="mt-10">
                <HeaderCourse text="Khóa học thịnh hành"></HeaderCourse>
                <div className="flex mt-5">
                  <Swiper
                    slidesPerView={size}
                    spaceBetween={0}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {getTopCourse(SIZE_TOP_COURSE).map((course) => (
                      <SwiperSlide>
                        <div className="mr-5">
                          <Card course={course}></Card>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}
