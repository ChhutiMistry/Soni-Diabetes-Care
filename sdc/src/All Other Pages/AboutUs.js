import React from "react";
import "./AboutUs.css";
import Slider from "./Slider";

const AboutUs = () => {
     return (
          <>
               <Slider/>
               <p className="hau">
                    HOME / ABOUT US
               </p>
               <div className="hauback">
                    <div className="row">
                         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                              <h1 className="headline1">
                                   SONI DIABETES CARE
                              </h1>
                         </div>
                         <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                              <img src="https://i.ibb.co/SN3kfTP/Doctors.png" alt="Doctor" className="headline2"/>
                         </div>
                         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                              <p className="headline3">
                                   Our diabetic carecenter is updated in the field of diabetes and we believe in patient awareness and education. We provide regular consultations to our patients, explain to them what and how to maintain their diet with appropriate and quality drugs.
                              </p>
                         </div>
                    </div>
               </div>
               <h1 className="sdcauh1" id="aboutusSoniDiabetesCare">
                    Soni Diabetes Care
               </h1>
               <p className="sdcaup1">
                    Diabetes Mellitus is becoming a major health burden affecting 8 - 10 % of the adult population in India. Whatever the issue, the truth is that most Indian Diabetic patients are not meeting their target Blood sugar level, HbA1c and LDL Cholesterol, which may result in many complications like heart attack, kidney and retina damage.
               </p>
               <p className="sdcaup2">
                    Soni Diabetes Care is a dedicated diabetic care center in sikar, committed to providing cost effective specialized service to diabetic patients as per various international guidelines to control the high blood sugar as well as to prevent complications. Our diabetic care center is updated in the field of diabetes and we believe in patient awareness
               </p>
               <p className="sdcaup3">
                    and education. We provide regular consultations to our patients, explain to them what and how to maintain their diet with appropriate and quality drugs given as per their individualized need to control blood sugar, cholesterol and other associated co-morbidities.
               </p>
               <p className="sdcaup4">
                    Faithful to our tradition, we provide the highest possible standards of care and treatment in a professional and compassionate manner to every diabetic patient who avails of our services. Our patients love us be'coz we care about them.
               </p>
               <h1 className="sdcauh2" id="aboutusOurDoctors">
                    OUR DOCTORS
               </h1>
               <h2 className="sdcauh3">
                    Dr Mukesh Kumar Soni MD
               </h2>
               <div className="row">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                         <img src="https://i.ibb.co/r00kcGT/Mukesh-Kumar-Soni.jpg" alt="Mukesh Kumar Soni" className="drmksimg"/>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 sdcaup5">
                         <p>
                              Dr Mukesh Kumar Soni MD, earned his graduation and postgraduate degree in field of Medicine from the most prestigious Medical College of Rajasthan, SMS Medical College Jaipur in 2014.
                         </p>
                         <p>
                              He is working in the field of diabetes for the last 7 - 8 years, and now He is working in the Soni Diabetes Care, Sikar as a Director and Consultant Diabetologist.
                         </p>
                         <p>
                              He wants to provide cost-effective, evidence-based updated best diabetes care to his patients. He believes that Indian Diabetic Patients need basic awareness and education about diabetes and require specialized treatment but it should be cost effective.
                         </p>
                    </div>
               </div>
               <h2 className="sdcauh4">
                    Dr Tareef Hussain MBBS
               </h2>
               <div className="row">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                         <img src="https://i.ibb.co/MCWqCRK/Tareef-Hussain.jpg" alt="Tareef Hussain" className="drthimg"/>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 sdcaup6">
                         <p>
                              Dr Tareef Hussain passed his MBBS from Jhalawar Medical College, Rajasthan in 2018. During his MBBS he was a brilliant student and after passing MBBS, worked in SMS Medical College as a Intern student to expand his learning in the field of medical science.
                         </p>
                         <p>
                              He gained experience of working in the department of medicine in Manipal Hospital Jaipur from 2018 to 2020 and in Gurukripa Hospitals, Sikar from 2020 to 2022. Presently he is working in Soni Diabetes Care, Sikar as an associate consultant to provide complete medicine care to patients.
                         </p>
                    </div>
               </div>
          </>
     );
};

export default AboutUs;