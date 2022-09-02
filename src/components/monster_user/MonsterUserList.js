import React, { useEffect, useState } from "react";
import { getAllMonsterUsers } from "../modules/MonsterUserManager/getAllMonsterUsers";
import { MonsterUserCard } from "./MonsterUserCard";

export const MonsterUserList = () => {
  const [users, setUsers] = useState([]);

  const getUserByName = () => {
    return getAllMonsterUsers().then((usersFromAPI) => {
      // We'll do something more interesting with this data soon.
      setUsers(usersFromAPI);
    });
  };

  useEffect(() => {
    getUserByName();
  }, []);

  return (
    <div className="container-cards">
      {users.map((user) => (
        <MonsterUserCard key={user.user} user={user.first_name} />
      ))}
    </div>
  );
};
