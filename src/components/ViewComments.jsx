import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api';
import PostComment from './PostComment';
import { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import ErrorPage from './ErrorPage';
import CommentCard from './CommentCard';

const ViewComments = () => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id, setComments]);

  if (error) return <ErrorPage error={error} />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <PostComment
          article_id={article_id}
          comment={comments}
          setComments={setComments}
        />
      ) : (
        <h3>** Please login to post a comment **</h3>
      )}
      <ul>
        {comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              comments={comments}
              setComments={setComments}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ViewComments;
