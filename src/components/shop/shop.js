import React from "react";
import Card from "../card/card";
import { NavLink } from "react-router-dom";
import "./shop.css";
import data from "../../data.json";
import { useState, useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <>
      <div id="shop" className="">
        <div className="bg-shop ">
          <div className="container d-flex justify-content-between align-items-center">
            <h3>Shop</h3>
            <div className="d-flex">
              <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>{" "}
              / <span className="ms-1"> Shop</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="procards">
            {products.map((card) => (
              <Card
                key={card.id}
                card={card}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
