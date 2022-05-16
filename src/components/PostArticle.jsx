import ErrorPage from './ErrorPage';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/Users';
import { getTopics, postArticle } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const PostArticle = () => {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const [topics, setTopics] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    body: '',
    topic: '',
  });

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewArticle({ ...newArticle, author: user.username });
    postArticle(newArticle);
    navigate(`/articles/{newPostedArticle.article_id}`);
  };

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <h1>Post a new article</h1>
      <form className="post-article_form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          // defaultValue={user.username}
          onChange={(e) =>
            setNewArticle({ ...newArticle, title: e.target.value })
          }
        />
        <label htmlFor="topic">Topic:</label>
        <select
          onChange={(e) =>
            setNewArticle({ ...newArticle, topic: e.target.value })
          }
        >
          <option>---select---</option>
          {topics.map((topic) => (
            <option value={topic.slug} key={topic.slug}>
              {topic.slug}
            </option>
          ))}
        </select>
        <label htmlFor="content">Article:</label>
        <input
          id="content"
          type="text"
          required
          // defaultValue={user.username}
          onChange={(e) =>
            setNewArticle({ ...newArticle, body: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PostArticle;
