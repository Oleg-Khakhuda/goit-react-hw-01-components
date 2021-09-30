import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends} />
        </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};