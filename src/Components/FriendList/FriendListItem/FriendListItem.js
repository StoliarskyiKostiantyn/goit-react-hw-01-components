import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
function FriendListItem({ id, avatar, name, isOnline }) {
  const onlineStatus = isOnline ? 'online' : 'offline';
  return (
    <li key={id} className={s.item}>
      <span className={s[onlineStatus]}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt="Фото"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItem;
