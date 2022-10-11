import Comment from './Comment';
import { nanoid } from 'nanoid';

function CommentList({ comments, onRemoveClick }) {
  const userName = 'onnuri';
  return (
    <div className="comment_list_wrap">
      {comments.map(commentArr => {
        return (
          <Comment
            userName={userName}
            userComment={commentArr.comment}
            key={nanoid()}
            id={commentArr.id}
            isChecked={commentArr.isChecked}
            onRemoveClick={onRemoveClick}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
