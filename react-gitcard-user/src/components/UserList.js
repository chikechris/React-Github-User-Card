import React from "react";

import UserCard from "./UserCard";

const UserList = props => {
  console.log("UserList:", props);
  return (
    <div>
      {props.userData.map((user, i) => {
        return <UserCard user={user} key={i} />;
      })}
    </div>
  );
};

export default UserList;
