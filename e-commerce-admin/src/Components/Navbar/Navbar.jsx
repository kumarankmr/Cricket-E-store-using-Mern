import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className="nav-logo nav-name"
      >
        <h2>Cricket E-Store</h2>
        <p>Admin panel</p>
      </Link>
     
    </div>
  );
}

export default Navbar
