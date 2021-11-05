import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { myAxios } from "../api/axios";
import { RestaurantContext } from "../context/RestaurantContext";
//======================================================

const UpdateRestaurant = ({ id }) => {
     //======================================================
     const history = useHistory();
     //======================================================
     useEffect(() => {
          // effect
          const getOldRestaurant = async () => {
               try {
                    const reply = await myAxios.get(`/restaurants/${id}`);
                    // console.log(reply.data.data.restaurant);
                    setOldRestaurant(reply.data.data.restaurant);
                    setRestaurant(reply.data.data.restaurant);
               } catch (error) {}
          };
          getOldRestaurant();
          return () => {
               // cleanup
          };
     }, [id]);
     //======================================================
     useEffect(() => {
          // effect
          // setRestaurant(oldRestaurant);
          return () => {
               // cleanup
          };
     }, []);
     //======================================================
     const { updateRestaurant } = useContext(RestaurantContext);
     //======================================================
     const [restaurant, setRestaurant] = useState({
          name: "",
          location: "",
          // ratings: 0,
          price_range: "Price Range",
     });

     const [oldRestaurant, setOldRestaurant] = useState({
          name: "oldname",
          location: "oldlocation",
          // ratings: 0,
          price_range: "old Price Range",
     });
     //======================================================
     const handleChange = (e) => {
          // console.log(e.target.name, e.target.value);

          setRestaurant((p) => ({ ...p, [e.target.name]: e.target.value }));
          // e.target.value = restaurant.name;
     };
     //======================================================
     // console.log(restaurant);
     //======================================================
     const handleUpdate = async (e) => {
          e.preventDefault();
          // console.log(restaurant);

          try {
               const reply = await myAxios.put(
                    `/restaurants/${id}`,
                    restaurant
               );
               history.push("/");
               // console.log(reply.data.data.updateItem);
               // addRestaurant(reply.data.data.createdrestaurant);
               // updateRestaurant(reply.data.data.updateItem)
          } catch (error) {
               history.push("/");
          }
     };
     //======================================================
     //======================================================
     //======================================================
     return (
          <div>
               <div className="add-restaurant">
                    <h1>Update Restaurant Form</h1>
                    <form action="" className="form-2">
                         <div className="item">
                              <div className="old">{oldRestaurant?.name}</div>
                              <label htmlFor="">name</label>
                              <input
                                   type="text"
                                   placeholder="name"
                                   value={restaurant.name}
                                   name="name"
                                   onChange={handleChange}
                              />
                         </div>
                         <div className="item">
                              <div className="old">
                                   {oldRestaurant?.location}
                              </div>
                              <label htmlFor="">location</label>
                              <input
                                   type="text"
                                   placeholder="location"
                                   value={restaurant.location}
                                   name="location"
                                   onChange={handleChange}
                              />
                         </div>
                         <div className="item">
                              <div className="old">
                                   {oldRestaurant?.price_range}
                              </div>
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
                         <button onClick={handleUpdate}>Update</button>
                    </form>
               </div>
          </div>
     );
};

export default UpdateRestaurant;
