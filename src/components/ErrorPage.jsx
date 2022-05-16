const ErrorPage = ({ error: { response } }) => {
  console.log(response);
  return (
    <>
      {response.status ? (
        <>
          <h1>{response.status}</h1>
          <h2>{response.statusText}</h2>
          <p>{response.data.msg}</p>
        </>
      ) : (
        <>
          <h1>404</h1>
          <h2>Page not found!</h2>
        </>
      )}
    </>
  );
};

export default ErrorPage;
