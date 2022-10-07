import React, { useState, delClick } from 'react';

const Commenttext = props => {
  return (
    <div className="commentBox">
      <div className="commentId">Dog</div>
      <div className="commentComment">{props.comment}</div>
      <div className="commentHeartBox">
        <img alt="heart" className="commentHeart" src="/images/heart.png" />
      </div>
      <div className="deleteKey" id={props.id} onClick={props.delClick}>
        삭제
      </div>
    </div>
  );
};
export default Commenttext;
