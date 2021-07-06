import s from "./StatEl.module.css";
function StatEl({ label, percentage }) {
  return (
    <div>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </div>
  );
}
export default StatEl;
