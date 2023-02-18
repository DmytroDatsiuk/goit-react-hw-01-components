import PropTypes from 'prop-types';
import { FriendListItem } from './Friend';
import { Friend, FriendItem } from './Friend.styled';


export const FriendList = ({ friends }) => {
  return (
    <Friend>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendItem>
      ))}
    </Friend>
  );
};

FriendList.protoType = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: 1812,
    })
  ),
};
