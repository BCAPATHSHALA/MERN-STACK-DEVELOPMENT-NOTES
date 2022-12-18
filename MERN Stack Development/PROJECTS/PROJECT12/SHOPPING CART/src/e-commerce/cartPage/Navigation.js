import React from "react";
import { Link } from "react-router-dom";
import "./NavigationLink.css";

function Navigation() {
  return (
    <nav className="navbar-link">
      <ul>
        <li>
          <Link className="link shopping" to="/productList">
            <i class="fa-solid fa-cart-shopping"></i> Shopping
          </Link>
          <Link className="link cart" to="/cartPage">
            <i class="fa-solid fa-cart-shopping"></i> Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
