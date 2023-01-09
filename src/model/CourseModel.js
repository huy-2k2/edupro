import coursesData from "../data/coursesData";
import { getRatesByCourse } from "./RateModel";
function getCouseByCourseLine(courseLineId) {
  return coursesData.filter((course) => course.courseLine_id == courseLineId);
}

function getTopCourse(size = 10) {
  const newCourses = JSON.parse(JSON.stringify(coursesData));
  newCourses.sort(function (a, b) {
    return getRatesByCourse(b.id).length - getRatesByCourse(a.id).length;
  });
  return newCourses.slice(0, size);
}

function getCourseById(id) {
  return coursesData.filter((course) => course.id == id)[0];
}

function getAverageRate(id) {
  const rates = getRatesByCourse(id);
  const total = rates.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0);
  return Math.round((total / rates.length) * 100) / 100;
}

export { getCouseByCourseLine, getTopCourse, getCourseById, getAverageRate };
