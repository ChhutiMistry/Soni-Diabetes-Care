import React, { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Flickity from "flickity";
import Data from "./Database/Blogs.json";
import "./RotateBlogs.css";

function RotateBlogs() {
     let elemRef = useRef();
     let flkty = useRef();

     useEffect(() => {
          flkty.current = new Flickity(elemRef.current, {
               autoPlay: false,
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
                         <div key={ post.id } className="roblcardbox">
                              <div className="card roblcard">
                                   <Link to={ post.link }>
                                        <img src={ post.image } className="responsive-img roblimg" alt="Slide"/>
                                        <div className="card-body">
                                             <h1 className="card-title roblhead">
                                                  { post.heading }
                                             </h1>
                                             <p className="card-text roblbody" dangerouslySetInnerHTML={{ __html: post.paragraph }}></p>
                                             <i className="bi bi-arrow-right roblarr"></i>
                                        </div>
                                   </Link>
                              </div>
                         </div>
                    );
               })}
          </div>
     );
}

export default RotateBlogs;