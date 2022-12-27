import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
     return (
          <>
               <div className="autoslidec carousel carousel-fade slide" data-bs-ride="carousel" data-bs-interval="2500">
                    <div className="carousel-item active">
                         <img src="https://i.ibb.co/1bZVDsJ/Medical-Store.jpg" className="autoslidectop" alt="Medicine Store"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/XpNc9sZ/Medical-Tests.jpg" className="autoslidectop" alt="Medical Tests"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/SVjG8cJ/Doctors-and-Staff.jpg" className="autoslidectop" alt="Doctors and Staff"/>
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
                         <img src="https://i.ibb.co/MBjK1KL/Doctors-at-Reception.jpg" className="autoslidectop" alt="Doctors at Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/gyLFTvt/Doctor-Chamber-view.jpg" className="autoslidectop" alt="Doctor Chamber"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/F6MGb6X/Reception-getting-information.jpg" className="autoslidectop" alt="Reception - getting information"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/bLGkWY3/Hospital-Staff.jpg" className="autoslidectop" alt="Hospital Staff"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/DkLYSWr/Reception-1.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/4tpPKyn/Reception-2.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
                    <div className="carousel-item">
                         <img src="https://i.ibb.co/T8bHDsK/Reception-view.jpg" className="autoslidectop" alt="Reception"/>
                    </div>
               </div>
               <h1 className="heads">
                    SERVICES
               </h1>
               <p className="hs">
                    HOME / SERVICES
               </p>
               <div className="hsback">
                    <div className="topbox">
                         <div>
                              <img src="https://i.ibb.co/1bZVDsJ/Medical-Store.jpg" alt="Medical Store" className="serviceimg"/>
                              <h1 className="servemss1">
                                   Medical Store
                              </h1>
                         </div>
                         <div>
                              <img src="https://i.ibb.co/MBSRhkf/Lab-Testing.jpg" alt="Lab & Testing" className="serviceimg"/>
                              <h1 className="servemss1">
                                   Lab & Testing
                              </h1>
                         </div>
                    </div>
               </div>
               <div className="textbox">
                    <div className="sdcshp11">
                         <h6 className="sdcsh1">
                              Medical Store
                         </h6>
                         <p className="sdcsp1">
                              After Diet and Physical Activity, you need drugs or insulin to control your blood sugar and prevent future complications. We provide our patients best quality drugs in our pharmacy so they can fight against diabetes.
                         </p>
                         <p className="sdcsp1">
                              As we know diabetics need life long drugs so we provide various patient supportive initiative to make our drugs cheaper and affordable without compromising quality of medicine.
                         </p>
                         <Link to="/medicalstore" className="sdcsp11">
                              Photo Gallery <i class="bi bi-arrow-right-circle-fill"></i>
                         </Link>
                    </div>
                    <div className="sdcshp22">
                         <h6 className="sdcsh2">
                              Lab & Testing
                         </h6>
                         <p className="sdcsp2">
                              A quality oriented cost effective Lab facility is available at our center.
                         </p>
                         <Link to="/labtest" className="sdcsp22">
                              Photo Gallery <i class="bi bi-arrow-right-circle-fill"></i>
                         </Link>
                    </div>
               </div>
               <div className="lineback">
                    <p>
                         Life's most persistent and urgent question is,
                    </p>
                    <p>
                         "What are you doing for others?"
                    </p>
               </div>
          </>
     )
}

export default Services;