import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../contexts/Users';
import { postComment } from '../utils/api';
import ErrorPage from './ErrorPage';

const PostComment = ({ article_id, comments, setComments }) => {
  const [username, setUsername] = useState('jessjelly');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [posted, setPosted] = useState(false);
  const { user } = useContext(UserContext);

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
        setError(err);
      });
  };

  if (error) return <ErrorPage error={error} />;
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <p className="comment-form_username">Post comment as {user.username}</p>
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
