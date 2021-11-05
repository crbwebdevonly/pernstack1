import React from "react";

const Stars = ({ rating }) => {
     //======================================================
     /*
      <i class="fas fa-star full"></i>
               <i class="far fa-star empty"></i>
               <i class="fas fa-star-half-alt"></i>
     */
     //======================================================
     let stars = [];

     for (let i = 1; i < 6; i++) {
          // console.log("ll");
          if (i <= rating) {
               stars.push(<i className="fas fa-star full" key={i}></i>);
          } else if (i === Math.ceil(rating)) {
               if (rating === Math.ceil(rating)) {
                    stars.push(<i className="fas fa-star full" key={i}></i>);
               } else if (rating < Math.ceil(rating)) {
                    stars.push(
                         <i className="fas fa-star-half-alt" key={i}></i>
                    );
               }
          }
          // else if (i === Math.ceil(rating)) {
          //      stars.push(<i class="fas fa-star full"></i>);
          // }
          else {
               stars.push(<i className="far fa-star empty" key={i}></i>);
          }
          // console.log(stars);
     }
     //======================================================
     //======================================================
     //======================================================
     return <div className="stars">{stars}</div>;
};

export default Stars;
