import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useContext} from "react";
import Cookies from "js-cookie";
import AuthContext from "../../contexts/AuthProvider";

const RequireAuth = ({allowedRoles}: { allowedRoles: string[] }) => {
    const {
        auth: {authorities, currentUser, token},
    } = useContext(AuthContext);
    const location = useLocation()
    const tokenCookie = Cookies.get('token');

    return (
        tokenCookie
            ? <Outlet/>
            : <Navigate to="/log-in" state={{from: location}} replace/>
    )
}

export default RequireAuth;