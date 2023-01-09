import React from "react";
import { getCourseById, getAverageRate } from "../model/CourseModel";
import { getCentralById } from "../model/CentralModel";
import { getRatesByCourse } from "../model/RateModel";
function DetailText({ title, content, link, small }) {
  return (
    <div className="text-gray-600">
      <span className="text-lg font-semibold">{title}: </span>
      <a
        className={`${
          small ? "text-base font-medium" : "text-lg font-semibold"
        }  capitalize ${link ? "text-primary" : "pointer-events-none"}`}
        target="_blank"
        rel="noreferrer"
        href={link || "#"}
      >
        {content}
      </a>
    </div>
  );
}

export default function CardDetail({ courseId }) {
  const course = getCourseById(courseId);
  const rates = getRatesByCourse(courseId);
  return (
    <div className="flex flex-col items-start justify-start px-3 py-2 bg-white sm:py-4 sm:px-6 lg:flex-row gap-y-5 gap-x-5 shadow-menu_item rounded-2xl">
      <div className="h-full flex-shrink-0 w-full lg:w-[400px] max-w-full rounded-md overflow-hidden shadow-md">
        <img
          className="object-cover w-full h-full"
          src={"/" + course.image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-start flex-grow gap-y-2 lg:gap-y-3">
        <DetailText
          title="Khóa học"
          content={course.name}
          link={course.link}
        ></DetailText>
        <DetailText
          title="Trung tâm"
          content={getCentralById(course.central_id).name}
          link={getCentralById(course.central_id).link}
        ></DetailText>
        <DetailText title="Giáo viên" content={course.teacher}></DetailText>
        <DetailText
          title="Mô tả"
          content={course.description}
          small
        ></DetailText>
        <DetailText
          title="Đánh giá"
          content={
            getAverageRate(courseId) + " điểm / " + rates.length + " đánh giá"
          }
        ></DetailText>
      </div>
    </div>
  );
}
