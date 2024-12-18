import React from "react";
import './favorite.css'
import {NavLink} from 'react-router-dom'

function Favorite(){
    return(
        <>
            <section id="favorite">
                <div className="bg-favorite ">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h3>Favorite</h3>
                        <div className="d-flex">
                            <NavLink className="nav-link" to="/">Home </NavLink> / <NavLink className="nav-link" to="/shop">Shop </NavLink> / <span className="ms-1"> Favorite</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p>Your Favorite is currently empty.</p>
                    <button>Return to shop</button>
                </div>
            </section>
        </>
    )
}

export default Favorite