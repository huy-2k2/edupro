import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { getCouseByCourseLine } from "../model/CourseModel";
import { getCourseLineById } from "../model/CourseLineModel";
import { getListCentralByCourseLineId } from "../model/CentralModel";
import HeaderCourse from "../components/HeaderCourse";
import Card from "../components/Card";
export default function CourseLine() {
  const { course_line_id } = useParams();
  const [central, setCentral] = useState(0);
  const courses = getCouseByCourseLine(course_line_id);
  const courseLine = getCourseLineById(course_line_id);
  const centrals = getListCentralByCourseLineId(course_line_id);
  useEffect(() => {
    if (central != 0 && !centrals.filter((item) => item.id == central).length)
      setCentral(0);
  });
  return (
    <AppLayout>
      <div className="mt-10 w-[1400px] mx-auto max-w-full px-5 py-2">
        <HeaderCourse text={courseLine.name}></HeaderCourse>
        {centrals.length > 1 && (
          <div className="flex flex-wrap items-center justify-start px-5 py-3 mt-2 mb-5 bg-gray-200 rounded-xl gap-x-3 gap-y-4">
            <div
              onClick={() => setCentral(0)}
              className={`px-2 cursor-pointer  py-1 font-semibold  rounded-md ${
                central == 0
                  ? "text-white bg-primary"
                  : "text-gray-600 bg-white"
              }`}
            >
              chọn tất cả
            </div>
            {centrals.map((item) => (
              <div
                onClick={() => setCentral(item.id)}
                className={`px-2 cursor-pointer  py-1 font-semibold  rounded-md ${
                  central == item.id
                    ? "text-white bg-primary"
                    : "text-gray-600 bg-white"
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
          {courses
            .filter((course) =>
              central == 0 ? true : course.central_id == central
            )
            .map((course) => (
              <div>
                <Card course={course}></Card>
              </div>
            ))}
        </div>
      </div>
    </AppLayout>
  );
}
