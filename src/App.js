import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';
import Nav from './components/Nav';
import IndividualArticle from './components/IndividualArticle';
import { UserProvider } from './contexts/Users';

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
