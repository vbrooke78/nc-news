import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

// {
//   username: 'grumpy19',
//   avatar_url:
//     'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013',
//   name: 'Paul Grump',
// }
