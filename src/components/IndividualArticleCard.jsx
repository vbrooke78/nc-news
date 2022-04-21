import { useState } from 'react';
import { getComments } from '../utils/api';
import ViewComments from './ViewComments';

const IndividualArticleCard = ({ article }) => {
  const [showComments, setShowComments] = useState(false);
  const handleClick = () => {
    setShowComments(!showComments);
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
      <button onClick={handleClick}>💬 {article.comment_count} comments</button>
      {showComments && <ViewComments />}
    </div>
  );
};

export default IndividualArticleCard;
