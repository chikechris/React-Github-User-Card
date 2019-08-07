import React from "react";

import UserCard from "./UserCard";

const UserList = props => {
  console.log("UserList:", props);
  return (
    <div>
      {props.followers.map(follower => (
        <UserCard follower={follower} key={follower.i} />
      ))}
    </div>
  );
};

export default UserList;
