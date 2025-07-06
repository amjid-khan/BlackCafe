import React, { Profiler, useContext, useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { IoBag } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("Token")
    setToken("")
    navigate("/")
  }
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">
          Black <span style={{ color: "crimson" ,textDecoration : "underline"}}>Cafe</span>
        </h1>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <CiSearch className="search-icon" id="icon" />
        <div className="navbar-search-icon">
          <Link to="cart">
            <HiOutlineShoppingBag className="cart-icon" id="icon" />
          </Link>
          <div className={getTotalAmount() ? "dot" : ""}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <FaUserAlt style={{ color: "white" }} className="profile-icon" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <IoBag style={{ color: "crimson" }} /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogout}>
                <IoLogOut style={{ color: "crimson" }} /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
