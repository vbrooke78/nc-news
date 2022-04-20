import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className="navBar">
      <Link className="links" key="home" to={`/`}>
        Home
      </Link>
      {topics.map(({ slug }) => {
        const label = slug[0].toUpperCase() + slug.substring(1);
        return (
          <Link className="links" key={slug} to={`/articles/${slug}`}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
