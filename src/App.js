import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';
import Nav from './components/Nav';
import IndividualArticle from './components/IndividualArticle';
import { UserProvider } from './contexts/Users';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import MyArticles from './components/MyArticles';
import PostArticle from './components/PostArticle';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/:topic" element={<Articles />} />
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my_articles" element={<MyArticles />} />
          <Route path="/post_article" element={<PostArticle />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
