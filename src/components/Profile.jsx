import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/Users';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser({});
    navigate('/');
  };

  return (
    <div className="user-profile">
      <h1>{user.name}'s Profile</h1>
      <div className="profile-container">
        <img
          className="profile-container"
          alt="user avatar"
          src={user.avatar_url}
          height="120"
        />
        <dl>
          <dt>
            <strong>Name:</strong> {user.name}
          </dt>
          <dt>
            <strong>Username:</strong> {user.username}
          </dt>
        </dl>
      </div>
      <Link key="my-articles" to={`/my_articles`}>
        <button>View my articles</button>
      </Link>
      <Link key="post-article" to={`/post_article`}>
        <button>Post an article</button>
      </Link>
      <Link key="home" to={`/`}>
        <button onClick={handleLogout}>Logout</button>
      </Link>
    </div>
  );
};

export default Profile;
