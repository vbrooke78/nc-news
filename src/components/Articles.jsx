import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { ArticleCard } from './ArticleCard';
import ErrorPage from './ErrorPage';
import OrderArticles from './OrderArticles';
import SortArticles from './SortArticles';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [orderBy, setOrderBy] = useState('desc');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic, sortBy, orderBy)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic, setArticles, sortBy, orderBy]);

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      {isLoading ? (
        <h2 className="isLoading">Loading articles...</h2>
      ) : (
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
      )}
    </>
  );
};

export default Articles;
