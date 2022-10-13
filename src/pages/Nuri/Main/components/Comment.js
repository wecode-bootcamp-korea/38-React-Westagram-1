import { useState } from 'react';

function Comment({ userName, userComment, onRemoveClick, id }) {
  const [heart, setHeart] = useState(false);
  const handleRemove = e => {
    onRemoveClick(id);
  };
  const handleToggleLike = e => {
    setHeart(like => !like);
  };
  return (
    <div className="Comment">
      <li className="add">
        <span className="comment_id">{userName}</span>
        <span className="comment_con">{userComment}</span>
        <span onClick={handleToggleLike} className="comment_heart">
          <i className={heart ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
        </span>
        <a onClick={handleRemove} href="#!">
          삭제
        </a>
      </li>
    </div>
  );
}
export default Comment;
