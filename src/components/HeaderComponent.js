import React, { useState } from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {

  const [login, setLogin] = useState(false)

  const handleLogin = () => {
    setLogin(!login)
  }
  const btnName = login ? "Logout" : "Login";
  
  return (
    <div className="header-component">
      <div className="logo-container">
        <img className="logo-image" src="https://res.cloudinary.com/drt0bwjjb/image/upload/v1754930649/Food_Logo_newrvn.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact </Link>
          </li>
          <li className="nav-item">
            <Link to="/About">Cart</Link>
          </li>
          <button className="login-button" onClick={handleLogin}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}
export default HeaderComponent