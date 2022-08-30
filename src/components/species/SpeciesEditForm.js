import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SpeciesEditForm = () => {
  const [species, setSpecies] = useState({
    id: 0,
    name: "",
    weapon: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { speciesId } = useParams();
  const navigate = useNavigate();
  const handleFieldChange = (evt) => {
    const stateToChange = { ...species };
    stateToChange[evt.target.id] = evt.target.value;
    setSpecies(stateToChange);
  };

  const updateExistingSpecies = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
  };
};
