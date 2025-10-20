import React from "react";
import CharacterSearch from "../components/CharacterSearch";

const ExploreLanding = () => {
  return (
    <section id="explore">
      <div className="explore__landing--wrapper">
        <div className="explore__landing">
          <h1 className="explore__landing--header">Explore the Multiverse</h1>
          <div className="search__bar--wrapper">
            <CharacterSearch />
          </div>

          {/* <div className="search__bar--wrapper">
            <input
              type="text"
              className="explore__search--bar"
              placeholder="Hamurai"
            />
            <button className="explore__search--btn">Search</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExploreLanding;
