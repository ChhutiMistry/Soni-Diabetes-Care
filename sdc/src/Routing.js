import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./All Other Pages/Header";
import Footer from "./All Other Pages/Footer";
import Home from "./All Other Pages/Home";
import AboutUs from "./All Other Pages/AboutUs";
import Education from "./All Other Pages/Education";
import Services from "./All Other Pages/Services";
import MedicalStorePics from "./All Other Pages/MedicalStorePics";
import LabTestPics from "./All Other Pages/LabTestPics";
import Blogs from "./All Other Pages/Blogs";
import FAQs from "./All Other Pages/FAQs";
import FAQanswer from "./All Other Pages/FAQanswer";
import ThankYou from "./All Other Pages/ThankYou";
import Error404 from "./All Other Pages/Error404";
import Car from "./All Other Pages/Car";

const Routing = () => {
     return(
          <BrowserRouter>
               <div className="container-fluid">
                    <Header/>
                         <Routes>
                              <Route path="/" element={<Home/>}/>
                              <Route path="/aboutus" element={<AboutUs/>}/>
                              <Route path="/education" element={<Education/>}/>
                              <Route path="/services" element={<Services/>}/>
                              <Route path="/medicalstore" element={<MedicalStorePics/>}/>
                              <Route path="/labtest" element={<LabTestPics/>}/>
                              <Route path="/blogs" element={<Blogs/>}/>
                              <Route path="/faqs" element={<FAQs/>}/>
                              <Route path="/faqanswer/:id" element={<FAQanswer/>}/>
                              <Route path="/thankyou" element={<ThankYou/>}/>
                              <Route path="*" element={<Error404/>}/>
                              <Route path="/robl" element={<Car/>}/>
                         </Routes>
                    <Footer/>
               </div>
          </BrowserRouter>
     )
}

export default Routing;