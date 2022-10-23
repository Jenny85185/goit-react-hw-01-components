import Profile from '../ProfilePerson/ProfilePerson';
import user from '../../dataInfo/user.json';
import AllFriends from 'components/FriendsList/FriendsList';
import friends from '../../dataInfo/friends.json';
import {AppContainer} from './App.styled';


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
      <AllFriends friends={friends} />
    </AppContainer>
  );
}

export default App;