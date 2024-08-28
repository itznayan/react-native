import React, { createContext, useState } from "react";

// Define the context
export const context = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);
  const addFav = (id) => {
    setFavMealIds([...favMealIds, id]);
  };

  const removeFav = (id) => {
    setFavMealIds((curFavIds) => curFavIds.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favMealIds,
    addFav: addFav,
    removeFav: removeFav,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default FavouriteContextProvider;
