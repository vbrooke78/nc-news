import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import DeleteArticle from './DeleteArticle';

export const ArticleCard = ({ article, articles, setArticles }) => {
  const { user } = useContext(UserContext);

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
      {article.author === user.username ? (
        <DeleteArticle
          articles={articles}
          setArticles={setArticles}
          article_id={article.article_id}
        />
      ) : null}
    </li>
  );
};
