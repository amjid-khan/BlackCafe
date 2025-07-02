import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="for-logo">
        <h1 className='logo'>Logo</h1>
        <p>Admin Panel</p>
      </div>
      <img className='profile-image' src="/profile.jpg" alt="" />
    </div>
  )
}

export default Navbar
