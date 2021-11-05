import React, { useContext, useEffect } from "react";
import axios from "axios";
import { myAxios } from "../api/axios";
import { RestaurantContext } from "../context/RestaurantContext";
import { useHistory } from "react-router";
// import {}

const RestaulantList = (props) => {
     //======================================================
     const { restaurantsArray, setRestaurantsArray, deleteRestaurant } =
          useContext(RestaurantContext);
     //======================================================
     let history = useHistory();
     //======================================================
     //======================================================
     useEffect(() => {
          // effect
          const getRestaurants = async () => {
               try {
                    // const reply = await axios.get("http://localhost:5000/api/v1/restaurants");
                    const reply = await myAxios.get("/restaurants");
                    console.log(reply.data.data.restaurants);
                    setRestaurantsArray(reply.data.data.restaurants);
               } catch (error) {}
          };
          // myAxios
          getRestaurants();

          return () => {
               // cleanup
          };
     }, []);
     //======================================================
     const handleDelete = async (_id) => {
          try {
               const reply = await myAxios.delete(`/restaurants/${_id}`);
               console.log(reply.data.data.deletReply.id);
               deleteRestaurant(reply.data.data.deletReply.id);
          } catch (error) {}
     };

     //======================================================
     return (
          <div className="restaurant-list">
               <h1>Restaurant List</h1>
               <table>
                    <thead>
                         <tr className="tr-1">
                              <th scope="col">ID</th>
                              <th scope="col">Resturant Name</th>
                              <th scope="col">Location</th>
                              <th scope="col">Price Range</th>
                              <th scope="col">Ratings</th>
                              <th scope="col">Edit</th>
                              <th scope="col">Delete</th>
                         </tr>
                    </thead>

                    <tbody>
                         {restaurantsArray?.map((e) => (
                              <tr className="tr-1" key={e.id}>
                                   <td>{e.id}</td>
                                   <td>
                                        <div
                                             className="restaurant-name"
                                             onClick={() => {
                                                  history.push(
                                                       `/restaurant/${e.id}`
                                                  );
                                             }}
                                        >
                                             {e.name}
                                        </div>
                                   </td>
                                   <td>{e.location}</td>
                                   <td>{"$".repeat(e.price_range)}</td>
                                   <td>ratings1</td>
                                   <td className="edit">
                                        <div
                                             onClick={() => {
                                                  history.push(
                                                       `/update/${e.id}`
                                                  );
                                             }}
                                        >
                                             edit <i class="far fa-edit"></i>
                                        </div>
                                   </td>
                                   <td
                                        className="delete"
                                        onClick={() => {
                                             handleDelete(e.id);
                                        }}
                                   >
                                        <div>
                                             delete{" "}
                                             <i class="far fa-trash-alt"></i>
                                        </div>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
};

export default RestaulantList;
