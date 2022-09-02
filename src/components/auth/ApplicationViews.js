import React from "react";
import { Route, Routes } from "react-router-dom";
import { Maps } from "../Maps";
import { MonsterUserCard } from "../monster_user/MonsterUserCard";
import { MonsterUserList } from "../monster_user/MonsterUserList";
import { MonsterSpottingForm } from "../monster_spotting/MonsterSpottingForm";
import { MonsterSpottingList } from "../monster_spotting/MonsterSpottingForm";
import { MonsterSpottingCard } from "../monster_spotting/MonsterSpottingCard";
import { SpottingsEditForm } from "../monster_spotting/SpottingsEditForm";
import { SpeciesEditForm } from "../species/SpeciesEditForm";
import { SpeciesForm } from ".../species/SpeciesForm";
import { SpeciesList } from "../species/SpeciesList";
import { LocationList } from "../location/LocationList";

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Maps />} />
        <h1>Welcome to M.A.P.S.</h1>
        <Route exact path="/species">
          <SpeciesList />
        </Route>
        <Route exact path="/speciesnew">
          <SpeciesForm />
        </Route>
        <Route exact path="/speciesedit/:id">
          <SpeciesEditForm />
        </Route>
        <Route exact path="/users">
          <MonsterUserList />
        </Route>
        <Route exact path="/spottings">
          <MonsterSpottingList />
        </Route>
        <Route exact path="/spottingsnew">
          <MonsterSpottingForm />
        </Route>
        <Route exact path="/spottingsedit/:id">
          <SpottingsEditForm />
        </Route>
        <Route exact path="/locations">
          <LocationList />
        </Route>
        {/* <Route exact path="/categories">
        <CategoryList />
      </Route> */}
      </Routes>
    </>
  );
};
