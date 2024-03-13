import React, { useState } from 'react'; 
import { NavLink, Link } from 'react-router-dom';
import logo from "./img/logo.png";
import "./_header.scss";

function Header() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {setActive(!isActive);};

  return (
    <header>
      <div className={isActive ? "wrapper container active" : "wrapper container"}>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div
          onClick={toggleClass}
          className={`burger ${isActive ? 'active' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`${isActive ? 'active' : ''}`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/tvshow">TV Show</NavLink></li>
            <li><NavLink to="/celebrities">Celebrities</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/wishlist">Wishlist</NavLink></li>
          </ul>
        </nav>
        <div className="btn">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
