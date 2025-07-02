import React from "react";
import "./Sidebar.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiCalendarCheckLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">

        <NavLink to="/add" className="sidebar-option">
          <p id="admin-icons">
            <IoIosAddCircleOutline />
          </p>
          <p id="list-name">Add Item</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-option">
          <p id="admin-icons">
            <PiCalendarCheckLight />
          </p>
          <p id="list-name">List Items</p>
        </NavLink>

        <NavLink to="/orders" className="sidebar-option">
          <p id="admin-icons">
            <PiCalendarCheckLight />
          </p>
          <p id="list-name">Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
