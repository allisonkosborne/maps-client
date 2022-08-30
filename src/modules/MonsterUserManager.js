const remoteURL = "http://localhost:8000";

export const getUserName = (userName) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/users/${userName}`).then((res) => res.json());
};

export const createUserName = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const updateUserName = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const deleteUserName = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
