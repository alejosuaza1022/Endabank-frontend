import { Outlet } from "react-router-dom";
import MainImage from "../components/MainImage/MainImage";
import "./index.css";
const LayoutImage = () => {
  return (
    <div>
      <MainImage></MainImage>
      <div className="flex w-full justify-center mt-10">
        <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutImage;
