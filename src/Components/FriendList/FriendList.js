import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
function FriendList({ frienditems }) {
  return (
    <ul className={s.friendlist}>
      {frienditems.map(frienditem => (
        <li key={frienditem.id} className={s.item}>
          <FriendListItem
            isOnline={frienditem.isOnline}
            status={frienditem.status}
            avatar={frienditem.avatar}
            name={frienditem.name}
          ></FriendListItem>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
