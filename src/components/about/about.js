import React from "react";
import './about.css'
import {NavLink, Link} from 'react-router-dom'
import about from '../../images/about.avif'
import { FaLeaf } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function About(){
    return(
        <>
            <section id="about">
                <div className="bg-about ">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h3>About</h3>
                        <div className="d-flex">
                            <NavLink className="nav-link" to="/">Home </NavLink> / <span className="ms-1"> About</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-between align-items-center pb-5">
                <div className="col-12 col-lg-6 col-xl-6">
                    <img class="w-100" src={about} alt=""/>
                </div>
                <div className="col-12 col-lg-6 col-xl-6 ps-5 about-content mt-4">
                    <h2>Who we are?</h2>
                    <p className="py-4">We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
                    <div>
                        <p className="d-flex align-items-center"><span className="icon me-3"><FaLeaf className="aboutIcon"/></span> We care about environment </p>
                        <p className="d-flex align-items-center"><span className="icon me-3"><FaUsers className="aboutIcon"/></span> We are trusted by hundreds of clients. </p>
                        <p className="d-flex align-items-center"><span className="icon me-3"><FaHeart className="aboutIcon"/></span> Social media loves us! </p>
                        <p className="d-flex align-items-center"><span className="icon me-3"><FaCheck className="aboutIcon"/></span> This list is super easy to create. </p>
                    </div>
                </div>
                    </div>
                </div>
                <div className="features pt-5">
                    <div className="container">
                    <h2 className="text-center">Shop Features</h2>
                        <p className="text-center mb-5">What we're great at.</p>
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-4 aboutCard">
                                <h4>Facilities</h4>
                                <p>
                                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4 aboutCard">
                                <h4>Best Equipment</h4>
                                <p>
                                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4 aboutCard">
                                <h4>Incredible Location</h4>
                                <p>
                                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4 aboutCard">
                                <h4>Facilities</h4>
                                <p>
                                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4 aboutCard">
                                <h4>Best Equipment</h4>
                                <p>
                                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4 aboutCard">
                                <h4>Incredible Location</h4>
                                <p>
                                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last text-center">
                    <h2>How about shopping?</h2>
                    <p>Check all our products.</p>
                    <Link to='/shop'><button>VISIT SHOP</button></Link>
                </div>
            </section>
        </>
    )
}

export default About