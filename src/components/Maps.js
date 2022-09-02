import React, { useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { ApplicationViews } from "./auth/ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const Maps = () => {
  const [token, setTokenState] = useState(localStorage.getItem("token"));

  const setToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setTokenState(newToken);
  };

  return (
    <>
      <Routes>
        {token ? (
          <Route>
            <Route
              path=""
              element={<NavBar />}
              token={token}
              setToken={setToken}
            />

            <Route path="" element={<ApplicationViews />} />
          </Route>
        ) : (
          <Navigate to="/login" />
        )}

        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/login" exact>
          <Route
            path=""
            element={<NavBar />}
            token={token}
            setToken={setToken}
          />
          <Route
            path=""
            element={<Login />}
            token={token}
            setToken={setToken}
          />
        </Route>

        <Route path="/register" exact>
          <Route
            path=""
            element={<NavBar />}
            token={token}
            setToken={setToken}
          />
          <Route
            path=""
            element={<Register />}
            token={token}
            setToken={setToken}
          />
        </Route>
      </Routes>
    </>
  );
};
