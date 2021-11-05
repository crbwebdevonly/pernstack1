import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
// import { useHistory } from "react-router";
import { myAxios } from "../api/axios";
import { RestaurantContext } from "../context/RestaurantContext";
//======================================================
// import { useHistory, useLocation } from "react-router-dom";
//======================================================
//======================================================

//======================================================

//======================================================
//======================================================
const AddReview = ({ setReviews }) => {
     //======================================================
     const { addRestaurant, selectedRestaurant } =
          useContext(RestaurantContext);
     //======================================================

     //======================================================
     let history = useHistory();

     const location = useLocation();

     // useHistory()
     //======================================================
     const [review, setReview] = useState({
          name: "",
          reviewText: "",
          ratings: 1,
          // price_range: "Price Range",
     });
     //======================================================
     const handleChange = (e) => {
          // console.log(e.target.name, e.target.value);
          setReview((p) => ({ ...p, [e.target.name]: e.target.value }));
     };
     //======================================================
     // console.log(location);
     //======================================================
     const handleSubmit = async (e) => {
          e.preventDefault();
          // console.log(review);

          try {
               const reply = await myAxios.post(
                    `reviews/${selectedRestaurant.id}`,
                    review
               );
               // history.push("/");
               // history.push(location.pathname);
               window.location = location.pathname;
               // console.log(reply.data.data.newReview);
               // setReviews((p) => [...p, reply.data.data.newReview]);
               // addRestaurant(reply.data.data.createdrestaurant);
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
               <h1>Add Review Form</h1>
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
                         <label htmlFor="">Review</label>
                         <input
                              type="text"
                              placeholder="reviewText"
                              name="reviewText"
                              onChange={handleChange}
                         />
                    </div>
                    <div className="item">
                         <select
                              id=""
                              name="ratings"
                              onChange={handleChange}
                              value={review.ratings}
                         >
                              <option disabled>Ratings</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                         </select>
                    </div>
                    <button onClick={handleSubmit}>Add</button>
               </form>
          </div>
     );
};

export default AddReview;
