export const getMonsterSpottings = () => {
  return fetch("http://localhost:8000/monster_spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
