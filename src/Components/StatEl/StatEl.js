import s from './StatEl.module.css';
function StatEl({ title, label, percentage }) {
  return (
    <div className={s.statel}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </div>
  );
}
export default StatEl;
