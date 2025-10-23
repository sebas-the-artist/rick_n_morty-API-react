import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleHalfStroke,
  faPersonRunning,
  faPersonFalling,
} from "@fortawesome/free-solid-svg-icons";

import PortalCircle from "../assets/portal-circle.png";

const DetailBack = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleBack = () => {
    navigate("/Explore");
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark__mode");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="detail__back--wrapper">
      <div className="detail__back">
        <button
          className="detail__button back__button"
          onClick={handleBack}
          aria-label="Go back to Explore"
        >
          {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
          <div className="falling">
            <FontAwesomeIcon icon={faPersonFalling} />
          </div>
          <img src={PortalCircle} className="detail__back--portal" />
        </button>

        <button
          className="detail__button dark__mode"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" /> */}
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </button>
      </div>
    </div>
  );
};

export default DetailBack;

/* import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const DetailBack = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleBack = () => {
    navigate("/Explore");
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark__mode");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="detail__back">
      <button
        className="detail__button back__button"
        onClick={handleBack}
        aria-label="Go back to Explore"
      >
        <i className="fa-solid fa-circle-xmark"></i>
        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
      </button>

      <button
        className="detail__button dark__mode"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
      </button>
    </div>
  );
};

export default DetailBack; */

/* import React from "react";

const DetailBack = () => {
  return <p>hello</p>;
};

export default DetailBack;
 */
