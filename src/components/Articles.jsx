import { useEffect } from 'react';
import { useState } from 'react';
import { getArticles } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <ul className="articles">
      {articles.map((article) => {
        return (
          <li className="listItems" key={article.article_id}>
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
