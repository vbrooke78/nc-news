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
        <form onSubmit={handleLogin} className="user-login">
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
      ) : (
        <div className="login-container">
          <h3 className="user-login">
            Welcome <br />
            {user.username}
          </h3>
          <img
            className="user-login"
            alt="user avatar"
            src={user.avatar_url}
            height="120"
          />

          <Link className="profile" key="profile" to={`/profile`}>
            <button>View my profile</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserTheme;
