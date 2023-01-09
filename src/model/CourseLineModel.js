import courseLinesData from "../data/courseLinesData";

function getCourseLineById(id) {
  return courseLinesData.filter((courseLine) => courseLine.id == id)[0];
}

export { getCourseLineById };
