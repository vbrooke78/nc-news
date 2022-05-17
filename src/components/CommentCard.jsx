import { useContext, useState } from 'react';
import { UserContext } from '../contexts/Users';
import { updateCommentVotes } from '../utils/api';
import DeleteComments from './DeleteComments';

const CommentCard = ({ comment, comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [votes, setVotes] = useState(comment.votes);
  const [err, setErr] = useState(null);

  const { comment_id } = comment;

  const handleUpClick = () => {
    setVotes((currVotes) => currVotes + 1);
    updateCommentVotes(comment_id, 1).catch(() => {
      setVotes((currVotes) => currVotes - 1);
      setErr('Sorry your vote failed, please try again');
    });
  };

  const handleDownClick = () => {
    setVotes((currVotes) => currVotes - 1);
    updateCommentVotes(comment_id, -1).catch(() => {
      setVotes((currVotes) => currVotes + 1);
      setErr('Sorry your vote failed, please try again');
    });
  };

  if (err) return <p>{err}</p>;
  return (
    <li key={comment.comment_id}>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>
        <button onClick={handleUpClick}>👍</button>
        Votes: {votes}
        <button onClick={handleDownClick}>👎</button>
      </p>

      {comment.author === user.username ? (
        <DeleteComments
          comments={comments}
          setComments={setComments}
          comment_id={comment.comment_id}
        />
      ) : null}
    </li>
  );
};

export default CommentCard;
