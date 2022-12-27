import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Database/Q&A.json";
import "./FAQanswer.css";

const FAQanswer = () => {
     let { id } = useParams();
     console.log(Data[id-1],id);
     return (
          <>
               <div className="autoslidec carousel carousel-fade slide" data-bs-ride="carousel" data-bs-interval="2500">
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