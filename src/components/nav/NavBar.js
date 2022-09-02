import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
// import Logo from "./rare.jpeg";

export const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const navbar = useRef();
  const hamburger = useRef();

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle("is-active");
    navbar.current.classList.toggle("is-active");
  };

  return (
    <nav
      className="navbar is-success mb-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          {/* <img src={Logo} height="3rem" />{" "} */}
          <h1 className="title is-4">M.A.P.S.</h1>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={showMobileNavbar}
          ref={hamburger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" ref={navbar}>
        <div className="navbar-start">
          {token ? (
            <>
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/monster_spottings" className="navbar-item">
                Monster Spottings
              </Link>
              {/* <Link to="/categories" className="navbar-item">
                Categories
              </Link>
              <Link to="/reactions" className="navbar-item">
                Reactions
              </Link>
              <Link to="/tags" className="navbar-item">
                Tags
              </Link>
              <Link to="/users" className="navbar-item">
                Users
              </Link> */}
            </>
          ) : (
            ""
          )}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {token ? (
                <button
                  className="button is-outlined"
                  onClick={() => {
                    setToken("");
                    navigate.push("/login");
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/register" className="button is-link">
                    Register
                  </Link>
                  <Link to="/login" className="button is-outlined">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
