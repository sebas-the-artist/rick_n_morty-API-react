import React, { useState } from "react";
import Logo from "../assets/logo.png";
import spaceBg from "../assets/space__bg.jpeg";
import PortalCircle from "../assets/portal-circle.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = {
    width: "100%",
    backgroundImage: `url(${spaceBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 3,
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section id="nav" style={navStyle}>
      <nav className="nav__container">
        <div className="nav__wrapper">
          <Link to="/">
            <img src={Logo} alt="Logo" className="nav__logo" />
          </Link>

          {/* Desktop nav links */}
          <div className="nav__links nav__links--desktop">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <Link to="/Explore" className="nav__link">
              Explore
            </Link>
            <Link to="/Explore" className="nav__link">
              Wander
            </Link>
          </div>

          {/* Mobile menu icon */}
          <button
            className="nav__menu-icon"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <img src={PortalCircle} alt="Menu icon" />
          </button>
        </div>

        {/* Mobile menu modal */}
        {menuOpen && (
          <div className="nav__modal" onClick={toggleMenu}>
            <div
              className="nav__modal-content"
              style={{ backgroundImage: `url(${PortalCircle})` }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link to="/" className="nav__modal-link" onClick={toggleMenu}>
                Home
              </Link>
              <Link
                to="/Explore"
                className="nav__modal-link"
                onClick={toggleMenu}
              >
                Explore
              </Link>
              <Link
                to="/Explore"
                className="nav__modal-link"
                onClick={toggleMenu}
              >
                Wander
              </Link>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Nav;

//before adding a dropdown menu for nav links
/* import React from "react";
import Logo from "../assets/logo.png";
import spaceBg from "../assets/space__bg.jpeg";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    width: "100%",
    //paddingBottom: "10vh",
    //paddingBottom: "1vh",
    //padding: "10px 16px",
    //padding: "20px 32px",
    backgroundImage: `url(${spaceBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 3,
  };

  return (
    <section id="nav" style={navStyle}>
      <nav>
        <div className="nav__wrapper">
          <Link to="/">
            <img src={Logo} className="nav__logo" />
          </Link>
          <div className="nav__links">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <Link to="/Explore" className="nav__link">
              Explore
            </Link>
            <Link to="/Explore" className="nav__link">
              Wander
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
 */

//
//
/* import react from "react";
import Logo from "../assets/logo.png";

import spaceBg from "../assets/space__bg.jpeg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section id="nav">
      <div>
        <nav>
          <div className="nav">
            <div className="nav__wrapper">
              <Link to="/">
                <img src={Logo} className="nav__logo" />
              </Link>
              <div className="nav__links">
                <Link to={"/"} className="nav__link">
                  Home
                </Link>
                <Link to={"/"} className="nav__link">
                  Explore
                </Link>
                <Link to={"/"} className="nav__link">
                  Wander
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
 */
