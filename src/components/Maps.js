import React from "react";
import { MonsterSpottingCard } from "./monsterspotting/MonsterSpottingCard";
import "./Maps.css";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "../ApplicationViews";

export const Maps = () => (
  <>
    <NavBar />
    <ApplicationViews />
    {/* <h2>M.A.P.S.:</h2>
    <small>Monster Amplitude and Paranormal Spectrums</small>
    <div class="spotting_intro">
      <div>Who have you seen *creeping* around the neighborhood?</div>
      <div>Let us know!</div>
    </div>
    <PropsAndState yourName="Allison" />
    <h2>Monsters</h2>
    <article className="monster_spottings">
      <MonsterSpottingCard />
      <MonsterSpottingCard />
      <MonsterSpottingCard />
    </article> */}
  </>
);
