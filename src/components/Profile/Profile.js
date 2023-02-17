import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.user}>
        <img src={avatar} alt="User avatar" className={css.userImg} />
        <p className={css.userName}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span>Followers</span>
          <span className={css.desc}>{followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Views</span>
          <span className={css.desc}>{views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Likes</span>
          <span className={css.desc}>{likes}</span>
        </li>
      </ul>
    </div>
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
