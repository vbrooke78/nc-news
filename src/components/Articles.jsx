import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { ArticleCard } from './ArticleCard';

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
  }, [topic, setArticles]);

  if (err) return <p>{err}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="articles">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};

export default Articles;
