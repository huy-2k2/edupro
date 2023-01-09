import React from "react";
import AccordionBase from "./AccordionBase";
import Slider from "./Slider";
import CountAuto from "./CountAuto";
export default function Banner() {
  return (
    <div className="relative lg:bg-blue-300">
      <div className="absolute top-0 left-0 right-0 z-10 hidden h-10 bg-gray-500 bg-opacity-50 lg:block"></div>
      <div className="w-[1400px] mx-auto max-w-full px-5 py-2 flex gap-x-5 pt-6">
        <div className="w-[300px] flex-shrink-0 hidden lg:block">
          <AccordionBase
            data={[
              {
                title: "Mục đích của trang web?",
                content:
                  "In pariatur excepteur ut do aliquip qui mollit aliqua exercitation excepteur consequat reprehenderit nostrud laborum voluptate veniam non dolore dolore aliqua incididunt amet nisi minim cillum elit.",
              },
              {
                title: "Bạn có cần phải trả phí?",
                content:
                  "Dolor esse proident nisi minim nisi aute nulla sed proident magna id eiusmod consectetur laborum aliqua minim excepteur sunt anim anim esse aliquip et ea enim proident veniam veniam quis adipisicing nulla amet id commodo.",
              },
              {
                title: "Hướng dẫn sử dụng",
                content:
                  "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
              },
            ]}
          ></AccordionBase>
        </div>
        <div className="flex-grow overflow-hidden rounded-lg">
          <Slider
            images={[
              "images/banner/image1.jpg",
              "images/banner/image2.jpg",
              "images/banner/image3.jpg",
            ]}
          ></Slider>
        </div>
        <div className="flex-shrink-0 hidden xl:block">
          <div className="flex flex-col p-4 bg-white rounded-md gap-y-5">
            <img
              className="w-[200px] rounded-md"
              src="images/credential.png"
              alt=""
            />
            <button className="w-full p-3 font-semibold text-white uppercase rounded-md bg-primary">
              tải ứng dụng
            </button>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div
          className="lg:translate-y-1/2 w-[1400px] mx-auto max-w-full rounded-md py-2 sm:py-4 px-4 sm:px-8 flex justify-center gap-x-5 sm:gap-x-20 lg:gap-x-0 lg:justify-between items-center"
          style={{ backgroundImage: `url("images/banner/banner_bg.jpg")` }}
        >
          <div className="flex items-center justify-center gap-x-3">
            <img
              className="w-[50px] sm:w-auto object-cover"
              src="images/tradition.png"
              alt=""
            />
            <div className="flex flex-col text-[10px] text-white sm:text-lg">
              <div className="font-bold">16 năm</div>
              <div className="font-semibold">Giáo dục trực tuyến</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <img
              className="w-[50px] sm:w-auto object-cover"
              src="images/member.png"
              alt=""
            />
            <div className="flex flex-col text-[10px] text-white sm:text-lg">
              <div className="font-bold">
                <CountAuto max={6123354}></CountAuto>
              </div>
              <div className="font-semibold">thành viên</div>
            </div>
          </div>
          <div className="items-center justify-center hidden lg:flex gap-x-3">
            <img src="images/medal.png" alt="" />
            <div className="flex flex-col text-lg text-white">
              <div className="font-bold">Nền tảng học trực tuyến</div>
              <div className="font-semibold">số 1 Việt Nam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
