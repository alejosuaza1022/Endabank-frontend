import React, { createContext, useState, FC } from "react";
import IAuthProvider from "./IAuthProvider";
import Cookies from "js-cookie";
import axios from "axios";

const defaultState = {
    auth:{
        currentUser:'',
        isApproved: false,
        authorities:['']

    }
};

const AuthContext = createContext<IAuthProvider>(defaultState);

export const AuthProvider: FC = ({ children }) => {

    const [auth, setAuth] = useState(defaultState.auth);
    const [lostData, setLostData] = useState(-1);

    const readCookie = () => {
        const token = Cookies.get('token');
        if(token){

                (async () =>{
                const res = await getCurrentUserDetail(token);

                const currentUser = res?.data.firstName;
                const isApproved = res?.data.approved;
                const authorities = res?.data.authorities;

                console.log(res?.data);
                    console.log("readToken");
                console.log(currentUser, authorities, isApproved);

                setAuth({currentUser,isApproved, authorities});


             })()
            //const data = getCurrentUserDetail(token)
        } else {
            console.log('err')
        }
    }

    const getCurrentUserDetail = async (token:string) =>{
        try{
            return await axios.get('http://localhost:8080/api/v1/users/details',
                {
                    headers: {'Authorization': 'Bearer ' + token}
                }
            );
        } catch (err) {
            console.error("el error es: ",err)
        }
    }

    const logOut = () =>{
        Cookies.remove('token');
        setAuth(defaultState.auth);
    }

    // useEffect(() => {
    //     readCookie();
    //     console.log("cookie read")
    // }, [lostData]);


    return(
    <AuthContext.Provider value={{auth,setAuth,readCookie,logOut,setLostData}}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
