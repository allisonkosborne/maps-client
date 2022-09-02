const remoteURL = "http://localhost:8000";

export const getLocations = () => {
  return fetch("http://localhost:8000/locations", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
};

export const createNewLocation = (newLocation) => {
  console.log("new location test", [newLocation]);
  return fetch("http://localhost:8000/locations", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLocation),
  }).then((response) => response.json());
};

export const updateLocation = (location) => {
  console.log("update location", { location });
  return fetch(`${remoteURL}/locations/${location.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  }).then(getLocations);
};

export const deleteLocation = (id) => {
  console.log(id);
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then(getLocations);
};

export const getLocationById = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
