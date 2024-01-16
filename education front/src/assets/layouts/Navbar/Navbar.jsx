import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to={"/"}>
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/educature/img/logo.png.webp"
              alt=""
            />
          </div>
        </Link>
        <div className="list">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/add"}>Add Page</NavLink>
          <NavLink to={"/basket"}>Basket</NavLink>
          <NavLink to={"/wishlist"}>Wishlist</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
