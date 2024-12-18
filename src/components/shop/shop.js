import React from "react";
import Card from "../card";
import {NavLink} from 'react-router-dom'
import './shop.css'

function Shop(){
    return(
        <>
            <div id="shop" className="">
                <div className="bg-shop ">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h3>Shop</h3>
                        <div className="d-flex">
                            <NavLink className="nav-link" to="/">Home </NavLink> / <span className="ms-1"> Shop</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="procards">
                        <Card></Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop