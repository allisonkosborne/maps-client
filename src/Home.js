import React, { useReducer } from "react";
import { useNavigate, useResolvedPath, Link } from "react-router-dom";
import { PropsAndState } from "./components/PropsAndState";
// import "./Home.css";
import { useEffect, useState } from "react";
import { getUserName } from "./modules/MonsterUserManager";

export const Home = () => {
  const [users, setUsers] = useState([]);

  const userNameIntro = () => {
    return getUserName().then((usersFromAPI) => {
      // We'll do something more interesting with this data soon.
      setUsers(usersFromAPI);
    });
  };
  useEffect(() => {
    userNameIntro();
  }, []);

  return (
    <>
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
        </style>
        <div className="home-page">
          {/* <img src={"/image1.jpg"} alt="Flowers" /> */}
          <h1 className="welcome">M.A.P.S.</h1>
          <h1 className="keepers"></h1>
        </div>
        <p>
          <PropsAndState yourName={users.name} />
        </p>
        <div className="first-paragraph">
          <small>
            Who have you seen -creeping, crawling, flying- around your
            neighborhood?
          </small>
          <div class="let-us-know-button">
            <Link to={`/monster_spottings/create`}>
              <button>Let Us Know!</button>
            </Link>
          </div>
        </div>

        {/* <div className="second-paragraph">
        Now is not the time to be silent. To remain stagnant. Now is the time to
        take our health, the health of our communities back into our sOWN hands.
        Our future, the future of our food, a sustenance that we each partake in
        each and every day is in danger and it is up to us to change that. With
        each seed sown, a future is forseen. A hope is dug. And a life is
        changed.
      </div> */}
      </div>
    </>
  );
};
