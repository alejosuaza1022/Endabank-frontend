import AuthContext from "../contexts/AuthProvider";
import { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import MainImage from "../components/MainImage/MainImage";
import "./index.css";
const LayoutHome = () => {
  const {
    auth: { token },
  } = useContext(AuthContext);
  useEffect(() => {}, [token]);
  return (
    <div>
      <header className="w-full flex justify-between items-center color-endabank">
        <div className=" flex justify-start">
          <MainImage></MainImage>
        </div>
        <div className="flex justify-around sm:w-1/4 text-white text-bold">
          {token.length === 0 && (
            <>
              {" "}
              <Link to="/">Inicio</Link>
              <Link to="/log-in/">Log-in</Link>
              <Link to="/sign-up/">Sing-up</Link>{" "}
            </>
          )}
        </div>
      </header>
      <div className="flex w-full justify-center mt-20">
        <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutHome;
