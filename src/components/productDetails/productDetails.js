import React from "react";
import './productDetails.css'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import data from '../../data.json'
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons'

function ProductDetails(){
    const { id } = useParams();
    const product = data[ id-1];
    //console.log(product);
    const [numOfProduct,setNumOfProduct]=useState(1)
    /*useEffect(()=>{
        setNumOfProduct()
    },[numOfProduct])*/
    function num(e){
        setNumOfProduct(e.target.value)
    }
    function addToCart(){
        if(numOfProduct > product.num)
        {
            
        }
    }
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
                        <div className="col-12 col-lg-6 col-xl-6">
                            <img className="w-100" src={product.img} alt={product.name}/>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-6 ps-5">
                            <h2 className="title">{product.name}</h2>
                            <span className="starss me-2"><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /></span>
                            <span className="moreInfo">(1 customer review)</span>
                            <h3 className="price">${product.price}</h3>
                            <p className="desc">{product.description}</p>
                            <hr className="hline"/>
                            <span className="boxOfNum">
                                <input className="numOfProduct" type="number" onChange={(e)=>num(e)} value={numOfProduct}></input>
                            </span>
                            <button className="addToCart" onClick={addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails