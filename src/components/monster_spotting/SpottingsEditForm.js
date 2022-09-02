import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SpottingsEditForm = () => {
  const [spottings, setSpottings] = useState({
    monster_user: 0,
    location: "",
    species: "",
    date: "",
    time: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { spottingsId } = useParams();
  const navigate = useNavigate();
  const handleFieldChange = (evt) => {
    const stateToChange = { ...spottings };
    stateToChange[evt.target.id] = evt.target.value;
    setSpottings(stateToChange);
  };

  const updateExistingSpottings = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedSpottings = {
      monster_user: spottings.monster_user,
      location: spottings.location,
      species: spottings.species,
      time: spottings.date,
      date: spottings.time,
    };

    updateExistingSpottings(editedSpottings).then(() => navigate("/"));
  };
};
