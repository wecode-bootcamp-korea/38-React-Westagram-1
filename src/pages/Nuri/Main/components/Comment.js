import { useState } from 'react';

function Comment(props) {
  const { userName, userComment } = props;
  const [deleteBox, setDeleteBox] = useState({ display: 'block' });
  const [heart, setHeart] = useState(false);
  const handleDelete = e => {
    setDeleteBox({ display: 'none' });
  };
  const onLike = e => {
    setHeart(like => !like);
  };
  return (
    <div className="Comment" style={deleteBox}>
      <li className="add">
        <span className="comment_id">{userName}</span>
        <span className="comment_con">{userComment}</span>
        <span onClick={onLike} className="comment_heart">
          <i className={heart ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
        </span>
        <a onClick={handleDelete} href="#!">
          삭제
        </a>
      </li>
    </div>
  );
}
export default Comment;
