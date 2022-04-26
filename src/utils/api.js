import axios from 'axios';

const vbNewsApi = axios.create({
  baseURL: 'https://vbnews.herokuapp.com/api',
});

export const getArticles = (topic, sortBy, orderBy) => {
  return vbNewsApi
    .get('/articles', {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: orderBy,
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

export const getComments = (article_id) => {
  return vbNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const updateVotes = (article_id, inc_votes) => {
  return vbNewsApi
    .patch(`/articles/${article_id}`, {
      inc_votes,
    })
    .then(({ data }) => {
      return data.updatedArticle;
    });
};

export const postComment = (article_id, username, comment) => {
  return vbNewsApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: comment,
    })
    .then(({ data }) => {
      return data.newComment;
    });
};

export const deleteComment = (comment_id) => {
  return vbNewsApi.delete(`/comments/${comment_id}`);
};

export const getUser = (username) => {
  return vbNewsApi.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const getUsers = () => {
  return vbNewsApi.get('/users').then(({ data }) => {
    return data.users;
  });
};
