import React, {createContext, useState, FC, ReactNode, useEffect} from "react";
import IAuthProvider from "./IAuthProvider";
import Cookies from "js-cookie";
import axios from "axios";
import apiUrls from "../constants/apiUrls";

const defaultState = {
    auth:{
        email: '',
        currentUser:'',
        isApproved: false,
        authorities:[''],
        token: ''
    }
};

const AuthContext = createContext<IAuthProvider>(defaultState);

export const AuthProvider = ({ children }:{children:ReactNode}) => {

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
                const email = res?.data.email;

                if (setAuth) {
                    setAuth({currentUser, isApproved, authorities, token,email});
                }

            })()
        }
    }

    const getCurrentUserDetail = (token:string) =>{
        try{
            return axios.get(`${apiUrls.GET_USER_DETAILS}`,
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

    return(
    <AuthContext.Provider value={{auth,setAuth,logOut,setLoadedData,loadedData}}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
