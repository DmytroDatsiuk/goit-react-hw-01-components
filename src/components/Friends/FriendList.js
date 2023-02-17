import PropTypes from 'prop-types';
import { FriendListItem } from './Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.protoType = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: 1812,
    })
  ),
};
