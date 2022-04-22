import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';
import Nav from './components/Nav';
import IndividualArticle from './components/IndividualArticle';
import { UserContext } from './contexts/Users';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: 'grumpy19',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013',
    name: 'Paul Grump',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/:topic" element={<Articles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<IndividualArticle />}
          ></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
