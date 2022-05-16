import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/Users';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser({});
    navigate('/');
  };

  return (
    <div className="user-profile">
      <h1>Welcome {user.name}</h1>
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
          <dt>
            <strong>Articles posted:</strong>
          </dt>
        </dl>
      </div>
      <Link className="my-articles" key="my-articles" to={`/my_articles`}>
        <button>View my articles</button>
      </Link>
      <Link className="my-articles" key="home" to={`/`}>
        <button onClick={handleLogout}>Logout</button>
      </Link>
    </div>
  );
};

export default Profile;
