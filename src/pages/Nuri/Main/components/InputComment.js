function InputComment({ comment, onChangeComment, onSubmit, validation }) {
  const handleInputChange = event => {
    onChangeComment(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="comment_input">
      <input
        onChange={handleInputChange}
        value={comment}
        placeholder="댓글달기..."
        type="text"
      />
      <button disabled={!validation} type="submit" className="comment_btn">
        게시
      </button>
    </form>
  );
}

export default InputComment;
