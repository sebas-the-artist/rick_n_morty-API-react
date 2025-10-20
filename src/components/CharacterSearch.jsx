import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function CharacterSearch() {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(
    debounce((searchTerm) => {
      if (!searchTerm) {
        setCharacters([]);
        setLoading(false);
        setError(null);
        return;
      }
      setLoading(true);
      fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
        .then((res) => {
          if (!res.ok) throw new Error("No results");
          return res.json();
        })
        .then((data) => {
          setCharacters(data.results);
          setLoading(false);
          setError(null);
        })
        .catch(() => {
          setCharacters([]);
          setLoading(false);
          setError("No characters found");
        });
    }, 300),
    []
  );

  useEffect(() => {
    fetchCharacters(query);
  }, [query, fetchCharacters]);

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  return (
    <div
      style={{ maxWidth: 600, margin: "auto" }}
      className="character__search--wrapper"
    >
      <input
        type="text"
        placeholder="Hamurai"
        className="explore__search--bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 15,
          marginTop: 10,
        }}
        className="character__container"
      >
        {characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            style={{ textDecoration: "none", color: "inherit", width: 180 }}
          >
            <div
              style={{
                backgroundColor: "#222",
                color: "white",
                borderRadius: 10,
                padding: 10,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{ borderRadius: 10, width: "100%" }}
              />
              <h3>{character.name}</h3>
              <p>{character.status}</p>
              <p>{character.species}</p>
              <p>From: {character.origin.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CharacterSearch;

//before i made these clickable tooards that link to detailed character page
/* import React, { useState, useEffect, useCallback } from "react";
import { data } from "react-router-dom";

function CharacterSearch() {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce fetch to reduce API calls as user types
  const fetchCharacters = useCallback(
    debounce((searchTerm) => {
      if (!searchTerm) {
        setCharacters([]);
        setLoading(false);
        setError(null);
        return;
      }
      setLoading(true);
      fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
        .then((res) => {
          if (!res.ok) throw new Error("No results");
          return res.json();
        })
        .then((data) => {
          setCharacters(data.results);
          setLoading(false);
          setError(null);
        })
        .catch(() => {
          setCharacters([]);
          setLoading(false);
          setError("No characters found");
        });
    }, 300),
    []
  );

  useEffect(() => {
    fetchCharacters(query);
  }, [query, fetchCharacters]);

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <input
        type="text"
        placeholder="Hamurai"
        className="explore__search--bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}

        autoFocus
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 15,
          marginTop: 10,
        }}
        className="character__container"
      >
        {characters.map((character) => (
          <div
            key={character.id}
            style={{
              backgroundColor: "#222",
              backgroundColor: "rgb(121, 252, 111)",
              color: "white",
              color: "black",
              borderRadius: 10,
              padding: 10,
              width: 180,
              textAlign: "center",
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              style={{ borderRadius: 10, width: "100%" }}
            />
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>From: {character.origin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
console.log(data);

export default CharacterSearch; */
