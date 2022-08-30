import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ clearUser, isAuthenticated }) => {
  const history = useNavigate();

  const handleLogout = () => {
    clearUser();
    history("/");
  };

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          {" "}
          M.A.P.S.{" "}
        </Link>
      </li>
      {isAuthenticated ? (
        <li className="navbar__item">
          <Link className="navbar__link" to="/species">
            {" "}
            Species{" "}
          </Link>
        </li>
      ) : null}
      {/* {isAuthenticated ? (
        <li className="navbar__item">
          <Link className="navbar__link" to="/collections">
            {" "}
            Collections{" "}
          </Link>
        </li>
      ) : null} */}
      {/* {isAuthenticated ? (
        <li className="navbar__item">
          <Link className="navbar__link" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </Link>
        </li>
      ) : (
        <li className="navbar__item">
          <Link className="navbar__link" to="/login">
            Login
          </Link>
        </li>
      )} */}

      {/* {isAuthenticated ? (
        <li className="navbar__item">
          <a className="navbar__link" href=" " onClick={handleLogout}>
            Logout
          </a>
        </li>
      ) : (
        <li className="navbar__item">
          <Link className="navbar__link" to="/login">
            Login
          </Link>
        </li>
      )} */}
    </ul>
  );
};
