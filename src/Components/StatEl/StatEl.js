import PropTypes from 'prop-types';
import s from './StatEl.module.css';
function StatEl({ label, percentage }) {
  return (
    <div className={s.statel}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </div>
  );
}
StatEl.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}
export default StatEl;
