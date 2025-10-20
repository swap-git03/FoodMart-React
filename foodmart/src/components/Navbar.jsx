import React, { useContext } from "react";
import { ThemeContext } from "../App"; // import ThemeContext from App.jsx
import logo from "../assets/logo-1.png";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Correct destructuring

  return (
    <div className={`nav ${theme}`}>
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
        <p>
          <b>+91 090909090</b>
        </p>
      </div>

      <button
        onClick={toggleTheme}
        style={{
          border: "none",
          background: "none",
          fontSize: "24px",
          cursor: "pointer",
          marginLeft: "15px",
          color: theme === "light" ? "white" : "yellow",
        }}
      >
        {theme === "light" ? (
          <i className="fa-solid fa-toggle-off"></i>
        ) : (
          <i className="fa-solid fa-toggle-on"></i>
        )}
      </button>

      <div className="icons">
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}

export default Navbar;
