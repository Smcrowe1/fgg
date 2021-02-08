import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [stickNav, setStickyNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    });
  });
  return (
    <nav className={`navigation ${stickNav ? "sticky" : ""}`}>
      <Link to="/" className="brand">
        Federal grant
      </Link>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <a href="#aboutus">About us</a>
            <Link to="/claim-funds">Claim funds</Link>
            <Link to="/beneficiary-list">Beneficiary list</Link>
            <a href="#testimony">Testimony</a>
          </li>
        </ul>
      </div>
      <div
        className="burger"
        onClick={() => {
          setShowNav(true);
        }}
      >
        <div />
        <div />
        <div />
      </div>
      <div className={`mobile-link ${showNav ? "show" : ""}`}>
        <button className="close-nav" onClick={() => setShowNav(false)}>
          &times;
        </button>
        <ul>
          <li>
            <a href="#home" onClick={() => setShowNav(false)}>
              Home
            </a>
            <a href="#aboutus" onClick={() => setShowNav(false)}>
              About us
            </a>
            <a href="#f" onClick={() => setShowNav(false)}>
              Our Service
            </a>
            <a href="#contact" onClick={() => setShowNav(false)}>
              Contact
            </a>
            <a href="#testimony" onClick={() => setShowNav(false)}>
              Testimony
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
