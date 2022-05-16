import { deleteArticle } from '../utils/api';

const DeleteArticle = ({ articles, setArticles, article_id }) => {
  const handleDelete = () => {
    deleteArticle(article_id).then(() => {
      alert('Article deleted');
      setArticles((currArticles) => {
        return currArticles.filter((article) => {
          return article.article_id !== article_id;
        });
      });
    });
  };

  return <button onClick={handleDelete}>🗑</button>;
};

export default DeleteArticle;
