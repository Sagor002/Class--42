const HOC = ({ children, authStatus} ) => {
  if (authStatus) {
  return children ;
  }else{
    return <p>You're not logged in!</p>;
  }
};

export default HOC;
