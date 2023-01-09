import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
     return (
          <>
               <div className="footlogo">
                    <div>
                         <Link to="/#">
                              <img src="https://i.ibb.co/6X78GvN/Soni-Diabetes-Care-logo.png" alt="Logo" className="logoimgfoot"/>
                         </Link>
                    </div>
                    <div className="footsocial">
                         <div>
                              <a href="https://www.facebook.com/SoniDiabetesCare" target="_blank" rel="noreferrer noopener">
                                   <img src="https://i.ibb.co/FVPrDsw/Facebook.png" alt="Facebook" className="img-fluid smfoot"/>
                              </a>
                         </div>
                         <div>
                              <a href="https://wa.me/917073662430" target="_blank" rel="noreferrer noopener">
                                   <img src="https://i.ibb.co/rttw5gJ/WhatsApp.png" alt="WhatsApp" className="img-fluid smfoot"/>
                              </a>
                         </div>  
                         <div>
                              <a href="https://www.instagram.com/sonidiabetescare" target="_blank" rel="noreferrer noopener">
                                   <img src="https://i.ibb.co/30sLnqK/Instagram.png" alt="Instagram" className="img-fluid smfoot"/>
                              </a>
                         </div>
                         <div>
                              <a href="https://www.google.com/maps/place/Soni+Diabetes+Care+-+Best+Diabetes+Doctor+%2F+Diabetes+Specialist+%2F+Best+Diabetologist+in+Sikar/@27.6267575,75.1054746,12z/data=!4m22!1m16!4m15!1m6!1m2!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!2ssoni+diabetes+care!2m2!1d75.1755149!2d27.6267751!1m6!1m2!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!2sSoni+Diabetes+Care+-+Best+Diabetes+Doctor+%2F+Diabetes+Specialist+%2F+Best+Diabetologist+in+Sikar,+Didwana+-+Sikar+Rd,+Dhobiyon+Ka+Mohalla,+Sikar,+Rajasthan+332001!2m2!1d75.1755149!2d27.6267751!3e0!3m4!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!8m2!3d27.6267751!4d75.1755149" target="_blank" rel="noreferrer noopener">
                                   <i className="bi bi-geo-alt-fill img-fluid mapsdcfoot"></i>
                              </a>
                         </div>
                    </div>
               </div>
               <hr/>
               <div className="footdetails">
                    <div className="footflexleft">
                         <p className="footd1">
                              Soni Diabetes Care
                         </p>
                         <p className="footd2">
                              Near Allen Coaching
                         </p>
                         <p className="footd3">
                              Piprali Road, Sikar
                         </p>
                         <p className="footd4">
                              Rajasthan - 332001
                         </p>
                         <p className="footd5">
                              Call: <a href="tel:+917073662430">+91 70736 62430</a>
                         </p>
                         <p className="footd6">
                              Mail: <a href="mailto:sonidiabetescare@gmail.com">sonidiabetescare@gmail.com</a>
                         </p>
                    </div>
                    <div className="footflexright">
                         <div className="footpagedetails">
                              <div>
                                   <Link to="/aboutus/#" className="footheadau">
                                        About Us
                                   </Link>
                                   <ul>
                                        <li className="footheadau1">
                                             <Link to="/aboutus/#aboutusSoniDiabetesCare">
                                                  Soni Diabetes Care
                                             </Link>
                                        </li>
                                        <li className="footheadau2">
                                             <Link to="/aboutus/#aboutusOurDoctors">
                                                  Our Doctors
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <Link to="/education/#" className="footheaded">
                                        Education
                                   </Link>
                                   <ul>
                                        <li className="footheaded1">
                                             <Link to="/education/#educationDiabetesEducation">
                                                  Diabetes Education
                                             </Link>
                                        </li>
                                        <li className="footheaded2">
                                             <Link to="/education/#educationPreDiabetes">
                                                  Pre-Diabetes
                                             </Link>
                                        </li>
                                        <li className="footheaded3">
                                             <Link to="/education/#educationInsulinEducation">
                                                  INSULIN Education
                                             </Link>
                                        </li>
                                        <li className="footheaded4">
                                             <Link to="/education/#educationDiet">
                                                  Diet Tips
                                             </Link>
                                        </li>
                                        <li className="footheaded5">
                                             <Link to="/education/#educationPhysicalActivity">
                                                  Physical Activities
                                             </Link>
                                        </li>
                                   </ul>
                              </div>  
                              <div>
                                   <Link to="/services/#" className="footheadse">
                                        Services
                                   </Link>
                                   <ul>
                                        <li className="footheadse1">
                                             <Link to="/services/#">
                                                  Medical Store
                                             </Link>
                                        </li>
                                        <li className="footheadse2">
                                             <Link to="/services/#">
                                                  Lab & Testing
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <Link to="/faqs/#" className="footheadfaq">
                                        FAQ'S
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="foottac footlinewhole">
                    <div>
                         <p className="footline">
                              <span>
                                   &copy;
                              </span>
                              <span>
                                   SONI DIABETES CARE
                              </span>
                         </p>
                    </div>
                    <div>
                         <p className="footline">
                              PRIVACY AND POLICY <i className="bi bi-arrow-up-right footline"></i>
                         </p>
                    </div>  
                    <div>
                         <a href="https://www.google.com/maps/place/Soni+Diabetes+Care+-+Best+Diabetes+Doctor+%2F+Diabetes+Specialist+%2F+Best+Diabetologist+in+Sikar/@27.6267575,75.1054746,12z/data=!4m22!1m16!4m15!1m6!1m2!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!2ssoni+diabetes+care!2m2!1d75.1755149!2d27.6267751!1m6!1m2!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!2sSoni+Diabetes+Care+-+Best+Diabetes+Doctor+%2F+Diabetes+Specialist+%2F+Best+Diabetologist+in+Sikar,+Didwana+-+Sikar+Rd,+Dhobiyon+Ka+Mohalla,+Sikar,+Rajasthan+332001!2m2!1d75.1755149!2d27.6267751!3e0!3m4!1s0x396cbbcfd2752c25:0xe22e2da3f2855ced!8m2!3d27.6267751!4d75.1755149" className="footlinem1">
                              GET DIRECTIONS <i className="bi bi-arrow-up-right"></i>
                         </a>
                    </div>
               </div>
               <div className="footback1">
                    <div className="footback2">
                         <div className="footback3">
                              <hr/>
                              <h2 className="subsline1">
                                   GET OUR LATEST UPDATES
                              </h2>
                              <p className="subsline2">
                                   Get latest updates about Soni Diabetes Care directly to your inbox, or on your personal number.
                              </p>
                              <div className="container-fluid myfootform">
                                   <form action="https://public.herotofu.com/v1/87267180-7ed9-11ed-b38f-a1ed22f366b1" method="post">
                                        <div className="formw">
                                             <div className="row">
                                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
                                                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                                       <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Email or Mobile number......" name="Email or Mobile number"required/>
                                                       </div>
                                                  </div>
                                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                                                       <button className="btn btn-danger btn-lg" id="submitt" type="submit">
                                                            Enter
                                                       </button>
                                                  </div>
                                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"></div>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Footer;