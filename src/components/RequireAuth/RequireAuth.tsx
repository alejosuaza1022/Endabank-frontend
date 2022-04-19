import useAuth from "../../Hooks/useAuth";
import {useLocation,Outlet,Navigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import AuthContext from "../../contexts/AuthProvider";

const RequireAuth = ({ allowedRoles}: { allowedRoles:string[] }) => {
    const {
        auth: { authorities,currentUser,token },
    } = useContext(AuthContext);
    const location = useLocation()
    const tokenCookie = Cookies.get('token');
    console.log(typeof tokenCookie)

    console.log('in required');



    return(
        tokenCookie
            ? <Outlet />
            :<Navigate to="/log-in" state={{from: location}} replace />
    )
}

export default RequireAuth;