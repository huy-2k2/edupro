import React from "react";
import { getCourseById, getAverageRate } from "../model/CourseModel";
import { getCentralById } from "../model/CentralModel";
import { getRatesByCourse } from "../model/RateModel";
import { useFavorite } from "../contexts/FavoriteContext";
function DetailText({ title, content, link, small }) {
  return (
    <div className="text-gray-600">
      <span className="text-lg font-semibold">{title}: </span>
      <a
        className={`${
          small ? "text-base font-medium" : "text-lg font-semibold"
        }  capitalize ${link ? "text-dark-primary" : "pointer-events-none"}`}
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
  const [favorite, setFavorite] = useFavorite();
  function hanleClickFavorite() {
    if (favorite.filter((item) => item.id == courseId).length) {
      const newFavorite = favorite.filter((item) => item.id != courseId);
      setFavorite(newFavorite);
    } else {
      const newFavorite = [...favorite, course];
      setFavorite(newFavorite);
    }
  }
  return (
    <div className="flex flex-col items-start justify-start px-3 py-2 bg-white sm:py-4 sm:px-6 lg:flex-row gap-y-5 gap-x-5 shadow-menu_item rounded-2xl">
      <div>
        <div className="h-full flex-shrink-0 w-full lg:w-[400px] max-w-full rounded-md overflow-hidden shadow-md">
          <img
            className="object-cover w-full h-full"
            src={"/" + course.image}
            alt=""
          />
        </div>
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
        <button
          onClick={hanleClickFavorite}
          className={`${
            favorite.filter((item) => item.id == courseId).length
              ? "bg-gray-600"
              : "bg-dark-primary "
          } w-full px-5 py-2 mt-3 ml-auto rounded-md sm:w-auto text-white`}
        >
          {favorite.filter((item) => item.id == courseId).length
            ? "Bỏ thích"
            : "Yêu thích"}
        </button>
      </div>
    </div>
  );
}
