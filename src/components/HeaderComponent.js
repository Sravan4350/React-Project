import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";

const HeaderComponent = () => {
  const [login, setLogin] = useState(false);
  const btnName = login ? "Logout" : "Login";

  const onlineStatus = useStatusOnline();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://res.cloudinary.com/drt0bwjjb/image/upload/v1754930649/Food_Logo_newrvn.png"
            alt="Logo"
          />
          <h1 className="text-xl font-bold text-gray-800">Foodie</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            
            {/* Online Status */}
            <li className="flex items-center gap-1">
              <span className="text-lg">
                {onlineStatus ? "🟢" : "🔴"}
              </span>
              <span className="text-sm hidden md:inline">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </li>

            <li>
              <Link to="/" className="hover:text-orange-500 transition duration-200">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-orange-500 transition duration-200">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-500 transition duration-200">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-orange-500 transition duration-200">
                Cart 🛒
              </Link>
            </li>

            <li>
              <Link to="/grocery" className="hover:text-orange-500 transition duration-200">
                Instamart
              </Link>
            </li>

            {/* Login Button */}
            <li>
              <button
                className="hover:text-orange-500 bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-600 transition duration-200"
                onClick={() => setLogin(!login)}
              >
                {btnName}
              </button>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;