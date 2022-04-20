import { Link } from 'react-router-dom';

export const ArticleCard = ({ article }) => {
  return (
    <li className="listItems" key={article.article_id}>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <Link to={`/articles/${article.article_id}`}>
        <button>Read more</button>
      </Link>
    </li>
  );
};
