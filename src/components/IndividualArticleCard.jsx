import { useState } from 'react';
import ViewComments from './ViewComments';

const IndividualArticleCard = ({ article }) => {
  const [showComments, setShowComments] = useState(false);
  const [revealButton, setRevealButton] = useState(true);
  const handleClick = () => {
    setShowComments(!showComments);
    setRevealButton(!revealButton);
  };

  return (
    <div className="individual-article">
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>By: {article.author}</p>
      <p>{article.body}</p>
      <p>
        Votes: {article.votes}
        <button>👍</button>
        <button>👎</button>
      </p>
      <button onClick={handleClick}>
        💬 {article.comment_count} {revealButton ? 'Show' : 'Hide'} comments
      </button>
      {showComments && <ViewComments />}
    </div>
  );
};

export default IndividualArticleCard;
