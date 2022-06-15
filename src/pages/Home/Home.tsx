import React from "react";
import {SideBar} from "../../components/index";
import { Outlet } from "react-router-dom";

const Home = () => {
  return(
      <div className="flex h-screen">
        <SideBar/>
          <div className="flex w-full justify-center">
              <Outlet />
          </div>
      </div>
  );
};

export default Home;
