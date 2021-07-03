import s from "./Profile.module.css";
function Profile({ children }) {
  return <div className={s.Profile}>{children}</div>;
}
export default Profile;
