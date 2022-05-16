import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../utils/api';
import ErrorPage from './ErrorPage';
import IndividualArticleCard from './IndividualArticleCard';

const IndividualArticle = () => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  useEffect(() => {
    getArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id, setError]);
  if (error) return <ErrorPage error={error} />;
  if (!article) return null;

  return <IndividualArticleCard article={article} />;
};

export default IndividualArticle;
