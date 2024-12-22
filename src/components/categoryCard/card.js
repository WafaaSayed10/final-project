import React from "react";
import "./card.css";
import { FiHeart } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAndRemoveFavorite } from "../../store/slices/favoriteSlic";
import { FaHeart } from "react-icons/fa";

function CategoryCard({ card }) {
  const dispatch = useDispatch();
  //const fav=useSelector((state)=>state.Favorite.isFav)
  const favoriteCard = useSelector((state) => state.Favorite.favorites);
  const addToFav = (product) => {
    console.log("Adding to favorites:", product);
    dispatch(addAndRemoveFavorite(product));
  };
  const favProduct = favoriteCard.some((product) => product.id === card.id);
  return (
    <>
      <div className="procard">
        <div className="row">
          <Link to={`/droductDetails/${card.id}`}>
            <div className="str-img">
              <div className="col-12 image">
                <img className="w-100" src={card.img} alt="" />
              </div>
              <div className="stars-icons">
                <div className="stars" id="star">
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                </div>
              </div>
              <div className="col-12 view-details">View Details</div>
            </div>
          </Link>
          <div className="row m-0 p-3">
            <div className="title-price col-12 d-flex justify-content-between align-items-center">
              <div className="">
                <div className="title mb-2">{card.name}</div>
                <p className="price m-0">${card.price}</p>
              </div>
              <div className="d-flex flex-column align-items-end">
                <div>
                  {favProduct ? (
                    <FaHeart
                      className="like redlike mb-2"
                      onClick={() => addToFav(card)}
                    />
                  ) : (
                    <FiHeart
                      className="like mb-2"
                      onClick={() => addToFav(card)}
                    />
                  )}
                </div>
                <div className="add-cart d-flex justify-content-between align-items-center">
                  <IoBagAddOutline className="add-to-cart" />
                  <div className="add-to-cart-text ms-1">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
