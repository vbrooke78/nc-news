import axios from 'axios';

const vbNewsApi = axios.create({
  baseURL: 'https://vbnews.herokuapp.com/api',
});

/*----------articles----------*/

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

export const getArticle = (article_id) => {
  return vbNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const postArticle = (newArticle) => {
  return vbNewsApi.post('./articles', newArticle).then(({ data }) => {
    return data.newArticle;
  });
};

export const deleteArticle = (article_id) => {
  return vbNewsApi.delete(`/articles/${article_id}`);
};

/*----------topics----------*/

export const getTopics = () => {
  return vbNewsApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

/*----------comments----------*/

export const getComments = (article_id) => {
  return vbNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
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

/*----------votes----------*/

export const updateVotes = (article_id, inc_votes) => {
  return vbNewsApi
    .patch(`/articles/${article_id}`, {
      inc_votes,
    })
    .then(({ data }) => {
      return data.updatedArticle;
    });
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
