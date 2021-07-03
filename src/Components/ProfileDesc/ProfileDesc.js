import s from "./ProfileDesc.module.css";
function ProfileDesc({ name, tag, location, avatar, stats }) {
  return (
    <div>
      <img src={avatar} alt="Аватар пользователя" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
}
export default ProfileDesc;
