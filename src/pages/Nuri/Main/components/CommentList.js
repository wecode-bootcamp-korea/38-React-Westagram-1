import Comment from './Comment';
import { nanoid } from 'nanoid';

function CommentList({ comments, onRemoveClick }) {
  return (
    <div className="comment_list_wrap">
      {comments.map(commentArr => {
        return (
          <Comment
            userName={commentArr.userName}
            userComment={commentArr.comment}
            key={nanoid()}
            id={commentArr.id}
            onRemoveClick={onRemoveClick}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
