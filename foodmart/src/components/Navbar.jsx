import React from "react";
import logo from "../assets/logo-1.png";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="left-nav">
        <img src={logo} alt="Foodmart Logo" />
      </div>

      <div className="navbar-center">
        <div className="search-bar">
          <i className="fa-solid fa-chevron-down"></i>
          <input type="text" placeholder="Search more than 20,000 products" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="right-nav">
        <h4>For Support?</h4>
        <p><b>+91 090909090</b></p>
      </div>

      <div className="icons">
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}
