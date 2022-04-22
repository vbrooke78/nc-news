import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import { getUser } from '../utils/api';

const UserTheme = () => {
  const [newUser, setNewUser] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(newUser).then((userData) => {
      setUser(userData);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="user-login">
        {/* <label htmlFor="login">Login:</label> */}
        <input
          id="login"
          type="text"
          defaultValue={user.username}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <h3 className="user-welcome">Welcome {user.username}</h3>
      <img
        className="user-welcome"
        alt="user avatar"
        src={user.avatar_url}
        height="120"
      />
    </>
  );
};

export default UserTheme;
