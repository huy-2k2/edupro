import React from "react";

export default function HeaderCourse({ text }) {
  return (
    <div className="relative text-[#444] text-[18px] sm:text-[24px]">
      <span className="ml-5 font-bold">{text}</span>
      <span className="absolute top-0 left-0 w-1 h-full bg-primary"></span>
    </div>
  );
}
