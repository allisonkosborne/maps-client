const remoteURL = "http://localhost:8000";

export const getMonsterSpottings = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createMonsterSpottings = (newMSpotting) => {
  return fetch("http://localhost:8000/monster_spottings", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMSpotting),
  }).then((response) => response.json());
};

export const deleteMonsterSpottings = (id) => {
  return fetch(`${remoteURL}/monster_spottings/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then(getMonsterSpottings);
};

export const updateMonsterSpottings = (mSpotting) => {
  return fetch(`${remoteURL}/monster_spottings/${mSpotting.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mSpotting),
  }).then(getMonsterSpottings);
};

export const getMonsterSpottingsById = (id) => {
  return fetch(`${remoteURL}/monster_spottings/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
