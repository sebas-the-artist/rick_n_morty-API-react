import React from "react";

const ExploreHeader = ({ onFilterChange }) => {
  return (
    <section id="explore__header">
      <div className="explore__header--wrapper">
        {/* <div className="filter__wrapper">
          <h4 className="filter__header">FILTER:</h4>

          <select id="filter" onChange={(e) => onFilterChange(e.target.value)}>
            <option value="all">All Characters</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div> */}
      </div>
    </section>
  );
};

export default ExploreHeader;

//before i made the filter functional
/* import React from "react";

const ExploreHeader = () => {
  return (
    <section id="explore__header">
      <div className="explore__header--wrapper">
        <div className="filter__wrapper">
          <h4 classN="filter__header">FILTER:</h4>

          <select id="filter">
            <option value="all">All Characters</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ExploreHeader;
 */
