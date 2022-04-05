import React, {createContext, useState, FC} from 'react';
import IAuthProvider from "./IAuthProvider";


const AuthContext = createContext<IAuthProvider>({});

export const AuthProvider: FC =  ({children}) => {

    const [auth, setAuth] = useState({});

    return(
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;