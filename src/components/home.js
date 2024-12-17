import React from 'react'
import './home.css'
import { FiHeart } from "react-icons/fi";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Home(){
    return(
        <>
            <div className='bg'>
            </div>
            <section id="new-arrivals" className="py-5">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-xl-8 text-center sectitle">
                            <h2>New Arrivals</h2>
                            <p>Nunc id ante quis tellus faucibus dictum in eget metus. Duis suscipit elit sem, sed mattis tellus accumsan eget. Quisque consequat venenatis rutrum. Quisque posuere enim augue, in rhoncus diam dictum non. Etiam mollis pulvinar nisl.</p>
                        </div>
                    </div>
                    <div className="procards">
                        {/*<div className="procard">
                            <div className="row">
                                <div className="col-12 image">
                                    <img className="w-100" src="https://www.engage.veented.com/shop-classic/wp-content/uploads/sites/39/2013/06/shirt1-600x600.jpg" alt=""/>
                                </div>
                                <div className="row m-0 py-2">
                                    <div className="col-12 d-flex justify-content-between">
                                        <div className="stars" id="star"><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /></div>
                                        <div>
                                            <p>Rating: <span className="rating">0</span>/5</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <div className="">
                                            <div className="title">Lily Shirt</div>
                                            <p className="price">$20.00</p>
                                        </div>
                                        <FiHeart className='like'/>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        <div className="procard">
                                <div className="row">
                                    <div className="str-img">
                                        <div className="col-12 image">
                                            <img className="w-100" src="https://www.engage.veented.com/shop-classic/wp-content/uploads/sites/39/2013/06/hat1-600x600.jpg" alt=""/>
                                        </div>
                                        <div className="stars-icons">
                                            <div className="stars" id="star"><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /><FontAwesomeIcon className="star" icon={faStar} /></div>
                                        </div>
                                    </div>
                                    <div className="row m-0 py-2">
                                        <div className="col-12 d-flex justify-content-between ">
                                            <div className="">
                                                <div className="title">Fancy Shoes</div>
                                                <p className="price">$35.00</p>
                                            </div>
                                            <FiHeart className='like mt-1 '/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home