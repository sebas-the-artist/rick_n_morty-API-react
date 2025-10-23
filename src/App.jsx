import "./App.css";
import { SearchProvider } from "./components/SearchContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Explore from "./pages/Explore.jsx";
import CharacterDetail from "./pages/CharacterDetail.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

/* import CharacterSearch from "./components/CharacterSearch.jsx"; */

function App() {
  return (
    <Router>
      <SearchProvider>
        <div className="App">
          <Nav />
          {/* <CharacterSearch /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;
