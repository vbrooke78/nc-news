import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import { getUser } from '../utils/api';
import ErrorPage from './ErrorPage';

const UserTheme = () => {
  const [newUser, setNewUser] = useState('');
  const [error, setError] = useState('');

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(newUser)
      .then((userData) => {
        setUser(userData);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  if (error) return <ErrorPage error={error} />;
  return (
    <>
      <form onSubmit={handleSubmit} className="user-login">
        <label htmlFor="login">Enter username:</label>
        <input
          id="login"
          type="text"
          defaultValue={user.username}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="container">
        <h3 className="user-welcome">
          Welcome <br />
          {user.username}
        </h3>
        <img
          className="user-welcome"
          alt="user avatar"
          src={user.avatar_url}
          height="120"
        />
      </div>
    </>
  );
};

export default UserTheme;
