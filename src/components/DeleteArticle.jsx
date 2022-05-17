import { deleteArticle } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const DeleteArticle = ({ setArticles, article_id }) => {
  let navigate = useNavigate();
  const handleDelete = () => {
    deleteArticle(article_id).then(() => {
      alert('Article deleted');
      if (!setArticles) {
        navigate(-1);
      } else {
        setArticles((currArticles) => {
          return currArticles.filter((article) => {
            return article.article_id !== article_id;
          });
        });
      }
    });
  };

  return <button onClick={handleDelete}>Delete article</button>;
};

export default DeleteArticle;
