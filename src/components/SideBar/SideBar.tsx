import {Link} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import {SideBarElement} from "../../components/index";

const SideBar = () => {

  const {logOut,auth} = useAuth();

  return(
      <aside className="flex w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <SideBarElement name="Profile" route="/profile" icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </li>
            <li>
              <SideBarElement name="Account summary" route="/account-summary" icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
            </li>
            <li>
              <SideBarElement name="Transfer transaction" route="/transaction" icon="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </li>
            <li>
                <SideBarElement name="Password management" route="/home/reset-password"  icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </li>
              <li>
                  <SideBarElement name="Become a merchant" route="/became-merchant"  icon="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </li>
            {auth?.authorities?.find(role => ['ROLE_ADMIN'].includes(role)) &&
                <li>
                    <SideBarElement name="Users management" route="/activate-account" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </li>}
            <li>
                <SideBarElement name="Log out" route="/" onClick={logOut} icon="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </li>
          </ul>
        </div>
      </aside>
  );
}

export default SideBar;