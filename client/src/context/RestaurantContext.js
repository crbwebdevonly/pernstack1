import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
     const [restaurantsArray, setRestaurantsArray] = useState([]);
     const [selectedRestaurant, setSelectedRestaurant] = useState({});
     //======================================================
     //======================================================
     const addRestaurant = (_restaurant) => {
          setRestaurantsArray([...restaurantsArray, _restaurant]);
     };
     //======================================================
     const deleteRestaurant = (_id) => {
          setRestaurantsArray(restaurantsArray.filter((e) => e.id !== _id));
     };
     //======================================================
     const updateRestaurant = (_restaurant) => {
          let filter1 = restaurantsArray.filter((e) => e.id !== _restaurant.id);
          setRestaurantsArray([...filter1, _restaurant]);
     };
     //======================================================
     return (
          <RestaurantContext.Provider
               value={{
                    restaurantsArray,
                    setRestaurantsArray,
                    addRestaurant,
                    deleteRestaurant,
                    updateRestaurant,
                    selectedRestaurant,
                    setSelectedRestaurant,
               }}
          >
               {props.children}
          </RestaurantContext.Provider>
     );
};
