import React, { useRef, useEffect } from "react";
import Flickity from "flickity";
import Data from "./Database/Reviews.json";
import "./RotateReviews.css";

function RotateReviews() {
     let elemRef = useRef();
     let flkty = useRef();

     useEffect(() => {
          flkty.current = new Flickity(elemRef.current, {
               autoPlay: false,
               wrapAround: true,
               pageDots: false,
               selectedAttraction: 0.025,
               friction: 0.4,
               adaptiveHeight: true,
               initialIndex: 0,
               freeScroll: true,
               contain: true,
               prevNextButtons: true,
               accessibility: true
          });
     }, []);

     return (
          <div className="container" ref = {elemRef}>
               {Data.map(post => {
                    return (
                         <div key={ post.id } className="rorecardbox">
                              <div className="card rorecard">
                                   <img src={ post.image } className="responsive-img roreimg" alt="Slide"/>
                                   <div className="card-body">
                                        <h1 className="card-title rorehead">
                                             { post.heading }
                                        </h1>
                                        <p className="card-text rorebody" dangerouslySetInnerHTML={{ __html: post.paragraph }}></p>
                                   </div>
                              </div>
                         </div>
                    );
               })}
          </div>
     );
}

export default RotateReviews;