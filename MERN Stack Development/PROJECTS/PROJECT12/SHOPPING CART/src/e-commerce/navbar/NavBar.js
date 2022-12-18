import React from "react";
import "./NavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cart = useSelector((state) => state.cartReducer.cart);

  let count = 0;
  cart.forEach((item) => {
    count += item.quantity;
  });

  return (
    <nav className="topNavbar">
      <div className="banner">
        <h2><i class="fa-solid fa-shirt"></i>My Myntra</h2>
      </div>
      <div className="right-layout">
        <div className="cart-layout">
          <ul>
            <li>
              <Link to="/cartPage">
                <AiOutlineShoppingCart className="cartIcon" />
              </Link>
            </li>
          </ul>
          <h3>{count}</h3>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
