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
                         <img src="https://i.ibb.co/D43ftKr/Doctor-Chamber-view.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/TttVDHT/Soni-Diabetes-Care-outside-view.jpg" className="autoslidectop" alt="Soni Diabetes Care outside view"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/BTfpzMN/Medicine-Store.jpg" className="autoslidectop" alt="Medicine Store"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/BjRW4tS/Reception-view.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/Z6QTV6H/Reception-1.jpg" className="autoslidectop" alt="Rception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/tBvS0G4/Reception-2.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/Z1Cj1SW/Reception-getting-information.jpg" className="autoslidectop" alt="Reception - getting information"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/7RpfNQn/Hospital-Staff.jpg" className="autoslidectop" alt="Hospital Staff"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/GHmkGzf/Doctors-and-Staff.jpg" className="autoslidectop" alt="Doctors and Staff"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/51Dyw6X/Doctors-at-Reception.jpg" className="autoslidectop" alt="Doctors at Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/0GxJtc4/Doctor-Chamber-1.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/PWTdvBG/Doctor-Chamber-2.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/XkX8XW7/Doctor-Chamber-3.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/Wprn1jQ/Medical-Tests.jpg" className="autoslidectop" alt="Medical Tests"/>
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
                                        <img src={ post.image } className="responsive-img rofaqimg" alt={ post.alttext }/>
                                        <div className="card-body">
                                             <Link to={`/faqanswer/${post.id}/#withyouranswer`}>
                                                  <h1 className="card-title rofaqhead">
                                                       { post.heading }
                                                  </h1>
                                                  <p className="card-text rofaqbody" dangerouslySetInnerHTML={{ __html: post.paragraph }}></p>
                                                  <i className="bi bi-arrow-right rofaqarr"></i>
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </>
     );
};

export default FAQs;