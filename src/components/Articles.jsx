import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr('Topic not found ☹️');
      });
  }, [topic]);

  if (err) return <p>{err}</p>;
  if (isLoading) return <p>Loading...</p>;
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
