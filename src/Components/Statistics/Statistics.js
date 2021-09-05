import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatEl from './StatEl/StatEl';
function Statistics({ title, statitems }) {
  return (
    <div>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statlist}>
        {statitems.map(statitem => (
          <StatEl
            key={statitem.id}
            label={statitem.label}
            percentage={statitem.percentage}
          />
        ))}
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  statitems: PropTypes.array,
};
export default Statistics;
