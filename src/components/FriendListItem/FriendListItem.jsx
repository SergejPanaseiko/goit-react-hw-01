import React from "react";
// import React from "react";
// import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-card">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? "status online" : "status offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;