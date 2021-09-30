import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <span
            className="status"
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};