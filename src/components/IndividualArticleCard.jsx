import { useState } from 'react';
import ViewComments from './ViewComments';
import { updateArticleVotes } from '../utils/api';
// import PostComment from './PostComment';

const IndividualArticleCard = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [err, setErr] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [revealButton, setRevealButton] = useState(true);

  const { article_id } = article;

  const handleClick = () => {
    setShowComments(!showComments);
    setRevealButton(!revealButton);
  };

  const handleUpClick = () => {
    setVotes((currVotes) => currVotes + 1);
    updateArticleVotes(article_id, 1).catch(() => {
      setVotes((currVotes) => currVotes - 1);
      setErr('Sorry your vote failed, please try again');
    });
  };

  const handleDownClick = () => {
    setVotes((currVotes) => currVotes - 1);
    updateArticleVotes(article_id, -1).catch(() => {
      setVotes((currVotes) => currVotes + 1);
      setErr('Sorry your vote failed, please try again');
    });
  };

  if (err) return <p>{err}</p>;
  return (
    <>
      <div className="individual-article">
        <h2>{article.title}</h2>
        <p>Topic: {article.topic}</p>
        <p>By: {article.author}</p>
        <p>{article.body}</p>
        <p>
          <button onClick={handleUpClick}>👍</button>
          Votes: {votes}
          <button onClick={handleDownClick}>👎</button>
        </p>
        <button onClick={handleClick}>
          💬 {article.comment_count} {revealButton ? 'Show' : 'Hide'} comments
        </button>
        {showComments && <ViewComments />}
      </div>
    </>
  );
};

export default IndividualArticleCard;
