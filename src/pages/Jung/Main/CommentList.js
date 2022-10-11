import Commenttext from './Commenttext';
import React, {
  // arr,
  // delClick,
  // commnetClick,
  // textComment,
  useState,
} from 'react';
const CommentList = props => {
  const [textlist, setTextlist] = useState([]);
  const [comment, setComment] = useState('');
  let arr = [...textlist];
  const commnetClick = e => {
    e.preventDefault();
    comment === ''
      ? alert('빈 칸입니다.')
      : (arr = [
          ...arr,
          {
            id: Date.now(),
            comment: comment,
          },
        ]);
    setTextlist(arr);
    setComment('');
  };
  const delClick = event => {
    arr = arr.filter(item => item.id != event.target.id);
    setTextlist(arr);
  };
  const textComment = e => {
    setComment(e.target.value);
  };
  return (
    <>
      <div className="mainbox">
        <div className="mainFaceBox">
          <div className={props.profile}></div>
          <div className="mainFaceId">{props.name}</div>
          <div className="dot">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className="article">
          <div alt="photo" className={props.photo} />
        </div>
        <div className="bottomBox">
          <div className="bottomBoxUp">
            <div className="bottomBoxUpEmoji">
              <div className="heart">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
              </div>
              <div className="share">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
            <div className="bottomBoxUpTag">
              <div className="bookMark">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="bottomBoxMid">
            <div className={props.like}></div>
            <div className="bottomBoxMidId">
              Dog3님 외<div className="number">3</div>
              명이 좋아합니다.
            </div>
          </div>
          <div className="bottomBoxDown">
            <div className="bottomBoxDownComment">
              <div>
                {arr.map(textlist => (
                  <Commenttext
                    id={textlist.id}
                    comment={textlist.comment}
                    delClick={delClick}
                  />
                ))}
              </div>
            </div>
            <div className="bottomBoxDownHeart"></div>
          </div>
          <form className="mainFooter" onSubmit={commnetClick}>
            <input
              type="text"
              className="mainFooterInput"
              placeholder="댓글 달기..."
              onChange={textComment}
            ></input>
            <div className="buttonClick" onClick={commnetClick}>
              게시
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CommentList;
