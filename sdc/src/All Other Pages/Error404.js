import React from "react";
import "./Error404.css";

const Error404 = () => {
     return (
          <>
               <main>
                    <div className="container">
                         <img src="https://i.ibb.co/Snc6brQ/404.gif" alt="Error Page" className="errorimg"/>
                         <p className="errortext">
                              Please click on our LOGO to go back
                         </p>
                    </div>
               </main>
          </>
     )
}

export default Error404;