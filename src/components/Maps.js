import React, { useState } from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "../ApplicationViews";
import "./Maps.css";

export const Maps = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("maps_user") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("maps_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("maps_user") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("maps_user") !== null);
  };

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
      {/* 2 Props (function from kennel and variable from state pf kennel) */}
      <ApplicationViews
        setAuthUser={setAuthUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};
