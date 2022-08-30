import React, { useState, useEffect } from "react";
// import CSS
import { Link, useNavigate, Navigate } from "react-router-dom";

export const SpeciesCard = ({ species, handleDeleteSpecies }) => {
  const sessionUser = JSON.parse(window.sessionStorage.getItem("maps_user"));
  const sessionUserId = sessionUser.id;
  const navigate = useNavigate();
};
