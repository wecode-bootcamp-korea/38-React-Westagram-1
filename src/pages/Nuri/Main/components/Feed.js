import { useState } from 'react';
import InputComment from './InputComment';
import CommentList from './CommentList';

function Feed({ feed }) {
  // const { id, userName, userImage, feedContent, feedImage, prevComment } = feed;
  const [comment, setComment] = useState('');
  const [commentBox, setCommentBox] = useState(feed.prevComment);
  const handleChangeComment = comment => setComment(comment);

  const handleSubmitComment = () => {
    const newComment = commentBox.concat({
      id: Date.now(),
      userName: 'onnuri',
      comment: comment,
    });
    setCommentBox(newComment);
    setComment('');
  };
  const validation = () => {
    if (comment.length !== 0) {
      return true;
    }
    return false;
  };

  const handleRemove = id => {
    setCommentBox(
      commentBox.filter(comment => {
        return comment.id !== id;
      })
    );
  };

  return (
    <div className="sec_feeds">
      <article>
        <div className="user_wrap">
          <div className="user_profile">
            <img
              src={feed.userImage}
              alt={`"${feed.userName}님의 프로필사진"`}
            />
            <p>{feed.userName}</p>
          </div>
          <a className="more_btn" href="#!">
            <img src="images/Nuri/more.png" alt="더보기" />
          </a>
        </div>
        <div className="picture_box">
          <img src={feed.feedImage} alt={feed.feedContent} />
        </div>
        <div className="comment_wrap">
          <div className="icon_box">
            <div className="heart_wrap">
              <a className="like_button" href="#!">
                <img src="images/Nuri/heart.png" alt="좋아요 누르기" />
                <img
                  className="hide"
                  src="images/Nuri/heart_like.png"
                  alt="좋아요 완료"
                />
              </a>
              <a href="#!">
                <img src="images/Nuri/talkbox.png" alt="댓글달기" />
              </a>
              <a href="#!">
                <img src="images/Nuri/share.png" alt="공유하기" />
              </a>
            </div>
            <div className="save_wrap">
              <a href="#!">
                <img src="images/Nuri/bookmark.png" alt="내 컬렉션 추가하기" />
              </a>
            </div>
          </div>
          <div className="like_box">
            <div className="user_profile">
              <img
                src="images/Nuri/bomsori.jpeg"
                alt="김봄소리님의 프로필사진"
              />
              <p>
                <strong>bomsori</strong>님 <strong>여러 명</strong>이 좋아합니다
              </p>
            </div>
            <p className="user_say">
              <strong>{feed.userName} </strong>
              {feed.feedContent}
            </p>
            <CommentList comments={commentBox} onRemoveClick={handleRemove} />
          </div>
        </div>
        <InputComment
          comment={comment}
          onChangeComment={handleChangeComment}
          onSubmit={handleSubmitComment}
          validation={validation()}
        />
      </article>
    </div>
  );
}
export default Feed;
