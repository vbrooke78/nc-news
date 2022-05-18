import ErrorPage from './ErrorPage';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/Users';
import { getTopics, postArticle } from '../utils/api';
import { generatePath, useNavigate } from 'react-router-dom';

const PostArticle = () => {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const [topics, setTopics] = useState([]);
  const [article, setArticle] = useState({
    title: '',
    body: '',
    topic: '',
  });

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  useEffect(() => {
    setArticle({ ...article, author: user.username });
  }, [article, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postArticle(article)
      .then((newArticle) => {
        navigate(generatePath('/articles/:id', { id: newArticle.article_id }));
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <div className="post-article-container">
        <h2 className="post-article-heading">
          Post a new article as {user.username}
        </h2>
        <form className="post-article-form" onSubmit={handleSubmit}>
          <div className="post-article-topic">
            <label htmlFor="topic">Topic:</label>
            <select
              onChange={(e) =>
                setArticle({ ...article, topic: e.target.value })
              }
            >
              <option>---select---</option>
              {topics.map((topic) => (
                <option value={topic.slug} key={topic.slug}>
                  {topic.slug}
                </option>
              ))}
            </select>
          </div>
          <textarea
            className="post-article-title"
            id="title"
            required
            placeholder="Enter title here"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
          />
          <textarea
            className="post-article-body"
            id="content"
            placeholder="Post article here"
            required
            value={article.body}
            onChange={(e) => setArticle({ ...article, body: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default PostArticle;
