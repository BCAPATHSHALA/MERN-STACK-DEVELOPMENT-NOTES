import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about" state={{ myKey: "important data" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
