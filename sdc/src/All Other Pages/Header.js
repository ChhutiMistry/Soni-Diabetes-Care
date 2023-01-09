import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
     return (
          <>
               <nav className="navbar navbar-expand-xl">
                    <div className="container-fluid navbarwhole">
                         <Link to="/" className="navbutton">
                              <img src="https://i.ibb.co/qJd9p3f/logo-Soni-Diabetes-Care.png" alt="Logo" className="logoimg"/>
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
                                             <Link to="/aboutus" className="navtextau">
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
                                             <Link to="/education" className="navtext">
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
                                             <Link to="/services" className="navtext">
                                                  Services
                                             </Link>
                                             <div type="button" className="bi bi-caret-down-square-fill dropdown-toggle-split navtext" data-bs-toggle="dropdown"></div>
                                             <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark">
                                                  <li>
                                                       <Link to="/services" className="dropdown-item">
                                                            Medical Store
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link to="/services" className="dropdown-item">
                                                            Lab & Testing
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </li>
                                   <li className="nav-item navbartext">
                                        <Link to="/blogs" className="active navtext">
                                             Blogs
                                        </Link>
                                   </li>
                                   <li className="nav-item navbartext">
                                        <Link to="/faqs" className="active navtext">
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