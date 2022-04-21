import AuthContext from "../contexts/AuthProvider";
import { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import MainImage from "../components/MainImage/MainImage";
import "./index.css";
const LayoutHome = () => {
  const {
    auth: { token,currentUser },
  } = useContext(AuthContext);
  useEffect(() => {}, [token]);

  return (
    <div className="h-screen">
      <header className="w-full flex justify-between items-center color-endabank">
        <div className=" flex justify-start">
          <MainImage/>
        </div>
        <div className="flex justify-around sm:w-1/4 text-white text-bold">
            {token?.length === 0
              ? (
                  <>
                    {" "}
                    <Link to="/log-in/">Log-in</Link>
                    <Link to="/sign-up/">Sing-up</Link>{" "}
                  </>
                )
              : (<>
                {" "}
                <div>{currentUser}</div>{" "}
              </>)
          }
        </div>
      </header>
      <Outlet/>
    </div>
  );
};

export default LayoutHome;
