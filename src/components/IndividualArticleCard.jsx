import { useEffect, useState } from 'react';
import { updateVotes } from '../utils/api';

const IndividualArticleCard = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [hasVoted, setHasVoted] = useState(false);
  const [newVote, setNewVote] = useState(0);
  const [err, setErr] = useState(null);
  const { article_id } = article;

  const handleClick = (num) => {
    setNewVote((currVotes) => currVotes + num);
    setHasVoted(true);
  };

  useEffect(() => {
    if (!hasVoted) return;

    updateVotes(article_id, newVote)
      .then((updatedArticle) => {
        setVotes((currVotes) => currVotes + newVote);
      })
      .catch(() => {
        setErr('Sorry your vote failed, please try again');
      });
  }, [article_id, hasVoted]);

  if (err) return <p>{err}</p>;
  return (
    <div className="individual-article">
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>By: {article.author}</p>
      <p>{article.body}</p>
      <p>
        <button onClick={() => handleClick(1)}>👍</button>
        Votes: {votes}
        <button onClick={() => handleClick(-1)}>👎</button>
      </p>
      <button>💬 {article.comment_count} comments</button>
    </div>
  );
};

export default IndividualArticleCard;
