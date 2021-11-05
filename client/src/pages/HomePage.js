import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import RestaulantList from "../components/RestaulantList";

const HomePage = () => {
     return (
          <div>
               <Header />
               <AddRestaurant />
               <RestaulantList />
          </div>
     );
};

export default HomePage;
