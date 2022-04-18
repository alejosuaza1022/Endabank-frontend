import {Input, PopUp, PopUpMessage, Spinner} from "../../components/index";
import {SubmitHandler, useForm} from "react-hook-form";
import LoginObject from "./loginObject.interface";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios, {AxiosError} from "axios";
import AuthContext from "../../contexts/AuthProvider";
import apiUrls from "../../constants/apiUrls";
import {getAxios} from "../../utils/axios";
import PopUpEmailInterface from "@components/PopUp/popUpEmail.interface";
import strings from "../../constants/strings";

const LogInForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<LoginObject>({mode: "onTouched"});

    const [showModal, setShowModal] = useState(false);
    const {auth, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const [colorPopUpMessage, setColorPopUpMessage] = useState<string>(strings.COLOR_SUCCESS);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [linkPopUp, setLinkPopUp] = useState("");
    const [messagePopUp, setMessagePopUp] = useState<string>(strings.USER_REGISTERED);
    const [linkPopUpMessage, setLinkPopUpMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit: SubmitHandler<LoginObject> = async (data, e) => {
        e?.preventDefault()
        const email = data.email;
        const password = data.password;
        setShowPopUpMessage(false)
        try {
            const res = await axios.post('http://localhost:8080/api/v1/login',
                JSON.stringify({email, password}),
                {
                    headers: {'Content-type': "application/json"}
                }
            );
            const token = res.data.access_token;
            const currentUser = email;
            if (setAuth) {
                setAuth({currentUser, token});
            }
            navigate('/');
        } catch (err) {
            const error = err as AxiosError;
            if (error.response?.data?.statusCode == 403) {
                setIsLoading(false);
                setColorPopUpMessage(strings.COLOR_ERROR);
                setMessagePopUp(error?.response?.data?.message || strings.ERROR_MESSAGE);
                setColorPopUpMessage(strings.COLOR_ERROR);
                setLinkPopUp("/verify-email?email=" + data.email);
                setLinkPopUpMessage(", Lets verify your email")
                setShowPopUpMessage(true);

            }
        }

        reset();
    };


    async function sendEmail(data: PopUpEmailInterface) {
        console.log(apiUrls.GET_USERS_RESET_PASSWORD_URL + "/" + data.email);
        const response: Array<PopUpEmailInterface> = await getAxios(
            apiUrls.GET_USERS_RESET_PASSWORD_URL + "/" + data.email,
            ""
        );

        console.log(response);
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    };

    const setShowModalFuntion = (value: boolean) => {
        setShowModal(value);
    };
    const renderFormOrLoading = () => {
        return isLoading ? <Spinner/> : (
            <>
                <div className="flex w-full justify-center mt-20 ">
                    <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                type="text"
                                id="email"
                                label="Email"
                                register={register}
                                error={errors.email}
                                optionsValidations={{
                                    pattern: {
                                        value:
                                            /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/,
                                        message: "This field must be a valid email",
                                    },
                                }}
                            />
                            <Input
                                type="password"
                                id="password"
                                label="Password"
                                error={errors.password}
                                register={register}
                                optionsValidations={{
                                    pattern: {
                                        value: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
                                        message:
                                            "1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters",
                                    },
                                }}
                            />
                            <button
                                type="submit"
                                className="text-white color-endabank focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Log In
                            </button>
                            <div className="m-5 text-right text-sm">
                                <a className="decoration-0 cursor-pointer" onClick={openModal}>
                                    Forgot password?
                                </a>
                            </div>
                        </form>
                        <div className="text-center text-sm m-0 border-t-2 border-gray-300 pt-5">
                            New merchant? <Link to="/signup">create an account</Link>
                        </div>
                    </div>
                </div>
            </>

        );
    }
    return (
        <div className="w-full">
            {showModal && (<PopUp setShowModal={setShowModalFuntion} callback={sendEmail}/>)}
            {renderFormOrLoading()}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                  color={colorPopUpMessage} link={linkPopUp} linkMessage={linkPopUpMessage}/>
                </div>
            )}

        </div>
    );
};

export default LogInForm;
