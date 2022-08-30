const remoteURL = "http://localhost:3000";

export const getUserName = () => {
  return fetch(`${remoteURL}/users`).then((res) => res.json());
};
