import centralsData from "../data/centralsData";
import { getCouseByCourseLine } from "./CourseModel";
function getCentralById(id) {
  return centralsData.filter((central) => central.id == id)[0];
}

function getListCentralByCourseLineId(course_line_id) {
  const courses = getCouseByCourseLine(course_line_id);
  let centrals = [];
  courses.forEach((course) => {
    if (!centrals.filter((item) => item.id == course.central_id).length)
      centrals = [...centrals, getCentralById(course.central_id)];
  });
  return centrals;
}

export { getCentralById, getListCentralByCourseLineId };
