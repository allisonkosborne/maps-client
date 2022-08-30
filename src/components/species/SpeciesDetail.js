import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteSpecies, getSpeciesById } from "../../modules/SpeciesManager";

export const SpeciesEditForm = () => {
  const [species, setSpecies] = useState({
    id: 0,
    name: "",
    weapon: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { speciesId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setIsLoading(true);
    deleteSpecies(speciesId).then(() => navigate("/species"));
  };

  useEffect(() => {
    console.log("useEffect", speciesId);
    getSpeciesById(speciesId).then((species) => {
      setSpecies(species);
      setIsLoading(false);
    });
  }, [speciesId]);
  return (
    <section className="seed">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
      </style>
      <h3 className="species__name">Species Name: {species.name}</h3>
      <div className="species__picture">PLACE PICTURE HERE</div>
      <div className="species_weapon">Weapon of Choice: {species.weapon}</div>
    </section>
  );
};
