import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api';
import DeleteComments from './DeleteComments';
import PostComment from './PostComment';
import { useContext } from 'react';
import { UserContext } from '../contexts/Users';

const ViewComments = () => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [article_id, setComments]);

  if (isLoading) return <p>Loading...</p>;
  if (comments.length === 0) return <p>Be the first to comment!</p>;
  return (
    <>
      <PostComment
        article_id={article_id}
        comment={comments}
        setComments={setComments}
      />
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

              {comment.author === user.username ? (
                <DeleteComments
                  comments={comments}
                  setComments={setComments}
                  comment_id={comment.comment_id}
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ViewComments;
