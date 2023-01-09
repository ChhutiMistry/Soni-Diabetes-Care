import React, { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Flickity from "flickity";
import Data from "./Database/FAQs.json";
import "./FAQs.css";
import Slider from "./Slider";


const FAQs = () => {
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
          <>
               <Slider/>
               <p className="hfaq">
                    HOME / FAQS
               </p>
               <div className="hfaqback"></div>
               <h1 className="sdcfaqh1">
                    NEED A HAND ? WE'VE GOT YOU.
               </h1>
               <div className="container" ref = {elemRef}>
                    {Data.map(post => {
                         return (
                              <div key={ post.id } className="rofaqcardbox">
                                   <div className="card rofaqcard">
                                        <Link to={`/faqanswer/${post.id}/#withyouranswer`}>
                                             <img src={ post.image } className="responsive-img rofaqimg" alt={ post.alttext }/>
                                             <div className="card-body">
                                                  <h1 className="card-title rofaqhead">
                                                       { post.heading }
                                                  </h1>
                                                  <p className="card-text rofaqbody" dangerouslySetInnerHTML={{ __html: post.paragraph }}></p>
                                                  <i className="bi bi-arrow-right rofaqarr"></i>
                                             </div>
                                        </Link>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </>
     );
};

export default FAQs;