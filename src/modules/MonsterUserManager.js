const remoteURL = "http://localhost:8000";

export const getAllMonsterUsers = () => {
  return fetch("http://localhost:8000/users", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
};

export const createNewUser = (newPost) => {
  console.log("new user test", [newUser]);
  return fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((response) => response.json());
};

export const updateUser = (user) => {
  console.log("update user", { user });
  return fetch(`${remoteURL}/users/${user.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then(getAllMonsterUsers);
};

export const deletePost = (id) => {
  console.log(id);
  return fetch(`${remoteURL}/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then(getAllMonsterUsers);
};

export const getUserById = (id) => {
  return fetch(`${remoteURL}/users/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
