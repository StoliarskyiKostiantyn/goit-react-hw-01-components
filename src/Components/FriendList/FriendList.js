import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
function FriendList({ frienditems }) {
  return (
    <ul className={s.friendlist}>
      {frienditems.map(frienditem => (
        <FriendListItem
          key={frienditem.id}
          className={s.item}
          isOnline={frienditem.isOnline}
          status={frienditem.status}
          avatar={frienditem.avatar}
          name={frienditem.name}
        />
      ))}
    </ul>
  );
}
export default FriendList;
