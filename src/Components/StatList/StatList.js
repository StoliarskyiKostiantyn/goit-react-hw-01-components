import s from "./StatList.module.css";
import StatEl from "../StatEl/StatEl";
function StatList({ statitems }) {
  return (
    <ul>
      {statitems.map((statitem) => (
        <li key={statitem.id}>
          <StatEl
            label={statitem.label}
            percentage={statitem.percentage}
          ></StatEl>
        </li>
      ))}
    </ul>
  );
}
export default StatList;
