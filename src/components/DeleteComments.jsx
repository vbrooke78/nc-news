import { deleteComment } from '../utils/api';

const DeleteComments = ({ comments, setComments, comment_id }) => {
  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      alert('Message deleted');
      setComments((currComments) => {
        return currComments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
    });
  };

  return <button onClick={handleDelete}>🗑</button>;
};

export default DeleteComments;
