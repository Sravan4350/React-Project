import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStatusOnline from  "../utils/useStatusOnline";
// Link is used to navigate between different routes in a React application without reloading the page.
// It is similar to an anchor (<a>) tag in HTML but is specifically designed for React Router.
// It helps in creating a single-page application (SPA) experience.
// If we anchor tag is used, it reloads the entire page, whereas Link updates the URL and renders the new component without a full page reload.
// It prevents the unnecessary loading time and provides a smoother user experience.

const HeaderComponent = () => {

  const [login, setLogin] = useState(false)
  const btnName = login ? "Logout" : "Login";

  const onlineStatus = useStatusOnline();
  
  return (
    <div className="header-component">
      <div className="logo-container">
        <img className="logo-image" src="https://res.cloudinary.com/drt0bwjjb/image/upload/v1754930649/Food_Logo_newrvn.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">
            <span>{onlineStatus ? "🟢" : "🔴"}</span>
          </li>
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
          <li className="nav-item">
            <Link to="/grocery">Instamart</Link>
          </li>
          <button className="login-button" onClick={() => setLogin(!login)}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}
export default HeaderComponent