import css from './friendList.module.css';

const FriendList = ({ friends }) => {
  const content = friends.map(({ name, isOnline, id, avatar }) => (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? '#49b04c' : '#ff5054' }}
      ></span>

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
  return <ul className={css.friend_list}>{content}</ul>;
};

export default FriendList;
