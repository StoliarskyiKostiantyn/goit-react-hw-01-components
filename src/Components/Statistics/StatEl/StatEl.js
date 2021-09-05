import PropTypes from 'prop-types';
import s from './StatEl.module.css';
function StatEl({ label, percentage, key }) {
  return (
    <li key={key}>
      <div className={s.statel}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}</span>
      </div>
    </li>
  );
}
StatEl.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatEl;
