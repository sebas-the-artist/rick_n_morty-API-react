import React, { useEffect, useState, useRef } from "react";
import Landing from "../components/Landing";
import gazeBg from "../assets/looking-up.jpg";
import carship from "../assets/carship.png";

const FOLLOWER_COUNT = 5;
const VERTICAL_OFFSET = 20; // pixels above the cursor

const Home = () => {
  const [positions, setPositions] = useState(
    Array(FOLLOWER_COUNT).fill({ x: 0, y: 0 })
  );
  const homeRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followersPos = useRef(Array(FOLLOWER_COUNT).fill({ x: 0, y: 0 }));

  const homeStyle = {
    backgroundImage: `url(${gazeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "92vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const animate = () => {
    const newPos = [];

    newPos[0] = {
      x: mousePos.current.x,
      y: mousePos.current.y,
    };

    for (let i = 1; i < FOLLOWER_COUNT; i++) {
      const prev = followersPos.current[i - 1];
      const current = followersPos.current[i];

      const dx = prev.x - current.x;
      const dy = prev.y - current.y;

      newPos[i] = {
        x: current.x + dx * 0.1, // slower follow speed
        x: current.x + dx * 0.2,
        y: current.y + dy * 0.1,
        y: current.y + dy * 0.2,
      };
    }

    followersPos.current = newPos;
    setPositions(newPos);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      const rect = homeRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const homeElem = homeRef.current;
    homeElem.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      homeElem.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="home" style={homeStyle} ref={homeRef}>
      {positions.map((pos, i) => (
        <img
          key={i}
          src={carship}
          alt="carship follower"
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y - VERTICAL_OFFSET, // offset applied here
            width: 60,
            height: 60,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            opacity: 1 - i * 0.15,
            transition: "opacity 0.2s",
          }}
        />
      ))}
      <Landing />
    </div>
  );
};

export default Home;

//before the vertical offset mouse follower effect
/* import React, { useEffect, useState, useRef } from "react";
import Landing from "../components/Landing";
import gazeBg from "../assets/looking-up.jpg";
import carship from "../assets/carship.png";

const FOLLOWER_COUNT = 5;

const Home = () => {
  const [positions, setPositions] = useState(
    Array(FOLLOWER_COUNT).fill({ x: 0, y: 0 })
  );
  const homeRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followersPos = useRef(Array(FOLLOWER_COUNT).fill({ x: 0, y: 0 }));

  const homeStyle = {
    backgroundImage: `url(${gazeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "90vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const animate = () => {
    const newPos = [];

    newPos[0] = {
      x: mousePos.current.x,
      y: mousePos.current.y,
    };

    for (let i = 1; i < FOLLOWER_COUNT; i++) {
      const prev = followersPos.current[i - 1];
      const current = followersPos.current[i];

      const dx = prev.x - current.x;
      const dy = prev.y - current.y;

      newPos[i] = {
        x: current.x + dx * 0.1, // slower follower speed here (0.1)
        y: current.y + dy * 0.1,
      };
    }

    followersPos.current = newPos;
    setPositions(newPos);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      const rect = homeRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const homeElem = homeRef.current;
    homeElem.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      homeElem.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="home" style={homeStyle} ref={homeRef}>
      {positions.map((pos, i) => (
        <img
          key={i}
          src={carship}
          alt="carship follower"
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: 30,
            width: 60,
            height: 60,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            opacity: 1 - i * 0.15,
            transition: "opacity 0.2s",
          }}
        />
      ))}
      <Landing />
    </div>
  );
};

export default Home;
 */

//this is the same thing but with lil white dots instead of carships
/*
 import React, { useEffect, useState, useRef } from "react";
import Landing from "../components/Landing";
import gazeBg from "../assets/looking-up.jpg";

const FOLLOWER_COUNT = 5;

const Home = () => {
  const [positions, setPositions] = useState(
    Array(FOLLOWER_COUNT).fill({ x: 0, y: 0 })
  );
  const homeRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followersPos = useRef(Array(FOLLOWER_COUNT).fill({ x: 0, y: 0 }));

  const homeStyle = {
    backgroundImage: `url(${gazeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "90vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const animate = () => {
    const newPos = [];

    newPos[0] = {
      x: mousePos.current.x,
      y: mousePos.current.y,
    };

    for (let i = 1; i < FOLLOWER_COUNT; i++) {
      const prev = followersPos.current[i - 1];
      const current = followersPos.current[i];

      const dx = prev.x - current.x;
      const dy = prev.y - current.y;

      newPos[i] = {
        x: current.x + dx * 0.2,
        y: current.y + dy * 0.2,
      };
    }

    followersPos.current = newPos;
    setPositions(newPos);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      const rect = homeRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const homeElem = homeRef.current;
    homeElem.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      homeElem.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="home" style={homeStyle} ref={homeRef}>
      {positions.map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: 10,
            height: 10,
            backgroundColor: `rgba(255, 255, 255, ${1 - i * 0.15})`,
            backgroundColor: `rgba(255, 255, 255, ${1 - i * 0.15})`,
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            transition: "background-color 0.2s",
          }}
        />
      ))}
      <Landing />
    </div>
  );
};

export default Home;
 */
//
//
//before the mouse follower effect
/* // src/pages/Home.jsx
import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
// import Highlights from "../components/Highlights";
// import Features from "../components/Featured";
// import Featured from "../components/Featured";
// import Discounted from "../components/Discounted";
// import Explore from "../components/Explore";

//import spaceBg from "../assets/space__bg.jpeg"; // Adjust path if needed
import gazeBg from "../assets/looking-up.jpg"; // Adjust path if needed

const Home = () => {
  const homeStyle = {
    backgroundImage: `url(${gazeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    //minHeight: "100vh",
    height: "90vh",
    width: "100%",
  };

  return (
    <div className="home" style={homeStyle}>
      <Landing />
    </div>
  );
};

export default Home;
 */

/* import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
//import Highlights from "../components/Highlights";
//import Features from "../components/Featured";
//import Featured from "../components/Featured";
//import Discounted from "../components/Discounted";
//import Explore from "../components/Explore";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Landing />
      </div>
    </div>
  );
};

export default Home;
 */
