import s from './FriendListItem.module.css';
function FriendListItem({ status, avatar, name, isOnline }) {
  const onlineStatus = isOnline ? 'online' : 'offline';
  return (
    <>
      <span className={s[onlineStatus]}></span>
      <img className={s.avatar} src={avatar} alt="Фото" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}
export default FriendListItem;
