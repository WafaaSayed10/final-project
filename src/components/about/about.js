import React from "react";
import './about.css'
import {NavLink} from 'react-router-dom'

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
                </div>
            </section>
        </>
    )
}

export default About