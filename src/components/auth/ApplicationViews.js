import React from "react";
import { Route, Routes } from "react-router-dom";
import { Maps } from "../Maps";

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Maps />} />
        <h1>Welcome to M.A.P.S.</h1>
        {/* <Route exact path="/categories">
        <CategoryList />
      </Route> */}
      </Routes>
    </>
  );
};
