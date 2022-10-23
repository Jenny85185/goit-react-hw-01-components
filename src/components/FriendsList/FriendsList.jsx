import PropTypes from 'prop-types';

import { FriendsListItem } from './FriendsListItem';

import { Friends } from './FriendsList.styled';

export default function AllFriends({ friends }) {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
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