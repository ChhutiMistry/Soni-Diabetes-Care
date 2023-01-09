import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Database/Q&A.json";
import "./FAQanswer.css";
import Slider from "./Slider";

const FAQanswer = () => {
     let { id } = useParams();
     console.log(Data[id-1],id);
     return (
          <>
               <Slider/>
               <p className="hfaqa">
                    HOME / FAQANSWER
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