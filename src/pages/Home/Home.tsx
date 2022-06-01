import axios from "axios";
import { getAxios } from "../../utils/axios";
import React, { useEffect } from "react";
import {SideBar} from "../../components/index";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return(
      <div className="flex h-screen">
        <SideBar/>
          <div className="flex w-full">
              <Outlet />
          </div>
      </div>
  );
};

export default Home;
