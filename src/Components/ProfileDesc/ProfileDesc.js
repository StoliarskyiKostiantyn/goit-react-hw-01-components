import s from "./ProfileDesc.module.css";
function ProfileDesc({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.description}>
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}
export default ProfileDesc;
