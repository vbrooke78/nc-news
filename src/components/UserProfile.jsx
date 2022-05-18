import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/Users';

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  return (
    <>
      {Object.keys(user).length === 0 ? (
        <button className="login-button" onClick={() => navigate('/login')}>
          Login
        </button>
      ) : (
        <div className="profile-login-container">
          <img
            className="user-image"
            alt="user avatar"
            src={user.avatar_url}
            height="120"
          />
          <div className="profile-login-text-container">
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

export default UserProfile;
