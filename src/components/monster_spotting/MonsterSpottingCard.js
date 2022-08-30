import React from "react";
import "./MonsterSpotting.css";

export const MonsterSpottingCard =
  () =>
  ({ monsterspotting, handleDeleteMSpotting }) => {
    return (
      <div className="card">
        <div className="card-content">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
          </style>
          <picture>Add picture icon here</picture>
          <h3>
            <span className="card-mspotting-name">
              {monsterspotting.species}
            </span>
          </h3>
          <p>User Id: {monsterspotting.date}</p>
          <p>User Id: {monsterspotting.time}</p>
          <p>User Id: {monsterspotting.location}</p>
          <button
            type="button"
            onClick={() => handleDeleteMSpotting(monsterspotting.id)}
          >
            Delete
          </button>
          <Link to={`/monster_spottings/${monsterspotting.id}/update`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  };
