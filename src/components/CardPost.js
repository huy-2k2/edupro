import React, { useEffect, useRef, useState } from "react";
import useHover from "../hooks/useHover";
import useResize from "../hooks/useResize";
import { Link } from "react-router-dom";
export default function CardPost({ image }) {
  const [hover, ref] = useHover();
  const size = useResize(1280);
  const [height, setHeight] = useState(0);
  const refContent = useRef();
  useEffect(() => {
    setHeight(refContent.current.offsetHeight);
  }, [refContent]);
  return (
    <Link
      ref={ref}
      to="/post_detail"
      className="relative w-[330px] max-w-full h-[350px] overflow-hidden shadow-2xl rounded-[40px] cursor-pointer"
    >
      <img className="object-cover w-full h-full " src={image} alt="" />
      <div
        style={{
          transform:
            !hover && size ? `translateY(${height}px)` : "translateY(0)",
        }}
        className={`absolute bottom-0 left-0 w-full bg-white rounded-tl-[40px] p-8 pb-0 duration-300`}
      >
        <svg className="absolute right-0 flex items-end justify-end w-20 h-20 bottom-full">
          <path fill="#fff" d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z"></path>
        </svg>
        <div className="flex items-center justify-start gap-x-8">
          <img
            src="https://i.imgur.com/7D7I6dI.png"
            alt=""
            className="object-cover w-[50px] h-[50px] rounded-full"
          />
          <div className="flex flex-col gap-y-1">
            <div className="text-[#6a515e] capitalize font-semibold">
              Jessica Parker
            </div>
            <div className="text-sm font-medium text-gray-500 line-clamp-1">
              Chỉ viết code thôi không ?
            </div>
          </div>
        </div>
        <div className="pb-4" ref={refContent}>
          <div className="mt-3 text-gray-500">
            Là lập trình viên thì có nên chỉ viết code thôi không ?
          </div>
          <div className="flex items-center justify-between mt-2 text-gray-400">
            <div className="flex items-center gap-x-1">
              <span>123</span>
              <span className="text-gray-500">
                <i class="fa-solid fa-eye"></i>
              </span>
            </div>
            <div className="flex items-center gap-x-1">
              <span>16</span>
              <span className="text-pink-500">
                <i class="fa-solid fa-heart"></i>
              </span>
            </div>
            <div>1 giờ trước</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
