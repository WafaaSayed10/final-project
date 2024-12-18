import React from "react";
import './cart.css'
import {NavLink} from 'react-router-dom'

function Cart(){
    return(
        <>
            <section id="cart">
                <div className="bg-cart ">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h3>Cart</h3>
                        <div className="d-flex">
                            <NavLink className="nav-link" to="/">Home </NavLink> / <NavLink className="nav-link" to="/shop">Shop </NavLink> / <span className="ms-1"> Cart</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p>Your cart is currently empty.</p>
                    <button>Return to shop</button>
                </div>
            </section>
        </>
    )
}

export default Cart