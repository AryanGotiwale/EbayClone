


import React, { useContext } from "react";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"; // Import AuthContext

const Header = () => {
  const navigate = useNavigate();
  const { isLogged, userName, handleLogout } = useContext(AuthContext); // Use global state

  return (
    <div>
      <div className="head">
        <NavLink to="/">
          <h1>Bexi</h1>
        </NavLink>
        <input type="text" placeholder="Search" />
        <button className="search-btn">
          <CiSearch />
        </button>
        <Link to="/cart" className="Cart-button">🛒</Link>
        <button className="sell-btn">Sell</button>

        {isLogged ? (
          <div className="user-info">
            <button className="logout_btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>

      <div className="navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><Link to="/Laptop">Laptops</Link></li>
          <li><Link to="#">Cars</Link></li>
          <li><Link to="#">Sports</Link></li>
          <li><Link to="#">Bikes</Link></li>
          <li><Link to="#">Scooters</Link></li>
          <li><Link to="#">Art and Collections</Link></li>
          <li><Link to="#">Deals</Link></li>
          <span className="user-name">Welcome, {userName || "guest"}!</span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
