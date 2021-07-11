import Profile from './Components/Profile/Profile';
import Stats from './Components/Stats/Stats';
import Container from './Components/Container/Container';
import ProfileDesc from './Components/ProfileDesc/ProfileDesc';
import desc from '../src/user.json';
import Statistics from './Components/Statistics/Statistics';
import StatEl from './Components/StatEl/StatEl';
import statistic from './statistical-data.json';
import StatList from './Components/StatList/StatList';
import FriendListItem from './Components/FriendListItem/FriendListItem';
import FriendList from './Components/FriendList/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import TransactionHistoryRow from './Components/TransactionHistoryRow/TransactionHistoryRow';
const items = { desc };
function App() {
  return (
    <>
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
      <Container>
        <Statistics title="Upload stats" statitems={statistic}></Statistics>
      </Container>
      <Container>
        <FriendList frienditems={friends}></FriendList>
      </Container>
      <Container>
        <TransactionHistory items={transactions}></TransactionHistory>
      </Container>
    </>
  );
}
export default App;
