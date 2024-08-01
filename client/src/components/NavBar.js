<<<<<<< HEAD
// client/src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Car Rental Logo" className="logo" />
        <span>Car Rental</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
=======
// client/src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Car Rental Logo" className="logo" />
        <span>Car Rental</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
>>>>>>> c342c0499b682941d4d2bb302fd5f6920adce68e
