import Profile from './Components/Profile/Profile';
import Container from './Components/Container/Container';
import desc from '../src/Components/data/user.json';
import statistic from '../src/Components/data/statistical-data.json';
import FriendList from './Components/FriendList/FriendList';
import friends from '../src/Components/data/friends.json';
import transactions from '../src/Components/data/transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Statistics from './Components/Statistics/Statistics';
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
          stats={desc.stats}
        ></Profile>
      </Container>
      <Container>
        <Statistics
          title="Upload"
          statitems={statistic}
        ></Statistics>
      </Container>
      <Container>
        <FriendList frienditems={friends}></FriendList>
      </Container>
      <Container>
        <TransactionHistory
          items={transactions}
        ></TransactionHistory>
      </Container>
    </>
  );
}
export default App;
