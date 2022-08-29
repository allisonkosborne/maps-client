import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { MonsterSpottingCard } from "./components/monsterspotting/MonsterSpottingCard";
import { MonsterSpottingList } from "./components/monsterspotting/MonsterSpottingList";
import { SpeciesList } from "./components/species/SpeciesList";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <Route exact path="/">
          <MonsterSpottingList />
          <SpeciesList />
        </Route>
      </main>
    </>
  );
};

// FILL IN ROUTE PATH AFTER GETTING HELP WITH MONSTER SPOTTING ON THE SERVER SIDE

// LIST NEED TO BE CHANGED
