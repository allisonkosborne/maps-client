import React, { useState, useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { getSpecies, createSpecies } from "../../modules/SpeciesManager.js";
import { createMonsterSpottings } from "../../modules/MonsterSpottingManager.js";
// import {
//   createMonsterSpottings,
//   getGameTypes,
// } from "./modules/MonsterSpottingManager.js";

export const MonsterSpottingForm = () => {
  // const history = useHistory();
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [monsterSpotting, setMonsterSpotting] = useState({
    species: 0,
    date: "",
    time: "",
    location: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [species, setSpecies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Get the game types, then set the state
  }, []);

  const changeMonsterSpottingState = (event) => {
    const newMonsterSpotting = { ...monsterSpotting };
    let selectedVal = event.target.value;
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    newMonsterSpotting[event.target.id] = selectedVal;
    setMonsterSpotting(newMonsterSpotting);
  };
  useEffect(() => {
    getSpecies().then(setSpecies);
  }, []);

  const handleClickSaveMSForm = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const speciesId = monsterSpotting.speciesId;

    if (speciesId === 0) {
      window.alert("Please select a species");
    } else {
      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      createSpecies(species).then(() => navigate("/"));
    }
  };

  return (
    <form className="monsterSpottingForm">
      <h2 className="monsterSpotting__title">Register New Monster Spotting</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">New Monster Spotting:</label>
          <input
            type="text"
            id="name"
            onChange={changeMonsterSpottingState}
            required
            autoFocus
            className="form-control"
            placeholder="Seed name"
            value={species.name}
          />
        </div>
      </fieldset>
      <div className="container">
        <button className="btn btn-primary" onClick={handleClickSaveMSForm}>
          SOW
        </button>
      </div>

      {/* TODO: create the rest of the input fields */}

      {/* <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const monsterSpotting = {
            species: monsterSpotting.species,
            date: monsterSpotting.date,
            time: monsterSpotting.time,
            location: monsterSpotting.location,
          };

          // Send POST request to your API
          createMonsterSpottings(monsterSpotting).then(() =>
            history.push("/monster_spottings")
          );
        }}
        className="btn btn-primary"
      >
        Create
      </button> */}
    </form>
  );
};
