import useAuth from "../../Hooks/useAuth";
import {useLocation,Outlet,Navigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import AuthContext from "../../contexts/AuthProvider";

const RequireAuth = ({ allowedRoles}: { allowedRoles:string[] }) => {
    const {
        auth: { authorities,currentUser },
    } = useContext(AuthContext);
    const location = useLocation()
    //const [test, setTest] = useState(false);
    const token = Cookies.get('token');

    console.log('in required');
    console.log(authorities)



    return(
        token
            ? <Outlet />
            :<Navigate to="/log-in" state={{from: location}} replace />
    )
}

export default RequireAuth;