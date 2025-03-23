import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
      <ul className={s.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.frienditem}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
export default FriendList;