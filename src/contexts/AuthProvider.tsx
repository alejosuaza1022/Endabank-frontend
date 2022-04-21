import React, {createContext, useState, FC, ReactNode} from "react";
import IAuthProvider from "./IAuthProvider";

const defaultState = {
  auth: {
    currentUser: "",
    token: "",
  },
};

const AuthContext = createContext<IAuthProvider>(defaultState);

export const AuthProvider = ({ children }:{children:ReactNode}) => {
  const [auth, setAuth] = useState(defaultState.auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
