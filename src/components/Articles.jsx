import { useEffect } from 'react';
import { useState } from 'react';
import { getArticles } from '../utils/api';

const Articles = () => {
  getArticles();
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
            <h3>Author: {article.author}</h3>
            <h3>Topic: {article.topic}</h3>
            <h4>Votes: {article.votes}</h4>
            <h4>Comments: {article.comment_count}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
