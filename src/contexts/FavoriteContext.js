import { createContext, useContext, useState } from "react";
import coursesData from "../data/coursesData";
const FavoriteContext = createContext();

function useFavorite() {
  const context = useContext(FavoriteContext);
  return context;
}

function FavoriteProvider({ children, ...props }) {
  const [favorite, setFavorite] = useState(coursesData.slice(0, 2));
  return (
    <FavoriteContext.Provider value={[favorite, setFavorite]} {...props}>
      {children}
    </FavoriteContext.Provider>
  );
}

export { useFavorite, FavoriteProvider };
