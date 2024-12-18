import React from "react";
import './product-details.css'
import {NavLink} from 'react-router-dom'
//import {useState, useEffect} from 'react'
import data from '../../data.json'
import { useParams } from 'react-router-dom';

function ProductDetails(){
    const { id } = useParams();
    const product = data[ id-1];
    //console.log(product);
    return(
        <>
            <section id="product-details">
                <div className="bg-product-details ">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h3>Shop</h3>
                        <div className="d-flex">
                            <NavLink className="nav-link" to="/">Home </NavLink> / <span className="ms-1"> Shop</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img style={{width:"300px"}} src={product.img} alt={product.name}/>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails