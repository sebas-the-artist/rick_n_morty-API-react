// src/pages/Home.jsx
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
