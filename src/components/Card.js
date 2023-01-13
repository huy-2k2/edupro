import React from "react";
import { getCentralById } from "../model/CentralModel";
import { useFavorite } from "../contexts/FavoriteContext";
import { Link } from "react-router-dom";

export default function Card({ course }) {
  const central = getCentralById(course.central_id);
  const [favorite, setFavorite] = useFavorite();
  function hanleClickFavorite() {
    if (favorite.filter((item) => item.id == course.id).length) {
      const newFavorite = favorite.filter((item) => item.id != course.id);
      setFavorite(newFavorite);
    } else {
      const newFavorite = [...favorite, course];
      setFavorite(newFavorite);
    }
  }
  return (
    <div className="w-full select-none">
      <div class="w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="h-[300px]">
          <img
            class="rounded-t-lg h-full object-cover w-full"
            src={"/" + course.image}
            alt=""
          />
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
              {course.name}
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
            <p>
              Giáo viên:{" "}
              <span className="font-semibold capitalize text-dark-primary">
                {course.teacher}
              </span>
            </p>
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
            <p>
              Trung tâm:{" "}
              <a
                href={central.link}
                target="_blank"
                rel="noreferrer"
                className="font-semibold uppercase text-dark-primary"
              >
                {central.name}
              </a>
            </p>
          </p>
          <div className="flex items-center justify-between">
            <div onClick={hanleClickFavorite}>
              {favorite.filter((item) => item.id == course.id).length ? (
                <div className="px-4 py-2 text-white text-center cursor-pointer bg-gray-600 rounded-md min-w-[100px]">
                  bỏ thích
                </div>
              ) : (
                <div className="px-4 py-2 text-center text-white cursor-pointer bg-dark-primary rounded-md min-w-[100px]">
                  yêu thích
                </div>
              )}
            </div>
            <Link
              to={`/course/${course.id}`}
              className="text-center px-4 py-2 text-white rounded-md bg-dark-primary min-w-[100px]"
            >
              chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
