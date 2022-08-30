const remoteURL = "http://localhost:8000";

export const getSpecies = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const getSpeciesById = (id) => {
  return fetch(`${remoteURL}/species/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createSpecies = (newSpecies) => {
  return fetch("http://localhost:8000/species", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSpecies),
  }).then((response) => response.json());
};

export const updateSpecies = (species) => {
  return fetch(`${remoteURL}/species/${species.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(species),
  }).then(getSpecies);
};

export const deleteSpecies = (id) => {
  return fetch(`${remoteURL}/species/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then(getSpecies);
};

export const getSpeciesForMSpotting = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

// export const createGame = (game) => {
//   return fetch("", { })
//       .then()
// }

// export const getGameTypes = () => {
//   return fetch("", { })
//       .then()
// }
