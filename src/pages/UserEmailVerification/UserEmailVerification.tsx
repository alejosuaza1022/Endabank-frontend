import React, {useEffect, useState} from "react";
import {getAxios, postAxios} from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";
import {PopUpMessage, Spinner} from "../../components/index";
import {useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";
import emailSentLogo from "../../assets/email-sent.svg";
import Strings from "../../constants/strings";
import "./userEmailVerification.css";

const UserEmailVerification = ({email}: { email: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    email = email ?? searchParams.get("email");
    console.log(email);
    const [colorPopUpMessage, setColorPopUpMessage] = useState<string>(Strings.COLOR_SUCCESS);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>(Strings.USER_REGISTERED);
    const [linkMessagePopUp, setLinkMessagePopUp] = useState<string>("#");

    async function handleGenerateNewEmailVerification() {
        setIsLoading(true);
        try {
            const data = await getAxios(apiUrls.VERIFY_USER_EMAIL_URL+email, undefined);
            setIsLoading(false);
            setShowPopUpMessage(true);
            setMessagePopUp(data.message);
            setColorPopUpMessage(Strings.COLOR_SUCCESS)
        } catch (e) {
            const error = e as AxiosError;
            setIsLoading(false);
            setShowPopUpMessage(true);
            console.log(error)
            setMessagePopUp(error?.response?.data?.message || Strings.ERROR_MESSAGE);
            setColorPopUpMessage(Strings.COLOR_ERROR);
        }
    }

    useEffect(() => {

            async function verifyEmail() {

                if (token) {
                    setIsLoading(true);
                    try {
                        const data = await postAxios(apiUrls.VERIFY_USER_EMAIL_URL + token, {token}, undefined);
                        setIsLoading(false);
                        setShowPopUpMessage(true);
                        setMessagePopUp(data.message);
                        setLinkMessagePopUp("/login");
                        setColorPopUpMessage(Strings.COLOR_SUCCESS)
                    } catch (e) {
                        const error = e as AxiosError;
                        setIsLoading(false);
                        setShowPopUpMessage(true);
                        console.log(error)
                        setMessagePopUp(error?.response?.data?.message || Strings.ERROR_MESSAGE);
                        setColorPopUpMessage(Strings.COLOR_ERROR);
                    }
                }
            }

            verifyEmail();
        },
        [token]
    )
    ;

    return <>{
        isLoading ? <Spinner/> : (
            <>
                <div className="flex flex-col h-5/6 w-full items-center ">
                    <div
                        className=" lg:w-1/3 sm:w-1/2 p-4 bg-white h-full bg-gray-50 rounded-lg border shadow-md sm:p-8 justify-between items-center mt-10 ">
                        <div className="w-full h-1/2 flex justify-center  ">
                            <div className="flex justify-center color-endabank circle-container">
                                <img className="  w-24 my-2 item-center" src={emailSentLogo} alt="imagen endabank"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full mt-2">
                            <h2 className="font-bold text-center text-2xl">
                                Email Verification
                            </h2>
                            <p className="mt-10 text-center">
                                Please verify your email using the link sent to {email}.
                            </p>
                            <div
                                className="cursor-pointer lg:w-1/2  sm:w-3/4 flex  justify-between items-center color-endabank font-bold mt-4 h-1/2 text-center text-2xl rounded-lg pl-4  py-3"
                                onClick={ () =>  handleGenerateNewEmailVerification()}
                            >
                                <p>
                                    Resend Email
                                </p>
                                <svg className="h-5 w-1/4 " xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <g data-name="20.Arrow Right">
                                        <path
                                            d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/>
                                        <path
                                            d="m13.707 16.707-1.414-1.414L15.586 12l-3.293-3.293 1.414-1.414L18.414 12l-4.707 4.707z"/>
                                        <path d="M6 11h11v2H6z"/>
                                    </g>
                                </svg>
                            </div>

                            <p className="mt-4 text-center">
                                Didn't receive the email?, <br/>press the button to resend it.
                            </p>

                        </div>
                    </div>
                </div>
                {showPopUpMessage ? (
                    <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                        <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                      color={colorPopUpMessage}/>
                    </div>) : null}
            </>)}
    </>;
};

export default UserEmailVerification;
