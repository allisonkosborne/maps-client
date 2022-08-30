const remoteURL = "http://localhost:8088";

export const getSpecies = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const getSpeciesById = (speciesId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/species/${speciesId}`).then((res) => res.json());
};

export const getAllSpecies = () => {
  return fetch(`${remoteURL}/species`).then((res) => res.json());
};

// export const createGame = (game) => {
//   return fetch("", { })
//       .then()
// }

// export const getGameTypes = () => {
//   return fetch("", { })
//       .then()
// }
