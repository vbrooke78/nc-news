import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import { getUser } from '../utils/api';
import ErrorPage from './ErrorPage';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [newUser, setNewUser] = useState('');
  const [error, setError] = useState('');

  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    getUser(newUser)
      .then((userData) => {
        setUser(userData);
        setNewUser('');
        navigate('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) return <ErrorPage error={error} />;

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="login-form-container">
          <label htmlFor="login">Enter username:</label>
          <input
            id="login"
            type="text"
            required
            defaultValue={user.username}
            onChange={(e) => setNewUser(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
