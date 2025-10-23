import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import DetailBack from "../components/DetailBack";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [firstSeen, setFirstSeen] = useState(null);
  const [lastSeen, setLastSeen] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);

        const episodeIds = data.episode
          .slice(0, 4)
          .map((url) => url.split("/").pop());

        if (episodeIds.length > 0) {
          fetch(
            `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
          )
            .then((res) => res.json())
            .then((episodesData) =>
              setEpisodes(
                Array.isArray(episodesData) ? episodesData : [episodesData]
              )
            );
        }

        if (data.episode.length > 0) {
          const firstEpUrl = data.episode[0];
          const lastEpUrl = data.episode[data.episode.length - 1];

          Promise.all([fetch(firstEpUrl), fetch(lastEpUrl)])
            .then(async ([firstRes, lastRes]) => {
              const firstEp = await firstRes.json();
              const lastEp = await lastRes.json();
              setFirstSeen(firstEp);
              setLastSeen(lastEp);
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="detail">
      {/* Insert your back + dark mode toggle button here */}
      <DetailBack />

      <div className="detail__wrapper">
        {/* Name centered on top */}
        <div className="detail__name--wrapper">
          <h2>{character.name}</h2>
          {character.type && <h3 className="detail__type">{character.type}</h3>}
        </div>

        {/* Main content flex container */}
        <div className="detail__content">
          {/* Left side: vertical stack of image then episodes */}
          <div className="detail__left">
            <img
              src={character.image}
              alt={character.name}
              className="detail__img"
            />

            <div className="detail__episodes">
              <h3 className="detail__episodes--header">
                Episodes Appeared In (First 4):
              </h3>
              <ul>
                {episodes.map((ep) => (
                  <li key={ep.id}>
                    {ep.episode} - {ep.name} ({ep.air_date})
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side: character info */}
          <div className="detail__right">
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Status:</strong> {character.status}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin?.name || "Unknown"}
            </p>
            <p>
              <strong>Last Seen At:</strong>{" "}
              {character.location?.name || "Unknown"}
            </p>
            {lastSeen && (
              <p>
                <strong>Last Appearence:</strong> {lastSeen.episode} -{" "}
                {lastSeen.name} {/* ({lastSeen.air_date}) */}
              </p>
            )}
          </div>
        </div>

        <div className="detail__about">
          <h2>About {character.name}</h2>
          <p>
            {character.name} is a(n) {character.species} character originally
            from {character.origin?.name || "Unknown"}. Known for something cool
            probably if you're reading about them, the database I used doesn't
            have a bio so I'm "mad libbing" it. {character.name} first appeared
            in the episode "{firstSeen?.name || "Unknown"}" way back on{" "}
            {firstSeen?.air_date || "Unknown"}.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;

//beforeadding the dark mode to the detail page
/* import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import DetailBack from "../components/DetailBack";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [firstSeen, setFirstSeen] = useState(null);
  const [lastSeen, setLastSeen] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);

        const episodeIds = data.episode
          .slice(0, 4)
          .map((url) => url.split("/").pop());

        if (episodeIds.length > 0) {
          fetch(
            `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
          )
            .then((res) => res.json())
            .then((episodesData) =>
              setEpisodes(
                Array.isArray(episodesData) ? episodesData : [episodesData]
              )
            );
        }

        if (data.episode.length > 0) {
          const firstEpUrl = data.episode[0];
          const lastEpUrl = data.episode[data.episode.length - 1];

          Promise.all([fetch(firstEpUrl), fetch(lastEpUrl)])
            .then(async ([firstRes, lastRes]) => {
              const firstEp = await firstRes.json();
              const lastEp = await lastRes.json();
              setFirstSeen(firstEp);
              setLastSeen(lastEp);
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="detail">
      <DetailBack />
      <div className="detail__wrapper">
    
        <div className="detail__name--wrapper">
          <h2>{character.name}</h2>
          {character.type && <h3 className="detail__type">{character.type}</h3>}
        </div>

       
        <div className="detail__content">
          
          <div className="detail__left">
            <img
              src={character.image}
              alt={character.name}
              className="detail__img"
            />

            <div className="detail__episodes">
              <h3>Episodes Appeared In (First 4):</h3>
              <ul>
                {episodes.map((ep) => (
                  <li key={ep.id}>
                    {ep.episode} - {ep.name} ({ep.air_date})
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail__right">
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Status:</strong> {character.status}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Last Seen At:</strong> {character.location.name}
            </p>
            {lastSeen && (
              <p>
                <strong>Last Seen In:</strong> {lastSeen.episode} -{" "}
                {lastSeen.name} ({lastSeen.air_date})
              </p>
            )}
          </div>
        </div>

        <div className="detail__about">
          <h2>About {character.name}</h2>
          <p>
            {character.name} is a(n) {character.species} character originally
            from {character.origin?.name || "Unknown"}. Known for something cool
            probably if you're reading about them, the database I used doesn't
            have a bio so I'm "mad libbing" it. {character.name} first appeared
            in the episode "{firstSeen?.name || "Unknown"}" way back on{" "}
            {firstSeen?.air_date || "Unknown"}.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
 */
//
//
//

// before improving the css
/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [firstSeen, setFirstSeen] = useState(null);
  const [lastSeen, setLastSeen] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);

        // Get episode IDs, but only first 4 for the episode list
        const episodeIds = data.episode
          .slice(0, 4)
          .map((url) => url.split("/").pop());

        // Fetch only first 4 episodes
        if (episodeIds.length > 0) {
          fetch(
            `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
          )
            .then((res) => res.json())
            .then((episodesData) => {
              setEpisodes(
                Array.isArray(episodesData) ? episodesData : [episodesData]
              );
            });
        }

        // Fetch first and last full episode info
        if (data.episode.length > 0) {
          const firstEpUrl = data.episode[0];
          const lastEpUrl = data.episode[data.episode.length - 1];

          Promise.all([fetch(firstEpUrl), fetch(lastEpUrl)])
            .then(async ([firstRes, lastRes]) => {
              const firstEp = await firstRes.json();
              const lastEp = await lastRes.json();
              setFirstSeen(firstEp);
              setLastSeen(lastEp);
            })
            .catch((err) =>
              console.error("Error fetching episode details:", err)
            );
        }
      })
      .catch((err) => console.error("Error fetching character details:", err));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="detail">
      <div className="detail__wrapper">
        <div className="detail__name--wrapper">
          <h2>{character.name}</h2>
          <h2>{character.type}</h2>
        </div>
        <div className="detail__img--details--wrapper">
          <div style={{ padding: "20px" }}>
            <div className="detailed__img">
              <img
                src={character.image}
                alt={character.name}
                style={{ borderRadius: "10px", marginBottom: "1rem" }}
              />
            </div>
            <div className="detailed__details">
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Status:</strong> {character.status}
              </p>
              <p>
                <strong>Species:</strong> {character.species}
              </p>
              <p>
                <strong>Origin:</strong> {character.origin.name}
              </p>
              <p>
                <strong>Last Seen At:</strong> {character.location.name}
              </p>
            </div>
          </div>

          <div className="detail__episodes">
            <h3>Episodes Appeared In (First 4):</h3>
            <ul>
              {episodes.map((ep) => (
                <li key={ep.id}>
                  {ep.episode} - {ep.name} ({ep.air_date})
                </li>
              ))}
            </ul>
            <br />

            {firstSeen && (
              <p>
                <strong>First Seen In:</strong> {firstSeen.episode} -{" "}
                {firstSeen.name} ({firstSeen.air_date})
              </p>
            )}

            {lastSeen && (
              <p>
                <strong>Last Seen In:</strong> {lastSeen.episode} -{" "}
                {lastSeen.name} ({lastSeen.air_date})
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail; */

//befor eadding the first and last episodes
/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);

        // Only take the first 4 episode URLs
        const episodeIds = data.episode
          .slice(0, 4)
          .map((url) => url.split("/").pop());

        // Fetch those episodes
        if (episodeIds.length > 0) {
          fetch(
            `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
          )
            .then((res) => res.json())
            .then((episodesData) => {
              setEpisodes(
                Array.isArray(episodesData) ? episodesData : [episodesData]
              );
            });
        }
      })
      .catch((err) => console.error("Error fetching character details:", err));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Last Seen: {character.location.name}</p>

      <h3>Episodes Appeared In (first 4):</h3>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id}>
            {ep.episode} - {ep.name} ({ep.air_date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail; */

//before adding the apisodes- capped them at 4
/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch(() => setCharacter(null));
  }, [id]);

  if (!character) return <p>Loading character details...</p>;

  return (
    <div className="character-detail">
      <div className="detail__wrapper">
        <div className="detail__img--wrapper">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="detail__info--wrapper">
          <h2 className="detail__name detail__info">{character.name}</h2>
          <p className="detail__info">Status: {character.status}</p>
          <p className="detail__info">Species: {character.species}</p>
          <p className="detail__info">Gender: {character.gender}</p>
          <p className="detail__info">Origin: {character.origin.name}</p>
          <p className="detail__info">Location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
 */
