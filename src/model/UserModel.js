import usersData from "../data/usersData";

function getUserById(id) {
  return usersData.filter((item) => item.id == id)[0];
}

export { getUserById };
