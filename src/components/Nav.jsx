import React from "react";
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
            <Link to="/" className="nav__link">
              Explore
            </Link>
            <Link to="/" className="nav__link">
              Wander
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;

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
