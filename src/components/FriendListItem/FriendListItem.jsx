import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendcard}>
      <img src={avatar} alt="Avatar" width="68" className={s.images} />
      <p className={s.subtitle}>{name}</p>
      <p className={isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`} >
        {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;