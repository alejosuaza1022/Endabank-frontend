interface IAuthProvider {
  auth: {
    currentUser: string;
    token: string;
  };
  setAuth?: (auth: { currentUser: string; token: string }) => void;
}

export default IAuthProvider;
