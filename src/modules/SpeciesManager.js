const remoteURL = "http://localhost:8000";

export const getSpecies = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
};

export const createNewSpecies = (newSpecies) => {
  console.log("new species test", [newSpecies]);
  return fetch("http://localhost:8000/species", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSpecies),
  }).then((response) => response.json());
};

export const updateSpecies = (species) => {
  console.log("updatespecies", { species });
  return fetch(`${remoteURL}/species/${species.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then(getSpecies);
};

export const deleteSpecies = (id) => {
  console.log(id);
  return fetch(`${remoteURL}/species/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then(getSpecies);
};

export const getSpeciesById = (id) => {
  return fetch(`${remoteURL}/species/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
