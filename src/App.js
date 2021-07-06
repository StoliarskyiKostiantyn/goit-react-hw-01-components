import Profile from "./Components/Profile/Profile";
import Stats from "./Components/Stats/Stats";
import Container from "./Components/Container/Container";
import ProfileDesc from "./Components/ProfileDesc/ProfileDesc";
import desc from "../src/user.json";
const items = { desc };
function App() {
  return (
    <Container>
      <Profile>
        <ProfileDesc
          name={desc.name}
          avatar={desc.avatar}
          tag={desc.tag}
          location={desc.location}
        ></ProfileDesc>
        <Stats stats={desc.stats}></Stats>
      </Profile>
    </Container>
  );
}
export default App;
