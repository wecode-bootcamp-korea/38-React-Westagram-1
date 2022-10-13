import React from 'react';

const CommentList = ({ comment }) => {
  return (
    <li id="wecode">
      <span className="myName">
        <strong>w00jinkim </strong>
      </span>
      <span>{comment}</span>
    </li>
  );
};

export default CommentList;
