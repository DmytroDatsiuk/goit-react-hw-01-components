import PropTypes from 'prop-types';
import { FriendActive, FriendImg } from './Friend.styled';
import { BsCircleFill } from 'react-icons/bs';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendActive isActive={isOnline}>
        {' '}
        <BsCircleFill />{' '}
      </FriendActive>
      <FriendImg className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.protoType = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
