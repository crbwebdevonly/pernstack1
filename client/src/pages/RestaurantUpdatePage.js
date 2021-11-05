import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import UpdateRestaurant from "../components/UpdateRestaurant";

const RestaurantUpdatePage = () => {
     //======================================================
     // const location = useLocation();
     // console.log(location.pathname.split("/")[2]);
     // const [thisID, setThisID] = location.pathname.split("/")[2];
     const thisParams = useParams();
     console.log("params>>", thisParams);
     const [thisID, setThisID] = useState(thisParams.id);
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="update-page">
               <h1>Update page for ID {thisID}</h1>
               <UpdateRestaurant id={thisID} />
          </div>
     );
};

export default RestaurantUpdatePage;
