import React, { useState, delClick } from 'react';

const Commenttext = props => {
  return (
    <div className="commentBox">
      <div className="commentId">Dog</div>
      <div className="commentComment">{props.comment}</div>
      <div className="commentHeartBox">
        <div alt="heart" className="commentHeart" />
      </div>
      <div className="deleteKey" id={props.id} onClick={props.delClick}>
        삭제
      </div>
    </div>
  );
};
export default Commenttext;
