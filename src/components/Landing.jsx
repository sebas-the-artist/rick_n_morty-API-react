import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../components/SearchContext";

import PortalCircle from "../assets/portal-circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

function Landing() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(searchTerm || "");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") return; // avoid empty searches
    setSearchTerm(inputValue);
    navigate("/Explore");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <section id="intro__landing">
      <header>
        <div className="intro__landing">
          <div className="news__bar">
            <p className="news__bar--p">
              "I'm sorry, Morty, it's a bummer... in reality you're as dumb as
              they come... and I needed those seeds REAL bad and I had to give
              them up; just to get your PARENTS off my back. So now we're gonna
              have to go get more. And then we're gonna go on even MORE
              adventures after that, Morty. And you're gonna keep your MOUTH
              SHUT about it, Morty... because the world is full of idiots that
              don't understand what's important. And they'll TEAR us apart,
              Morty!! But if you stick with me, I'm gonna accomplish great
              things, Morty, and you're gonna be part of 'em. And together we're
              gonna run around, Morty, we're gonna... do all kinds of wonderful
              things, Morty. Just you and me, Morty. The outside world is our
              enemy, Morty... we're the only... friends we've got, Morty! It's
              just Rick and Morty. Rick and Morty and their adventures, Morty..
              RICK AND MORTY FOREVER AND FOREVER A HUNDRED YEARS Rick and
              Morty.. some...things.. Me and Rick and Morty runnin' around
              and... Rick and Morty time... a- all day long forever.. all a - a
              hundred days Rick and Morty! forever a hundred times.... OVER and
              over Rick and Morty... adventures dot com.. W W W dot at Rick and
              Morty dot com w..w..w... Rick and Morty adventures.. ah- hundred
              years... every minute Rick and Morty dot com.... w w w a hundred
              times... Rick and Morty dot com......."
            </p>
          </div>
          <h1 className="intro__header">A Complete Character Guide</h1>
        </div>

        {/* Search section */}
        <div className="intro__landing__search--bar--wrapper">
          <input
            type="text"
            className="intro__landing__search--bar"
            id="searchInput"
            placeholder="Mr. Meeseeks"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // detect Enter key
          />

          <Link
            to="/Explore"
            className="intro__landing__search--btn"
            id="searchBtn"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faPersonRunning} />
            <img
              src={PortalCircle}
              className="intro__landing__search--portal"
            />
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Landing;

/* import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { SearchContext } from "../components/SearchContext";

function Landing() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(searchTerm || "");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  return (
    <section id="intro__landing">
      <header>
        <div className="intro__landing">
          <div className="news__bar">
            <p className="news__bar--p">
            "I'm sorry, Morty, it's a bummer... in reality you're as dumb as
            they come... and I needed those seeds REAL bad and I had to give
            them up; just to get your PARENTS off my back. So now we're gonna
            have to go get more. And then we're gonna go on even MORE
            adventures after that, Morty. And you're gonna keep your MOUTH
            SHUT about it, Morty... because the world is full of idiots that
              don't understand what's important. And they'll TEAR us apart,
              Morty!! But if you stick with me, I'm gonna accomplish great
              things, Morty, and you're gonna be part of 'em. And together we're
              gonna run around, Morty, we're gonna... do all kinds of wonderful
              things, Morty. Just you and me, Morty. The outside world is our
              enemy, Morty... we're the only... friends we've got, Morty! It's
              just Rick and Morty. Rick and Morty and their adventures, Morty..
              RICK AND MORTY FOREVER AND FOREVER A HUNDRED YEARS Rick and
              Morty.. some...things.. Me and Rick and Morty runnin' around
              and... Rick and Morty time... a- all day long forever.. all a - a
              hundred days Rick and Morty! forever a hundred times.... OVER and
              over Rick and Morty... adventures dot com.. W W W dot at Rick and
              Morty dot com w..w..w... Rick and Morty adventures.. ah- hundred
              years... every minute Rick and Morty dot com.... w w w a hundred
              times... Rick and Morty dot com......."
              
              </p>
              </div>
              <h1 className="intro__header">A Complete Character Guide</h1>
              
              </div>
              <div className="intro__landing__search--bar--wrapper">
          <input
            type="text"
            className="intro__landing__search--bar"
            id="searchInput"
            placeholder="morty"
            value={inputValue}
            onChange={handleChange}
            />
          <Link
            to="/Explore"
            className="intro__landing__search--btn"
            id="searchBtn"
            onClick={handleSearch}
            >
            o3o
          </Link>
        </div>
       
          </header>
          </section>
        );
}

export default Landing;
 */
{
  /* And the other thing is, my sister had a baby and I took it over
        after she passed away and the baby lost all its legs and arms and
        now its just a stump but I take care of it with my wife and... and
        its growing and its fairly happy... and its difficult because I'm
        working a second shift at the factory to put food on the table but
        all the love that I see in that little guy's face it makes it
        worth it in the end. */
}
