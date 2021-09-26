import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <div>
      <ul className={s.friendList}>
          {friends.map ((friend) => ( 
        <li className={s.item} key ={friend.id}>
          <span className={friend.isOnline ? s.on : s.off}></span>
          <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
export default FriendList;