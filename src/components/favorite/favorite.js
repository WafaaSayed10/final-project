import React from "react";
import './favorite.css'
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { IoCloseSharp } from "react-icons/io5";
import { IoBagAddOutline } from "react-icons/io5";
import {removeFavorite} from '../../store/slices/favoriteSlic'
import {resetFavorite} from '../../store/slices/favoriteSlic'
import { Link } from "react-router-dom";
//import { useEffect } from "react";

function Favorite(){
    const navigate=useNavigate()
    function returnToShop(){
        navigate('/shop')
    }
    const favorites = useSelector((state) => state.Favorite.favorites);
    const dispatch = useDispatch();
    /*useEffect(() => {
        localStorage.setItem('savedFavorites', JSON.stringify(favorites))
        }, [favorites]);*/
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
                    <div className=" allFavCards">
                        {favorites.length > 0 ?favorites.map((favorite)=>(
                        <div key={favorite.id} className="favCard">
                            <div className="favImage">
                                <Link to={`/droductDetails/${favorite.id}`}><img className="w-100" src={favorite.img} alt={favorite.name}/></Link>
                                <IoCloseSharp onClick={()=>dispatch(removeFavorite(favorite))} className="x"/>
                            </div>
                            <div className="p-3">
                                <Link className="title" to={`/droductDetails/${favorite.id}`}><div>{favorite.name}</div></Link>
                                <div className="price d-flex justify-content-between">
                                    <div>${favorite.price}</div>
                                    <div><IoBagAddOutline className="bag" /></div>
                                </div>
                            </div>
                        </div>)) :<></>}
                    </div>
                    {favorites.length>0? <button onClick={()=>dispatch(resetFavorite())}>Reset Favorite</button>:
                    <><p className="empty">Your Favorite is currently empty.</p><button onClick={returnToShop}>Return to shop</button></>
                    }
                </div>
            </section>
        </>
    )
}

export default Favorite