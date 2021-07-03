import Profile from "./Components/Profile/Profile";
import desc from "../src/user.json";
import Container from "./Components/Container/Container";
import ProfileDesc from "./Components/ProfileDesc/ProfileDesc";
const items = { desc };
function App() {
  return (
    <Container>
      <Profile>
        <ProfileDesc
          name={items.name}
          tag={items.tag}
          location={items.location}
          avatar={items.avatar}
        ></ProfileDesc>
      </Profile>
    </Container>
  );
}
export default App;
