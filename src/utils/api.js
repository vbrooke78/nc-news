import axios from 'axios';

const vbNewsApi = axios.create({
  baseURL: 'https://vbnews.herokuapp.com/api',
});

export const getArticles = (topic) => {
  return vbNewsApi
    .get('/articles', {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return vbNewsApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const getArticle = (article_id) => {
  return vbNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
