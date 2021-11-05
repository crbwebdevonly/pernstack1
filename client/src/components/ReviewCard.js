import React from "react";
import Stars from "./Stars";

const ReviewCard = ({ review }) => {
     return (
          <div className="review-card">
               <h4>review card</h4>
               <div className="author">
                    {review.name} <Stars rating={review.rating} />
               </div>

               <hr />
               <div className="review">{review.review}</div>
          </div>
     );
};

export default ReviewCard;
