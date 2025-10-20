import React from "react";
import ExploreLanding from "../components/ExploreLanding";
import ExploreHeader from "../components/ExploreHeader";
import CharacterList from "../components/CharacterList";

const Explore = () => {
  return (
    <div className="explore">
      <section id="explore">
        <ExploreLanding />
        <ExploreHeader />
        <CharacterList />
      </section>
    </div>
  );
};
export default Explore;
