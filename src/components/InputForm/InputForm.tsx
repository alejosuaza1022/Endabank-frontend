import InputProps from "./input.interface";
import "./index.css";
import React, {useEffect} from "react";

const InputForm: React.FC<InputProps> = ({
                                             type,
                                             id,
                                             label,
                                             error,
                                             register,
                                             optionsValidations,
                                             dataId
                                         }) => {
    const [typeInput, setTypeInput] = React.useState(type);
    const [offsetRevealPassword, setOffsetRevealPassword] = React.useState(2);
    if(error && typeInput === "password" && offsetRevealPassword === 2) {
        setOffsetRevealPassword(7);
    }else if(!error && typeInput === "password" && offsetRevealPassword === 7) {
        setOffsetRevealPassword(2);
    }

    return (
        <div className="relative z-0 mb-6 w-full group">
            <input
                type={typeInput}
                id={id}
                data-id={dataId}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                    error
                        ? "border-red-500 focus:border-red-500"
                        : "focus:border-black border-gray-300 "
                } appearance-none  focus:outline-none focus:ring-0  peer`}
                placeholder=" "
                {...register(id, {
                    required: {
                        value: true,
                        message: "This field is required",
                    },
                    ...optionsValidations,
                })}
            />
            {type === "password" && (
                <div className={`absolute ${!error ? "bottom-2" : "bottom-7" } right-0`}

                     onMouseOver={() => {
                         const aux  = type === "password" ? "text" : "password"
                         setTypeInput(aux)
                     }}
                     onMouseLeave={() => {
                         const aux  = type === "password" ? "password" : "text"
                         setTypeInput(aux)
                     }}
                >
                    <svg className="w-5 h-5 hover:w-6 hover:h-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                </div>
            )}
            <label
                htmlFor={id}
                className={`absolute text-sm text-gray-500  duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
                    error
                        ? "peer-focus:text-red-500 text-red-500"
                        : "peer-focus:text-black text-gray-500"
                }  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`}
            >
                {label}
            </label>

            {error && error.type === "validate" && id === "password" ? (
                <p className="text-xs text-red-600 ml-1 mt-2 text-bold">
                    The old password and new password must be different
                </p>
            ) : error && error.type === "validate" && id === "rePassword" ? (
                <p className="text-xs text-red-600 ml-1 mt-2 text-bold">
                    Passwords do not match
                </p>
            ) : error ? (
                <p className="text-xs text-red-600 ml-1 mt-2 text-bold">{error.message}</p>
            ) : null}
        </div>
    );
};

export default InputForm;
