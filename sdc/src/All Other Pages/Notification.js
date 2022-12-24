import React, { Component } from "react";
import "./Notification.css";
  
class Notification extends Component {

     constructor() {
          super();
          this.state = {
               name: "React"
          };
     }

     render() {
          return (
               <>
                    <div className="sdcnote">
                         <p className="nline1">
                              No updates.
                         </p>
                         <p className="nline2">
                              STAY TUNED !!!
                         </p>
                    </div>
               </>
          )
     }
}
  
export default Notification;