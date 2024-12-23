import React from "react";
import "./cart.css";
import { NavLink, useNavigate } from "react-router-dom";
import data from "../../data.json";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart
} from "../../store/slices/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Map cart items with product details
  const cartProducts = cartItems.map((item) => {
    const product = data.find((p) => p.id === item.productId);
    return { ...product, quantity: item.quantity };
  });

  // Navigate back to shop
  const returnToShop = () => navigate("/shop");

  return (
    <section id="cart">
      <div className="bg-cart ">
        <div className="container d-flex justify-content-between align-items-center">
          <h3>Cart</h3>
          <div className="d-flex">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>{" "}
            / <span className="ms-1"> Cart</span>
          </div>
        </div>
      </div>

      <div className="container">
        {cartProducts.length > 0 ? (
          <div className="cart-items">
            {cartProducts.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.img} alt={product.name} />
                <div className="cart-item-details">
                  <h4>{product.name}</h4>
                  <p>Price: ${product.price}</p>
                  <p>Total: ${product.price * product.quantity}</p>
                  <div className="quantity-controls">
                    <button
                      className="btn btn-sm btn-outline-primary rounded-circle"
                      onClick={() => dispatch(decrementQuantity(product.id))}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-primary rounded-circle"
                      onClick={() => dispatch(incrementQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-sm remove-btn w-100 mt-2"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : <></>
        }
        {cartProducts.length>0? <button onClick={()=>dispatch(clearCart())} className="mt-5">Reset Cart</button>:
          <><p className="empty">Your cart is empty!</p><button onClick={returnToShop}>Return to shop</button></>
        }
      </div>
    </section>
  );
}

export default Cart;
