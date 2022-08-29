import React, { useEffect, useState } from "react";
import { getSpecies, getSpeciesById } from "./SpeciesManager.js";

export const SpeciesList = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getSpecies().then((data) => setSpecies(data));
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
