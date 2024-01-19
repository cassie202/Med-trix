import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navBar">
      <div className="nav-items">
        <Link className="title" to="/">
          Med-trix
        </Link>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link className="about" to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link className="find-care" to="/findCare" onClick={toggleMenu}>
            Find Care
          </Link>
          <Link className="how-it-work" to="/how-it-works" onClick={toggleMenu}>
            How It Works
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="login-btn">Log in</button>
          </Link>
          <Link to="/signup" onClick={toggleMenu}>
            <button className="signUp-btn">SignUp</button>
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line">1</div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
