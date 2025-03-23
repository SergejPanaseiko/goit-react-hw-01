import React from "react";
import FriendListItem from '../FriendListItem/FriendListItem';
import './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
export default FriendList;