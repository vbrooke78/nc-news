import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/Users';
import { getUser } from '../utils/api';
import ErrorPage from './ErrorPage';

const UserTheme = () => {
  const [newUser, setNewUser] = useState('');
  const [error, setError] = useState('');

  const { user, setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    getUser(newUser)
      .then((userData) => {
        setUser(userData);
        setNewUser('');
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      {Object.keys(user).length === 0 ? (
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <label htmlFor="login">Enter username:</label>
            <input
              id="login"
              type="text"
              required
              defaultValue={user.username}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="login-container">
          <img alt="user avatar" src={user.avatar_url} height="120" />
          <div className="login-text-container">
            <h3>
              Welcome <br />
              {user.username}
            </h3>
            <Link key="profile" to={`/profile`}>
              <button>View my profile</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserTheme;
