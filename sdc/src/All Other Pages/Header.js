import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
     return (
          <>
               <div className="tbanner">
                    <div className="bannline" data-bs-toggle="modal" data-bs-target="#mymodal">
                         <div>B</div>
                         <div>O</div>
                         <div>O</div>
                         <div>K</div>
                         <div>A</div>
                         <div>P</div>
                         <div>P</div>
                         <div>O</div>
                         <div>I</div>
                         <div>N</div>
                         <div>T</div>
                         <div>M</div>
                         <div>E</div>
                         <div>N</div>
                         <div>T</div>
                    </div>
                    <div id="mymodal" className="modal fade" role="dialog">
                         <div className="modal-dialog">
                              <div className="modal-content modback">
                                   <div className="modal-header">
                                        <h4 className="modal-title modhead">
                                             Opinion from the Specialist
                                        </h4>
                                        <button className="close" data-bs-dismiss="modal">
                                             &times;
                                        </button>
                                   </div>
                                   <div className="modal-body">
                                        <form action="https://public.herotofu.com/v1/7468b140-7ed7-11ed-b38f-a1ed22f366b1" method="post" enctype="multipart/form-data">
                                             <div className="bannform">
                                                  <div className="form-group">
                                                       NAME
                                                       <input type="text" name="Name" className="form-control formebox" placeholder="Enter Name" required/>
                                                  </div>
                                                  <div className="form-group">
                                                       MOBILE NUMBER
                                                       <input type="digits" name="Phone Number" className="form-control formebox" placeholder="Enter mobile no" minLength="10" required/>
                                                  </div>
                                                  <div className="form-group">
                                                       PREFERRED TIME TO CALL
                                                       <input type="time" name="Time to Call" className="form-control formebox" placeholder="Preferred time to call" required/>
                                                  </div>
                                                  <div className="form-group">
                                                       DOCUMENT
                                                       <input type="file" name="Document" className="form-control formebox" placeholder="Browse PDF, DOCX, ETC."/>
                                                  </div>
                                                  <button className="btn btn-primary formebutton" type="submit">
                                                       SUBMIT
                                                  </button>
                                             </div>
                                        </form>
                                   </div>
                                   <div className="modal-footer modhead">
                                        <p>
                                             You will be notified soon about the follow-up.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid navbarwhole">
                         <Link to="/" className="navbutton">
                              <img src="https://i.ibb.co/zVJch0p/Soni-Diabetes-Care-logo.png" alt="Logo" className="logoimg"/>
                         </Link>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarToggler">
                              <ul className="navbar-nav">
                                   <li className="nav-item navbartext">
                                        <Link to="/" className="active navtext" aria-current="page">
                                             Home
                                        </Link>
                                   </li>
                                   <li className="nav-item dropdown navbartext">
                                        <div className="btn-group">
                                             <Link to="/aboutus" onClick="location.reload()" className="navtextau">
                                                  About Us
                                             </Link>
                                             <div type="button" className="bi bi-caret-down-square-fill dropdown-toggle-split navtext" data-bs-toggle="dropdown"></div>
                                             <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark">
                                                  <li>
                                                       <Link to="/aboutus/#aboutusSoniDiabetesCare" className="dropdown-item">
                                                            Soni Diabetes Care
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/aboutus/#aboutusOurDoctors" className="dropdown-item">
                                                            Our Doctors
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/#homeReview" className="dropdown-item">
                                                            Testimonials
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </li>
                                   <li className="nav-item dropdown navbartext">
                                        <div className="btn-group">
                                             <Link to="/education" onClick="location.reload()" className="navtext">
                                                  Education
                                             </Link>
                                             <div type="button" className="bi bi-caret-down-square-fill dropdown-toggle-split navtext" data-bs-toggle="dropdown"></div>
                                             <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark">
                                                  <li>
                                                       <Link to="/education/#educationDiabetesEducation" className="dropdown-item">
                                                            Diabetes Education
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/education/#educationPreDiabetes" className="dropdown-item">
                                                            Pre - Diabetes
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/education/#educationInsulinEducation" className="dropdown-item">
                                                            Insulin Education
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/education/#educationDiet" className="dropdown-item">
                                                            Diet Tips
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/education/#educationPhysicalActivity" className="dropdown-item">
                                                            Physical Activities
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </li>
                                   <li className="nav-item dropdown navbartext">
                                        <div className="btn-group">
                                             <Link to="/services" onClick="location.reload()" className="navtext">
                                                  Services
                                             </Link>
                                             <div type="button" className="bi bi-caret-down-square-fill dropdown-toggle-split navtext" data-bs-toggle="dropdown"></div>
                                             <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark">
                                                  <li>
                                                       <Link to="/services" onClick="location.reload()" className="dropdown-item">
                                                            Medical Store
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/services" onClick="location.reload()" className="dropdown-item">
                                                            Lab & Testing
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </li>
                                   <li className="nav-item navbartext">
                                        <Link to="/blogs" onClick="location.reload()" className="active navtext">
                                             Blogs
                                        </Link>
                                   </li>
                                   <li className="nav-item navbartext">
                                        <Link to="/faqs" onClick="location.reload()" className="active navtext">
                                             FAQ's
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </>
     );
};

export default Header;