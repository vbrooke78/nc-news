import { useState } from 'react';
import { updateVotes } from '../utils/api';

const IndividualArticleCard = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [err, setErr] = useState(null);
  const { article_id } = article;

  const handleUpClick = () => {
    setVotes((currVotes) => currVotes + 1);
    updateVotes(article_id, 1).catch(() => {
      setVotes((currVotes) => currVotes - 1);
      setErr('Sorry your vote failed, please try again');
    });
  };

  const handleDownClick = () => {
    setVotes((currVotes) => currVotes - 1);
    updateVotes(article_id, -1).catch(() => {
      setVotes((currVotes) => currVotes + 1);
      setErr('Sorry your vote failed, please try again');
    });
  };

  if (err) return <p>{err}</p>;
  return (
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
      <button>💬 {article.comment_count} comments</button>
    </div>
  );
};

export default IndividualArticleCard;
