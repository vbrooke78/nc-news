import { useState } from 'react';
import { postComment } from '../utils/api';

const PostComment = ({ article_id, comments, setComments }) => {
  const [username, setUsername] = useState('jessjelly');
  const [comment, setComment] = useState('');
  const [posted, setPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, username, comment)
      .then((postedComment) => {
        setPosted(true);
        setComments((currComments) => {
          const newComments = [postedComment, ...currComments];
          return newComments;
        });
        setUsername('');
        setComment('');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label className="username-label" htmlFor="username">
        Username:
      </label>
      <input
        className="username-label"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      {/* <label htmlFor="comment">Comment:</label> */}
      <textarea
        placeholder="Post your comment here"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button className="post-comment_button" type="submit">
        Submit
      </button>
      {posted ? <p>Success - posted!</p> : null}
    </form>
  );
};

export default PostComment;
