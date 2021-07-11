import s from './Statistics.module.css';
import StatList from '../StatList/StatList';
function Statistics({ title, statitems }) {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      <StatList statitems={statitems}></StatList>
    </div>
  );
}
export default Statistics;
