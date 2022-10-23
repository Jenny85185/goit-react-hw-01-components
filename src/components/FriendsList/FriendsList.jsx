import PropTypes from 'prop-types';

import { Friends,Item,Status,Avatar,Name } from "./FriendsList.styled";

export default function AllFriends({ friends }) {
    return (
        <Friends>
           {friends.map((friend) => (
        <Item key={friend.id}>
          <Status status={friend.isOnline}>
            {friend.isOnline}
          </Status>
          <Avatar src={friend.avatar} alt="User avatar"  />
          <Name>{friend.name}</Name>
        </Item>
      ))}  
        </Friends>
    );
}

AllFriends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};