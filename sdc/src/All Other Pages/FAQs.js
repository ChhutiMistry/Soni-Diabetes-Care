import React, { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Flickity from "flickity";
import Data from "./Database/FAQs.json";
import "./FAQs.css";

const FAQs = () => {
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
          <>
               <div className="autoslidec carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                    <div className="carousel-item active">
                         <img src="https://i.ibb.co/gyLFTvt/Doctor-Chamber-view.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/1bZVDsJ/Medical-Store.jpg" className="autoslidectop" alt="Medicine Store"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/T8bHDsK/Reception-view.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/DkLYSWr/Reception-1.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/4tpPKyn/Reception-2.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/F6MGb6X/Reception-getting-information.jpg" className="autoslidectop" alt="Reception - getting information"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/bLGkWY3/Hospital-Staff.jpg" className="autoslidectop" alt="Hospital Staff"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/SVjG8cJ/Doctors-and-Staff.jpg" className="autoslidectop" alt="Doctors and Staff"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/MBjK1KL/Doctors-at-Reception.jpg" className="autoslidectop" alt="Doctors at Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/w0TR6Zc/Doctor-Chamber-1.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/hKXCJZR/Doctor-Chamber-2.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/dJk7z8B/Doctor-Chamber-3.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/XpNc9sZ/Medical-Tests.jpg" className="autoslidectop" alt="Medical Tests"/>
                    </div>
               </div>
               <h1 className="headfaq">
                    Frequently Asked Questions
               </h1>
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