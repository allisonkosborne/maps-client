import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpeciesCard } from "./SpeciesCard.js";
import {
  getAllSpecies,
  getSpecies,
  getSpeciesById,
} from "../../modules/SpeciesManager.js";

export const SpeciesList = () => {
  const [species, setSpecies] = useState([]);

  const navigate = useNavigate();

  const getSpecies = () => {
    return getAllSpecies().then((speciesfromAPI) => {
      setSpecies(speciesfromAPI);
    });
  };

  useEffect(() => {
    getSpecies();
  }, []);

  return (
    <article className="species">
      {species.map((species) => {
        return (
          <section key={`species--${species.id}`} className="species">
            <div className="species__title">Species: {species.name}</div>
            <div>Favorite Food: {species.food}</div>
          </section>
        );
      })}
    </article>
  );
};
