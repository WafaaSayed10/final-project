import React from "react";
import './contact.css'
import {NavLink} from 'react-router-dom'
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

function Contact(){
    return(
        <>
            <section id="contact" className="">
                <div className="bg-contact ">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h3>Contact</h3>
                        <div className="d-flex">
                            <NavLink className="nav-link" to="/">Home </NavLink> / <span className="ms-1"> Contact</span>
                        </div>
                    </div>
                </div>
                <div className="container" id="formblur">
                    <div className="row">
                        <div className="col-12 col-xl-8 mb-4">
                            <h2 className="mb-4">Contact Form</h2>
                            <form action="" id="form">
                                <div className="data">
                                    <input type="text" name="name" placeholder="Name" id="name"/>
                                    <input type="text" name="email" placeholder="Email" id="email"/>
                                </div>
                                <input type="text" name="Subject" placeholder="Subject" id="subject"/>
                                <textarea name="message" placeholder="Message" id="message"></textarea>
                                <button id="btn-form">SEND</button><span id="errmsg" className="ps-3"></span>
                            </form>
                        </div>
                        <div className="col-12 col-xl-4 ps-5">
                            <h2 className="mb-4">Contact Information</h2>
                            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <p>Our contact details:</p>
                            <div>
                                <p className="d-flex align-items-center"><span className="icon me-3"><FaMap className="oneicon"/></span> Manchester St 123-78B, Random 7D, UK </p>
                                <p className="d-flex align-items-center"><span className="icon me-3"><FaPhone className="oneicon"/></span> +46 123 456 789 </p>
                                <p className="d-flex align-items-center"><span className="icon me-3"><FaHeadphones className="oneicon"/></span> +37 431 456 789 </p>
                                <p className="d-flex align-items-center"><span className="icon me-3"><FaEnvelope className="oneicon"/></span> hello@sitename.com </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="success" id="success">
                    <div className="message">
                        <h5>Message Sent Successfully</h5>
                        <p id="user-message"></p>
                        <button id="okbtn">Ok</button>
                    </div>
                </div>
            </section>
            <div className="map-content">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-7515a732 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="7515a732" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2293d129" data-id="2293d129" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-162fce53 elementor-widget elementor-widget-google_maps" data-id="162fce53" data-element_type="widget" data-widget_type="google_maps.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-custom-embed">
                                            <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                            src="https://maps.google.com/maps?q=Envato%2C%20King%20Street%2C%20Melbourne%20Victoria%2C%20Australia&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
                                            title="Envato, King Street, Melbourne Victoria, Australia"
                                            aria-label="Envato, King Street, Melbourne Victoria, Australia">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact