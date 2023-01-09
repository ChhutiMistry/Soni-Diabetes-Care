import React, { useRef, useEffect } from "react";
import Flickity from "flickity";
import Data from "./Database/Slider.json";
import "./Slider.css";

const Slider = () => {
     let elemRef = useRef();
     let flkty = useRef();

     useEffect(() => {
          flkty.current = new Flickity(elemRef.current, {
               autoPlay: true,
               wrapAround: true,
               pageDots: false,
               selectedAttraction: 0.01,
               friction: 0.15,
               adaptiveHeight: true,
               initialIndex: 0,
               freeScroll: true,
               prevNextButtons: false,
               accessibility: true
          });
     }, []);

     return (
          <>
               <div className="slidepos" ref = {elemRef}>
                    {Data.map(post => {
                         return (
                              <div key={ post.id }>
                                   <img src={ post.image } alt={ post.imagealt } className="asimage"/>
                              </div>
                         );
                    })}
               </div>
          </>
     )
}

export default Slider;