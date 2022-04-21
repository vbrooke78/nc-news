import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api';

const ViewComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>
              <button>👍</button>
              Votes: {comment.votes}
              <button>👎</button>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ViewComments;
