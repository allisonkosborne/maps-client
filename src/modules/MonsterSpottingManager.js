const remoteURL = "http://localhost:8000";

export const getMonsterSpottings = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
};

export const createNewMonsterSpotting = (newMonsterSpotting) => {
  console.log("new m spotting test", [newMonsterSpotting]);
  return fetch("http://localhost:8000/monster_spottings", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMonsterSpotting),
  }).then((response) => response.json());
};

export const updateMonsterSpotting = (monsterSpotting) => {
  console.log("update monster spotting", { monsterSpotting });
  return fetch(`${remoteURL}/monster_spottings/${monsterSpotting.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(monsterSpotting),
  }).then(getMonsterSpottings);
};

export const deleteMonsterSpotting = (id) => {
  console.log(id);
  return fetch(`${remoteURL}/monster_spottings/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then(getMonsterSpottings);
};

export const getMonsterSpottingById = (id) => {
  return fetch(`${remoteURL}/monster_spottings/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
