import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Database/Q&A.json";
import "./FAQanswer.css";

const FAQanswer = () => {
     let { id } = useParams();
     console.log(Data[id-1],id);
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
                         <img src="https://i.ibb.co/Z6QTV6H/Reception-1.jpg" className="autoslidectop" alt="Reception"/>
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
               <h1 className="headfaqa">
                    Frequently Asked Questions
               </h1>
               <p className="hfaqa">
                    HOME / FAQS
               </p>
               <div className="hfaqaback"></div>
               <h1 className="sdcfaqah1" id="withyouranswer">
                    NEED A HAND ? WE'VE GOT YOU.
               </h1>
               <div key={ Data[id-1].id } className="container sdcfaqabox">
                    <div className="sdcfaqaboxques">
                         { Data[id-1].question }
                    </div>
                    <div className="sdcfaqaboxans" dangerouslySetInnerHTML={{ __html: Data[id-1].answer }}></div>
               </div>
          </>
     );
};

export default FAQanswer;