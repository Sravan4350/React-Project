import React, { useState } from "react";
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
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Services</li>
          <button className="login-button" onClick={handleLogin}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}
export default HeaderComponent