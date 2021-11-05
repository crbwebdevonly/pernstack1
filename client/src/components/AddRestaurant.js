import React, { useContext, useState } from "react";
import { myAxios } from "../api/axios";
import { RestaurantContext } from "../context/RestaurantContext";
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
const AddRestaurant = () => {
     //======================================================
     const { addRestaurant } = useContext(RestaurantContext);
     //======================================================
     const [restaurant, setRestaurant] = useState({
          name: "",
          location: "",
          // ratings: 0,
          price_range: "Price Range",
     });
     //======================================================
     const handleChange = (e) => {
          console.log(e.target.name, e.target.value);
          setRestaurant((p) => ({ ...p, [e.target.name]: e.target.value }));
     };
     //======================================================
     // console.log(addRestaurant);
     //======================================================
     const handleSubmit = async (e) => {
          e.preventDefault();

          try {
               const reply = await myAxios.post("/restaurants", restaurant);
               // console.log(reply.data.data.createdrestaurant);
               addRestaurant(reply.data.data.createdrestaurant);
          } catch (error) {}
     };
     //======================================================
     //======================================================
     //======================================================
     //======================================================
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="add-restaurant">
               <h1>Add Restaurant Form</h1>
               <form action="" className="form-1">
                    <div className="item">
                         <label htmlFor="">name</label>
                         <input
                              type="text"
                              placeholder="name"
                              name="name"
                              onChange={handleChange}
                         />
                    </div>
                    <div className="item">
                         <label htmlFor="">location</label>
                         <input
                              type="text"
                              placeholder="location"
                              name="location"
                              onChange={handleChange}
                         />
                    </div>
                    <div className="item">
                         <select
                              id=""
                              name="price_range"
                              onChange={handleChange}
                              value={restaurant.price_range}
                         >
                              <option disabled>Price Range</option>
                              <option value="1">$</option>
                              <option value="2">$$</option>
                              <option value="3">$$$</option>
                              <option value="4">$$$$</option>
                              <option value="5">$$$$$</option>
                         </select>
                    </div>
                    <button onClick={handleSubmit}>Add</button>
               </form>
          </div>
     );
};

export default AddRestaurant;
