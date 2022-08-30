const remoteURL = "http://localhost:8000";

export const getMonsterSpottings = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createMonsterSpottings = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const deleteMonsterSpottings = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const updateMonsterSpottings = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const getMonsterSpottingsById = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
