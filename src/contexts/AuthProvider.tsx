import React, {createContext, useState, FC, ReactNode, useEffect} from "react";
import IAuthProvider from "./IAuthProvider";
import Cookies from "js-cookie";
import axios from "axios";

const defaultState = {
    auth:{
        currentUser:'',
        isApproved: false,
        authorities:[''],
        token: ''
    }
};

const AuthContext = createContext<IAuthProvider>(defaultState);

export const AuthProvider = ({children}:{children:ReactNode} ) => {

    const [auth, setAuth] = useState(defaultState.auth);
    const [loadedData, setLoadedData] = useState(false);

    const readCookie = () => {
        const token = Cookies.get('token');

        if(token) {
            (async () => {
                const res = await getCurrentUserDetail(token);

                const currentUser = res?.data.firstName;
                const isApproved = res?.data.approved;
                const authorities = res?.data.authorities;

                console.log(res?.data);
                console.log("readToken");
                console.log(currentUser, authorities, isApproved);

                if (setAuth) {
                    setAuth({currentUser, isApproved, authorities, token});
                }

            })()
        }
        //const data = getCurrentUserDetail(token)
    }

    const getCurrentUserDetail = (token:string) =>{
        try{
            return axios.get('http://localhost:8080/api/v1/users/details',
                {
                    headers: {'Authorization': 'Bearer ' + token}
                }
            );
        } catch (err) {
            console.error("el error es: ",err)
        }
    }

    useEffect(() => {
        readCookie()
    }, [loadedData]);


    const logOut = () =>{
        setLoadedData(false)
        Cookies.remove('token');
        setAuth(defaultState.auth);
    }

    // useEffect(() => {
    //     readCookie();
    //     console.log("cookie read")
    // }, [lostData]);


    return(
    <AuthContext.Provider value={{auth,setAuth,logOut,setLoadedData,loadedData}}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
