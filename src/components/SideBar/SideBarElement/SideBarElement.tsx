import {Link} from "react-router-dom";
import React from "react";
import SideBarProps from "@components/SideBar/SideBarElement/sideBarElement.interface";

const SideBarElement:React.FC<SideBarProps> = ({id,
    name,icon,route,onClick,
                        }) => {
    return(
        <Link id={id} to={route} onClick={onClick}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d={icon}/>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
        </Link>
    );
}

export default SideBarElement;