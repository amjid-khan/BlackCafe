import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <p>Icon</p>
          <p>Add Item</p>
        </div>
        <div className="sidebar-option">
          <p>Icon</p>
          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <p>Icon</p>
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
