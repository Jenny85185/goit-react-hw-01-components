import Profile from '../ProfilePerson/ProfilePerson';
import user from '../../dataInfo/user.json';

import Stat from 'components/Statistics/Statistics';
import data from '../../dataInfo/data.json';

import AllFriends from 'components/FriendsList/FriendsList';
import friends from '../../dataInfo/friends.json';

import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../dataInfo/transactions.json';

import { AppContainer } from './App.styled';

function App() {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stat title="Upload stats" stats={data} />
      <AllFriends friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
}

export default App;
