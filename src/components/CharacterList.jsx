import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(42);
  const [filter, setFilter] = useState("all"); // Tracks filter value

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  // Function to handle filter change (hook into <select> externally)
  const onFilterChange = (value) => {
    setFilter(value);
  };

  // Filtered and sorted characters based on filter state
  const filteredCharacters = characters
    .filter((character) => {
      if (filter === "all") return true;
      if (filter === "alive") return character.status.toLowerCase() === "alive";
      if (filter === "dead") return character.status.toLowerCase() === "dead";
      return true;
    })
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (filter === "A-Z") {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }
      if (filter === "Z-A") {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      }
      return 0;
    });

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      {/* Filter UI */}
      <div className="wrapper__2">
        <div className="filter__wrapper">
          <label htmlFor="filter" className="filter__header">
            Filter:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="all">All Characters</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      <div className="character-page">
        <div className="character-container">
          {filteredCharacters.map((character) => (
            <Link
              to={`/character/${character.id}`}
              key={character.id}
              className="character-card-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="character-card">
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Origin: {character.origin.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={prevPage} disabled={page === 1}>
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterList;

//before i added the detailed character page
/* 
import React, { useEffect, useState } from "react";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(42);
  const [filter, setFilter] = useState("all"); // Tracks filter value

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  // Function to handle filter change (hook into <select> externally)
  const onFilterChange = (value) => {
    setFilter(value);
  };

  // Filtered and sorted characters based on filter state
  const filteredCharacters = characters
    .filter((character) => {
      if (filter === "all") return true;
      if (filter === "alive") return character.status.toLowerCase() === "alive";
      if (filter === "dead") return character.status.toLowerCase() === "dead";
      return true;
    })
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (filter === "A-Z") {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }
      if (filter === "Z-A") {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      }
      return 0;
    });

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      // Filter UI: You can move this to a separate component 
      <div className="filter__wrapper">
        <label htmlFor="filter" className="filter__header">
          Filter:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">All Characters</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>

      <div className="character-page">
        <div className="character-container">
          {filteredCharacters.map((character) => (
            <div className="character-card" key={character.id}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button onClick={prevPage} disabled={page === 1}>
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterList; 
*/

/* 
// src/components/CharacterList.js
import React, { useEffect, useState } from "react";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(42); // API has 42 pages total

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="character-page">
      <div className="character-container">
        {characters.map((character) => (
          <div className="character-card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button onClick={nextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
 */
//before i added different pages
/* // src/components/CharacterList.js
import React, { useEffect, useState } from "react";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch characters from the Rick and Morty API
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="character-container">
      {characters.map((character) => (
        <div className="character-card" key={character.id}>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
 */
