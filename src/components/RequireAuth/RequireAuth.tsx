import useAuth from "../../Hooks/useAuth";
import {useLocation,Outlet,Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";

const RequireAuth = ({ allowedRoles}: { allowedRoles:string[] }) => {
    const {auth,readCookie,lostData,setLostData} = useAuth()
    const location = useLocation()
    //const [test, setTest] = useState(false);


    const isActive = () =>{
        const token = Cookies.get('token');
        console.log('in required');
        if(token){
            if(auth.currentUser==''){
                if (readCookie) {
                    readCookie()
                    console.log("cookie read")
                }
                console.log("usu vacio")
            }
            return true;
        } else{
            return false;
        }
    }

    return(
        isActive()
            ? auth?.authorities?.find(role => allowedRoles?.includes(role))
                ? <Outlet />
                : <Navigate to="/unauthorized"/>
            :<Navigate to="/log-in" state={{from: location}} replace />
    )
}

export default RequireAuth;