import React from "react";
import "./home.css";
import Card from "../card/card";
import data from "../../data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from '../categoryCard/card'
import { AiOutlineLike } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

function Home() {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState('bestSeller');
  const [showCategory, setShowCategory] = useState([]);

  useEffect(() => {
    setProducts(data.slice(0, 8));
  }, []);

  useEffect(() => {
    const filteredItems = data.filter(item => item.category === category);
    setShowCategory(filteredItems);
  }, [category]);

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
          <Link className="showbtn" to='/shop'>
            show now
          </Link>
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
                card={card}
                /*key={card.id}
                name={card.name}
                price={card.price}
                img={card.img}
                id={card.id}
                addToCart={addToCart}*/
              />
            ))}
          </div>
          <div className="showCategory">
            <div className="switchCategory">
              <h5 className="bestSeller" onClick={()=>{setCategory('bestSeller')}}>Best Seller</h5>
              <h5 className="discount" onClick={()=>{setCategory('discount')}}>Discount</h5>
            </div>
            <div className="procards">
              {showCategory.map((item)=>(<CategoryCard key={item.id} card={item}/>))}
            </div>
          </div>
        </div>
      </section>
      <section id="new" className="py-5">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-lg-6 col-xl-6 image">
                    <img className="w-100" src="https://www.engage.veented.com/shop-classic/wp-content/uploads/sites/39/2017/04/square-6-800x640.jpg" alt=""/>
                </div>
                <div className="col-12 col-lg-6 col-xl-6 ps-5 mt-4">
                    <h2>New arrivals every week.</h2>
                    <p className="py-4">We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
                    <div>
                        <p className="d-flex align-items-center"><AiOutlineLike className="like"/> Aliquam fermentum lorem quis posuere mattis. </p>
                        <p className="d-flex align-items-center"><AiOutlineLike className="like"/> Sed mollis sapien erat id pellentesque libero. </p>
                        <p className="d-flex align-items-center"><AiOutlineLike className="like"/> Pellentesque nisl id semper bibendum. </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section id="features" className="py-5">
        <div className="container">
            <h2>Why our store?</h2>
            <p>Learn more about our great services.</p>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex flex-column align-items-center mt-5">
                    <div className="icon">
                      <FaUsers className="featureIcon"/>
                    </div>
                    <h5 className="my-3">Professional Staff</h5>
                    <p>Take a full control over all aspects of your theme with our truly extensive Options Panel.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex flex-column align-items-center mt-5">
                    <div className="icon">
                      <IoMapOutline className="featureIcon"/>
                    </div>
                    <h5 className="my-3">Great Locations</h5>
                    <p>Engage is a fully responsive and retina ready theme that scales well to all mobile devices.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex flex-column align-items-center mt-5">
                    <div className="icon">
                      <BsFillBarChartFill className="featureIcon"/>
                    </div>
                    <h5 className="my-3">Fast Results</h5>
                    <p>Build any layout you can think of with the most powerful page builder Visual Composer.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex flex-column align-items-center mt-5">
                    <div className="icon">
                      <AiOutlineLike className="featureIcon"/>
                    </div>
                    <h5 className="my-3">Satisfied Clients</h5>
                    <p>Adjust the looks of your theme with the extensive Styling panel. Possibilities are endless.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="convinced">
        <div>
            <h2>Feeling convinced?</h2>
            <p>I am a subtitle, feel free to change me!</p>
            <Link className="visitShop" to='/shop'>
            VISIT SHOP
          </Link>
        </div>
    </section>
    <section id="contact">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-12 col-lg-6 col-xl-6 ps-5">
          <h2 className="mb-4">Contact Information</h2>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <p>Our contact details:</p>
          <div>
            <p className="d-flex align-items-center"><span className="icon me-3"><FaMap className="oneicon"/></span> Manchester St 123-78B, Random 7D, UK </p>
            <p className="d-flex align-items-center"><span className="icon me-3"><FaPhone className="oneicon"/></span> +46 123 456 789 </p>
            <p className="d-flex align-items-center"><span className="icon me-3"><FaHeadphones className="oneicon"/></span> +37 431 456 789 </p>
            <p className="d-flex align-items-center"><span className="icon me-3"><FaEnvelope className="oneicon"/></span> hello@sitename.com </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6 p-0">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-7515a732 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="7515a732" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2293d129" data-id="2293d129" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-162fce53 elementor-widget elementor-widget-google_maps" data-id="162fce53" data-element_type="widget" data-widget_type="google_maps.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-custom-embed">
                        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?q=Envato%2C%20King%20Street%2C%20Melbourne%20Victoria%2C%20Australia&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
                        title="Envato, King Street, Melbourne Victoria, Australia"
                        aria-label="Envato, King Street, Melbourne Victoria, Australia">
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
