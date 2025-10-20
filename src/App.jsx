import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Explore from "./pages/Explore.jsx";
import CharacterDetail from "./pages/CharacterDetail.jsx";
/* import CharacterSearch from "./components/CharacterSearch.jsx"; */

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <CharacterSearch /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
