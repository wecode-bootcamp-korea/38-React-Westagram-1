import React, { useState } from 'react';

function ReplyChoi({ comment }) {
  return (
    <div className="reply-list">
      <div className="reply-user">{`${comment.id}`}</div>
      <div className="reply-content">{`${comment.text}`}</div>
    </div>
  );
}

export default ReplyChoi;
