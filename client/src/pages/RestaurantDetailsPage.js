import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { myAxios } from "../api/axios";
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";
import Stars from "../components/Stars";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantDetailsPage = () => {
     //======================================================
     const thisParams = useParams();
     const { selectedRestaurant, setSelectedRestaurant } =
          useContext(RestaurantContext);

     //======================================================
     const [id, setID] = useState(thisParams.id);
     //======================================================
     const [reviews, setReviews] = useState([]);
     //======================================================
     //======================================================
     //======================================================
     useEffect(() => {
          // console.log("eee");
          const getRestaurant = async () => {
               // effect
               // console.log("eeef");
               try {
                    const reply = await myAxios.get(`/restaurants/${id}`);
                    console.log(reply.data.data);
                    setSelectedRestaurant(reply.data.data.restaurant);
                    setReviews(reply.data.data.reviews);
               } catch (error) {}
          };
          getRestaurant();
          return () => {
               // cleanup
          };
     }, [id]);
     //======================================================

     //======================================================
     // useEffect(() => {
     //      // effect
     //      const getReviews = async () => {
     //           try {
     //                const reply = await myAxios.get(
     //                     `/reviews/${selectedRestaurant.id}`
     //                );
     //                // console.log(reply.data.data.reviews);
     //                setReviews(reply.data.data.reviews);
     //           } catch (error) {}
     //      };
     //      getReviews();
     //      return () => {
     //           // cleanup
     //      };
     // }, [selectedRestaurant]);
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="details-page">
               <h1>
                    Details for ID = {id}
               </h1>
               <h4>selecte Restaurant name is {selectedRestaurant?.name}</h4>
               <div className="reviews-wrap">
                    {reviews?.map((e) => (
                         // <h1>card</h1>
                         <ReviewCard review={e} key={e.id} />
                    ))}
               </div>
               <AddReview setReviews={setReviews}/>
          </div>
     );
};

export default RestaurantDetailsPage;
