import React, {createContext, useState, FC} from 'react';
import IAuthProvider from "./IAuthProvider";

const defaultState = {
    auth:{
        currentUser:'',
        token:''
    }
};

const AuthContext = createContext<IAuthProvider>(defaultState);

export const AuthProvider: FC =  ({children}) => {

    const [auth, setAuth] = useState(defaultState.auth);

    return(
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;