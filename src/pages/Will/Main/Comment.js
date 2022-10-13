import React from 'react';
import { useState } from 'react';
import './Main.scss';
import CommentList from './CommentList';

const Comment = () => {
  const [comment, setComment] = useState('');

  const handleCommentInput = event => {
    setComment(event.target.value);
  };

  const [commentArray, setCommentArray] = useState([]);

  const onSbmt = event => {
    event.preventDefault();
    if (comment === '') {
      return '';
    }
    setCommentArray([...commentArray, comment]);
    setComment('');
  };

  let [instaCom, setInstaCom] = useState('');

  const saveUserCmt = event => {
    setInstaCom(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className="instaDescription">
        <ul id="ulComm" className="ulCom">
          <li>
            <div>
              <strong>w00jinkim</strong> 가보자 우주로!
            </div>
          </li>
          <li>
            <div>
              <strong>BMW Korea</strong> 거봐 좋았잖아~~~~~
            </div>
          </li>
          <li>
            {commentArray.map((comment, index) => (
              <CommentList key={index} comment={comment} />
            ))}
          </li>
        </ul>
        <div className="theTimeAgo">3시간 전</div>
      </div>
      <div className="replyText">
        <form id="instaForm">
          <input
            id="instaCom"
            className="instagramReply"
            type="text"
            placeholder="댓글 달기..."
            onChange={handleCommentInput}
            value={comment}
          />
          <button id="replyBtn" className="replySubmit" onClick={onSbmt}>
            게시
          </button>
        </form>
      </div>
    </>
  );
};

export default Comment;
