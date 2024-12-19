import React from "react";
import "./home.css";
import Card from "../card/card";
import data from "../../data.json";
import { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.slice(0, 8));
  }, []);
  return (
    <>
      <div id="home">
        <div className="container">
          <p className="text-capitalize">Welcome to</p>
          <h1>Elegant Shop</h1>
          <p>
            We're the biggest, best equipped and most advanced Web Agency in{" "}
            <br /> the greater Los Angeles area.
          </p>
          <a className="showbtn" href="#new-arrivals">
            show now
          </a>
        </div>
      </div>
      <section id="new-arrivals" className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-8 text-center sectitle">
              <h2>New Arrivals</h2>
              <p>
                Nunc id ante quis tellus faucibus dictum in eget metus. Duis
                suscipit elit sem, sed mattis tellus accumsan eget. Quisque
                consequat venenatis rutrum. Quisque posuere enim augue, in
                rhoncus diam dictum non. Etiam mollis pulvinar nisl.
              </p>
            </div>
          </div>
          <div className="procards">
            {products.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                price={card.price}
                img={card.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
