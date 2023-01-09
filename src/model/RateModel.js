import ratesData from "../data/ratesData";

function getRatesByCourse(course_id) {
  return ratesData.filter((rate) => rate.course_id == course_id);
}

export { getRatesByCourse };
