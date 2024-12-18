import React from "react";
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGoogle, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone, faEnvelope, faEarthAmericas,faStar } from '@fortawesome/free-solid-svg-icons'
import { FaChevronRight } from "react-icons/fa";
import { BsDash } from "react-icons/bs";
import photo1 from '../../images/shoes2-600x600.jpg';
import photo2 from '../../images/bag2-1-150x150.jpg';
import photo3 from '../../images/shoes-600x600.jpg';

function Footer(){
    return(
        <>
            <section id="footer" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                            <h5>About us</h5>
                            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
                            <p>We are the champions! We are the most amazing theme of all time, yeah.</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                            <h5>Opening Hours</h5>
                            <p className="line pb-2 m-0"><FaChevronRight /> Monday 10AM <BsDash /> 9PM</p>
                            <p className="line py-2 m-0"><FaChevronRight /> Tuesday 10AM <BsDash /> 9PM</p>
                            <p className="line py-2 m-0"><FaChevronRight /> Wednesday 10AM <BsDash /> 9PM</p>
                            <p className="line py-2 m-0"><FaChevronRight /> Thursday 10AM <BsDash /> 10PM</p>
                            <p className="line py-2 m-0"><FaChevronRight /> Friday 10AM <BsDash /> 10PM</p>
                            <p className="last-line py-2 m-0"><FaChevronRight /> Weekends 10AM <BsDash /> 11PM</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                            <h5>Top Rated Products</h5>
                            <div className="row justify-content-between t-r-p pb-2">
                                <div className="col-8">
                                    <p className="m-0">Light Shoes</p>
                                    <div className="starss"><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /></div>
                                    <p>£20.00</p>
                                </div>
                                <div className="col-4 image">
                                    <img className="w-100" src={photo1} alt="" />
                                </div>
                            </div>
                            <div className="row justify-content-between t-r-p py-2">
                                <div className="col-8">
                                    <p className="m-0">Basic Sandals</p>
                                    <div className="starss"><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /></div>
                                    <p>£18.00</p>
                                </div>
                                <div className="col-4 image">
                                    <img className="w-100" src={photo2} alt=""/>
                                </div>
                            </div>
                            <div className="row justify-content-between py-2">
                                <div className="col-8">
                                    <p className="m-0">White Bag</p>
                                    <div className="starss"><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /></div>
                                    <p>£35.00</p>
                                </div>
                                <div className="col-4 image">
                                    <img className="w-100" src={photo3} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                            <h5>Contact Details</h5>
                            <div className="c-details c-details-line pb-2">
                                <FontAwesomeIcon className="details-icon" icon={faLocationDot} />
                                <p>Manchester Road 123-78B, Silictown 7854MD, Great Country</p>
                            </div>
                            <div className="c-details c-details-line py-2">
                                <FontAwesomeIcon className="details-icon" icon={faPhone} />
                                <p>+46 123 456 789</p>
                            </div>
                            <div className="c-details c-details-line py-2">
                                <FontAwesomeIcon className="details-icon" icon={faEnvelope} />
                                <p className="mailto"><a href="mailto:fefesayed522@gmail.com">hello@sitename.com</a></p>
                            </div>
                            <div className="c-details py-2">
                                <FontAwesomeIcon className="details-icon" icon={faEarthAmericas} />
                                <p>http://www.sitename.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="rights" className="py-3">
                <div className="container d-flex flex-column flex-xl-row justify-content-xl-between justify-content-between align-items-xl-center align-items-center">
                    <p className="m-xl-0 mb-3">Copyright 2024. All rights reserved.</p>
                    <div className="d-flex">
                        <div className="social">
                            <a href="https://www.facebook.com/wafaa.sayed.56" ><FontAwesomeIcon icon={faFacebookF} /></a>
                        </div>
                        <div className="social">
                            <a href="https://www.google.com"><FontAwesomeIcon icon={faGoogle} /></a>
                        </div>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/wafaa-sayed10/" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                        <div className="social">
                            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer