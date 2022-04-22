import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { ArticleCard } from './ArticleCard';
import OrderArticles from './OrderArticles';
import SortArticles from './SortArticles';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [orderBy, setOrderBy] = useState('desc');
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic, sortBy, orderBy)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr('Topic not found ☹️');
      });
  }, [topic, setArticles, sortBy, orderBy]);

  if (err) return <p>{err}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className="input-label">
        <SortArticles setSortBy={setSortBy} />
        <OrderArticles setOrderBy={setOrderBy} />
      </section>

      <ul className="articles">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
