import React from "react";
import './card.css'
import { FiHeart } from "react-icons/fi";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { IoBagAddOutline } from "react-icons/io5";

function Card(){
    return(
        <>
            <div className="procard">
                                        <div className="row">
                                            <div className="str-img">
                                                <div className="col-12 image">
                                                    <img className="w-100" src="https://www.engage.veented.com/shop-classic/wp-content/uploads/sites/39/2013/06/hat1-600x600.jpg" alt=""/>
                                                </div>
                                                <div className="stars-icons">
                                                    <div className="stars" id="star"><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /></div>
                                                </div>
                                                <div className='col-12 view-details'>View details</div>
                                            </div>
                                            <div className="row m-0 p-3">
                                                <div className="title-price col-12 d-flex justify-content-between align-items-center">
                                                    <div className="">
                                                        <div className="title mb-2">Fancy Shoes</div>
                                                        <p className="price m-0">$35.00</p>
                                                    </div>
                                                    <div className='d-flex flex-column align-items-end'>
                                                        <FiHeart className='like mb-2'/>
                                                        <div className='add-cart d-flex justify-content-between align-items-center'>
                                                            <IoBagAddOutline className='add-to-cart'/><div className='add-to-cart-text ms-1'>Add to cart</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        </>
    )
}

export default Card