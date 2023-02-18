import PropTypes from 'prop-types';
import {
  ProfileBox,
  User,
  UserImg,
  UserName,
  ProfileList,
  ProfileListItem,
  ProfileDesc,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <User>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </User>

      <ProfileList >
        <ProfileListItem>
          <span>Followers</span>
          <ProfileDesc>{followers}</ProfileDesc>
        </ProfileListItem>
        <ProfileListItem>
          <span>Views</span>
          <ProfileDesc>{views}</ProfileDesc>
        </ProfileListItem>
        <ProfileListItem>
          <span>Likes</span>
          <ProfileDesc>{likes}</ProfileDesc>
        </ProfileListItem>
      </ProfileList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
