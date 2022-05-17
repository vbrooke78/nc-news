import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ error: { response } }) => {
  let navigate = useNavigate();

  console.log(response);
  return (
    <>
      {response.status ? (
        <div className="error-container">
          <h1>{response.status}</h1>
          <h2>{response.statusText}</h2>
          <p>{response.data.msg}</p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      ) : (
        <div className="error-container">
          <h1>404</h1>
          <h2>Page not found!</h2>
        </div>
      )}
    </>
  );
};

export default ErrorPage;
