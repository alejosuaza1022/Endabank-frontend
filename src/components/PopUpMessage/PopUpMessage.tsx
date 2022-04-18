import React from "react";
import PopUpMessageProps from "./popUpMessage.interface";
import "./popUpMessage.css";
import {Link} from "react-router-dom";

const PopUpMessage: React.FC<PopUpMessageProps>
    = ({
           message, setShowPopUpMessage, isColorError
           , link = "#", linkMessage = ""
       }) => {
    console.log(isColorError)
    return (
        <div
            id="alert-2"
            className={`alert-toast flex p-4 mb-4  rounded-lg ${isColorError ? "dark:bg-red-200 bg-red-100" : "dark:bg-green-200 bg-green-100 "}`}
            role="alert"
        >
            <svg
                className={`flex-shrink-0 w-5 h-5 ${isColorError ? "text-red-700 dark:bg-red-800" : "text-green-700 dark:bg-green-800"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                />
            </svg>
            <div
                className={`ml-3 text-sm font-medium ${isColorError ? "text-red-700 dark:bg-red-800" : "text-green-700 dark:bg-green-800"}`}>
                {message}{" "}
                {linkMessage?.length > 0 &&
                    <Link
                        to={link}
                        className={`font-semi-bold underline ${isColorError ? "hover:text-red-800 dark:hover:bg-red-900" : "hover:text-green-800 dark:hover:bg-green-900"}`}
                    >
                        {linkMessage}
                    </Link>
                }
            </div>
            <button
                type="button"
                className={`ml-auto -mx-1.5 -my-1.5 
                ${isColorError ? "text-red-700 dark:bg-red-200 text-red-500 focus:bg-red-400 hover:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" : "text-green-700 dark:bg-green-200 text-green-500 focus:bg-green-400 hover:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"}
               rounded-lg focus:ring-2  p-1.5  inline-flex h-8 w-8 `}
                data-dismiss-target="#alert-2"
                aria-label="Close"
                onClick={() => {
                    setShowPopUpMessage(false);
                }}
            >
                <span className="sr-only">Close</span>
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>);
};

export default PopUpMessage;
