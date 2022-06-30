import {Input, PopUp, PopUpMessage, Spinner} from "../../components/index";
import {SubmitHandler, useForm} from "react-hook-form";
import LoginObject from "./loginFromMerchantObject.interface";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios, {AxiosError} from "axios";
import AuthContext from "../../contexts/AuthProvider";
import Cookies from 'js-cookie'

import Strings from "../../constants/strings";
import apiUrls from "../../constants/apiUrls";


const LogInFromMerchant = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<LoginObject>({mode: "onTouched"});

    const [showModal, setShowModal] = useState(false);
    const {setLoadedData} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isColorError, setIsColorError] = useState<boolean>(false);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [linkPopUp, setLinkPopUp] = useState("");
    const [messagePopUp, setMessagePopUp] = useState<string>(Strings.USER_REGISTERED);
    const [linkPopUpMessage, setLinkPopUpMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit: SubmitHandler<LoginObject> = async (data, e) => {
        e?.preventDefault()
        const email = data.email;
        const password = data.password;
        setShowPopUpMessage(false)

        try {
            setIsLoading(true)
            const res = await axios.post(`${apiUrls.LOG_IN_URL}`,
                JSON.stringify({email, password}),
                {
                    headers: {'Content-type': "application/json"}
                }
            );
            //TODO Add token verification
            const token = res.data.accessToken;
            const isApproved = res.data.isApproved;

            if(isApproved){
                Cookies.set('token',token, {sameSite: 'strict'});
                if (setLoadedData) {
                    setLoadedData(true)
                }
                navigate('/merchant-transaction');
            } else{
                setMessagePopUp(Strings.UNVERIFIED_USER)
                setIsColorError(true);
                setShowPopUpMessage(true)
            }



        } catch (err) {
            const error = err as AxiosError;
            if (error.response?.data?.statusCode == 403) {
                setIsLoading(false);
                setIsColorError(true);
                setMessagePopUp(error?.response?.data?.message || Strings.ERROR_MESSAGE);
                setLinkPopUp("/verify-email?email=" + data.email);
                setLinkPopUpMessage(Strings.LETS_VERIFY_EMAIL)
                setShowPopUpMessage(true);
            }
            else if(error.response?.data?.statusCode == (401 || 400)){
                setIsColorError(true);
                setLinkPopUpMessage('')
                setLinkPopUp('')
                setMessagePopUp(Strings.INCORRECT_CREDENTIALS)
                setShowPopUpMessage(true);
            }
        }
        setIsLoading(false)
        reset();
    };


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
                        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                type="text"
                                id="email"
                                dataId="emailInputLogin"
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
                                dataId="passwordInputLogin"
                                label="Password"
                                error={errors.password}
                                register={register}
                            />
                            <button
                                id="submitLogin"
                                type="submit"
                                className="text-white color-endabank focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Log In
                            </button>
                            <div className="m-5 text-right text-sm">
                                <a id="forgotPasswordHyperlink" className="decoration-0 cursor-pointer underline" onClick={openModal}>
                                    Forgot password?
                                </a>
                            </div>
                        </form>
                        <div className="text-center text-sm m-0 border-t-2 border-gray-300 pt-5 underline">
                            New merchant? <Link id="signUpHyperlink" to="/sign-up">create an account</Link>
                        </div>
                    </div>
                </div>
            </>

        );
    }
    return (
        <div className="w-full">
            {showModal && (<PopUp setShowModal={setShowModalFuntion}/>)}
            {renderFormOrLoading()}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                  isColorError={isColorError} link={linkPopUp} linkMessage={linkPopUpMessage}/>
                </div>
            )}

        </div>
    );
};

export default LogInFromMerchant;
