import React, { useRef, useEffect } from "react";
import Flickity from "flickity";
import "./Car.css";

const Car = () => {
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
               freeScroll: false,
               contain: false,
               prevNextButtons: false,
               accessibility: true
          });
     }, []);

     return (
          <>
               <div className="conty" ref = {elemRef}>
                    <div className="rowe">
                         <img src="https://i.ibb.co/gyLFTvt/Doctor-Chamber-view.jpg" className="autoslidectope" alt="Doctor Chamber"/>
                         <p className="autoslidete">
                              Hello 1 Prediabtes is a condition where blood sugar levels are higher than normal, but not high enough to be diagnosed as type 2 diabetes. Prediabetes is basically a mild form of type 2 DM. Although blood sugar is not so high in prediabetic patients, cardiovascular risk is as equal to normal diabetic patients. So this population also needs medical advice in the form of dietary restrictions, physical exercise and some medications according to their body weight.
                         </p>
                    </div>
                    <div className="rowe">
                         <img src="https://i.ibb.co/1bZVDsJ/Medical-Store.jpg" className="autoslidectope" alt="Medicine Store"/>
                         <p className="autoslidete">
                              Hello 2 Prediabtes is a condition where blood sugar levels are higher than normal, but not high enough to be diagnosed as type 2 diabetes. Prediabetes is basically a mild form of type 2 DM. Although blood sugar is not so high in prediabetic patients, cardiovascular risk is as equal to normal diabetic patients. So this population also needs medical advice in the form of dietary restrictions, physical exercise and some medications according to their body weight.
                         </p>
                    </div>
                    <div className="rowe">
                         <img src="https://i.ibb.co/T8bHDsK/Reception-view.jpg" className="autoslidectope" alt="Reception"/>
                         <p className="autoslidete">
                              Hello 3 Prediabtes is a condition where blood sugar levels are higher than normal, but not high enough to be diagnosed as type 2 diabetes. Prediabetes is basically a mild form of type 2 DM. Although blood sugar is not so high in prediabetic patients, cardiovascular risk is as equal to normal diabetic patients. So this population also needs medical advice in the form of dietary restrictions, physical exercise and some medications according to their body weight.
                         </p>
                    </div>
                    <div className="rowe">
                         <img src="https://i.ibb.co/DkLYSWr/Reception-1.jpg" className="autoslidectope" alt="Reception"/>
                         <p className="autoslidete">
                              Hello 4 Prediabtes is a condition where blood sugar levels are higher than normal, but not high enough to be diagnosed as type 2 diabetes. Prediabetes is basically a mild form of type 2 DM. Although blood sugar is not so high in prediabetic patients, cardiovascular risk is as equal to normal diabetic patients. So this population also needs medical advice in the form of dietary restrictions, physical exercise and some medications according to their body weight.
                         </p>
                    </div>
                    <div className="rowe">
                         <img src="https://i.ibb.co/4tpPKyn/Reception-2.jpg" className="autoslidectope" alt="Reception"/>
                         <p className="autoslidete">
                              Hello 5 Prediabtes is a condition where blood sugar levels are higher than normal, but not high enough to be diagnosed as type 2 diabetes. Prediabetes is basically a mild form of type 2 DM. Although blood sugar is not so high in prediabetic patients, cardiovascular risk is as equal to normal diabetic patients. So this population also needs medical advice in the form of dietary restrictions, physical exercise and some medications according to their body weight.
                         </p>
                    </div>
                    <div className="rowe">
                         <img src="https://i.ibb.co/F6MGb6X/Reception-getting-information.jpg" className="autoslidectope" alt="Reception - getting information"/>
                         <p className="autoslidete">
                              Hello 6 Prediabtes is a condition where blood sugar levels are higher than normal, but not high enough to be diagnosed as type 2 diabetes. Prediabetes is basically a mild form of type 2 DM. Although blood sugar is not so high in prediabetic patients, cardiovascular risk is as equal to normal diabetic patients. So this population also needs medical advice in the form of dietary restrictions, physical exercise and some medications according to their body weight.
                         </p>
                    </div>
               </div>
          </>
     )
}

export default Car;