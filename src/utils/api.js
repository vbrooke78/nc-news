import axios from 'axios';

const vbNewsApi = axios.create({
  baseURL: 'https://vbnews.herokuapp.com/api',
});

export const getArticles = () => {
  return vbNewsApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};
