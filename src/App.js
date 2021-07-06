import Profile from "./Components/Profile/Profile";
import Stats from "./Components/Stats/Stats";
import Container from "./Components/Container/Container";
import ProfileDesc from "./Components/ProfileDesc/ProfileDesc";
import desc from "../src/user.json";
import StatList from "./Components/StatList/StatList";
import StatEl from "./Components/StatEl/StatEl";
import statistic from "./statistical-data.json";
// const items = { desc };
const statitems = { statistic };
function App() {
  return (
    // <Container>
    //   <Profile>
    //     <ProfileDesc
    //       name={desc.name}
    //       avatar={desc.avatar}
    //       tag={desc.tag}
    //       location={desc.location}
    //     ></ProfileDesc>
    //     <Stats stats={desc.stats}></Stats>
    //   </Profile>
    // </Container>
    <Container>
      <StatList
        label={statistic.label}
        percentage={statistic.percentage}
      ></StatList>
    </Container>
  );
}
export default App;
