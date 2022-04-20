const IndividualArticleCard = ({ article }) => {
  return (
    <div className="individual-article">
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>By: {article.author}</p>
      <p>{article.body}</p>
      <p>
        Votes: {article.votes}
        <button>👍</button>
        <button>👎</button>
      </p>
      <button>💬 {article.comment_count} comments</button>
    </div>
  );
};

export default IndividualArticleCard;
