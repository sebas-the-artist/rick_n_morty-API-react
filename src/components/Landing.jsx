import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section id="intro__landing">
      <header>
        <div className="intro__landing">
          <div className="news__bar">
            <p className="news__bar--p">
              New Episode Released! Check out "The Ricklantis Mixup"
            </p>
          </div>
          <h1 className="intro__header">A Complete Character Guide</h1>
          <p className="intro__para">
            It's time to get Schwifty! Explore the vast multiverse of Rick and
            Morty™
          </p>
        </div>
        <div className="intro__landing__search--bar--wrapper">
          <input
            type="text"
            class="intro__landing__search--bar"
            id="searchInput"
            placeholder="morty"
          />
          <Link
            to="/Explore"
            class="intro__landing__search--btn"
            id="searchBtn"
          >
            o3o
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Landing;
