import PropTypes from 'prop-types';
import { FriendListItem } from './Friend';
import { Friend, FriendItem } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friend>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendItem key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </FriendItem>
      ))}
    </Friend>
  );
};

FriendList.protoType = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
