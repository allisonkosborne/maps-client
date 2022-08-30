import { useState } from "react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSpecies } from "./SpeciesManager";

export const SpeciesForm = () => {
  const [species, setSpecies] = useState({
    id: 0,
    name: "",
    favoriteFood: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleControlledInputChange = (event) => {
    const newSpecies = { ...species };
    let selectedVal = event.target.value;

    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    newSpecies[event.target.id] = selectedVal;
    setSpecies(newSpecies);
  };
  useEffect(() => {
    getAllSpecies().then(setSpecies);
  }, []);

  const handleClickSaveSpecies = (event) => {
    // event.preventDefault();
    // const collectionId = seed.collectionId;
    // if (collectionId === 0) {
    //   window.alert("Please select a collection");
    // } else {
    //   //invoke addAnimal passing animal as an argument.
    //   //once complete, change the url and display the animal list
    //   addSeed(seed).then(() => navigate("/seeds"));
  };
  return (
    <form className="speciesForm">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
      </style>
      <h2 className="speciesForm_title">New Species</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Species Name:</label>
          <input></input>
        </div>
      </fieldset>
    </form>
  );
};
