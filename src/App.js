import Profile from './Components/Profile/Profile';
import Container from './Components/Container/Container';
import desc from '../src/user.json';
import Statistics from './Components/Statistics/Statistics';
import StatEl from './Components/StatEl/StatEl';
import statistic from './statistical-data.json';
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
        <Profile
            name={desc.name}
            avatar={desc.avatar}
            tag={desc.tag}
            location={desc.location}
           stats={desc.stats}>
        </Profile>
      </Container>
      <Container>
        <Statistics  title="Upload" statitems={statistic}></Statistics>
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
