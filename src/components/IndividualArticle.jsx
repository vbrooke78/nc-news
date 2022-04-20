import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../utils/api';
import IndividualArticleCard from './IndividualArticleCard';

const IndividualArticle = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return <IndividualArticleCard article={article} />;
};

export default IndividualArticle;
