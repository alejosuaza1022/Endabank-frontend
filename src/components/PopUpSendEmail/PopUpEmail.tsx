import {SubmitHandler, useForm} from "react-hook-form";
import {Input, PopUpMessage} from "../index";
import apiUrls from "../../constants/apiUrls";
import {getAxios} from "../../utils/axios";
import Strings from "../../constants/strings";
import strings from "../../constants/strings";
import {AxiosError} from "axios";
import {useState} from "react";

interface FieldObject {
    email: string;
}

const PopUpEmail = (props: { setShowModal: Function }) => {

    const [isColorError, setIsColorError] = useState<boolean>(false);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>(strings.USER_REGISTERED);

    const {setShowModal} = props;
    setShowModal(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<FieldObject>({mode: "onTouched"});

    const onSubmit: SubmitHandler<FieldObject> = async (data) => {
        setShowPopUpMessage(false);
        try {
            console.log(data);
            console.log(apiUrls.GET_USERS_RESET_PASSWORD_URL + "/" + data.email);
            const response: Array<FieldObject> = await getAxios(
                apiUrls.GET_USERS_RESET_PASSWORD_URL + "/" + data.email,
                ""
            );
            console.log(response);
            setIsColorError(false)
            setMessagePopUp(Strings.MAIL_SEND);
            setShowPopUpMessage(true);
            reset();

        } catch (err) {
            const error = err as AxiosError;
            let message = strings.ERROR_MESSAGE;
            if (error.response?.data?.statusCode != 500) {
                message = error.response?.data?.message || strings.ERROR_MESSAGE;
            }
            setShowPopUpMessage(true);
            setIsColorError(true)
            setMessagePopUp(message);
        }
        setShowPopUpMessage(true);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 sm:p-8 bg-gray-200 bg-opacity-80 rounded-lg">
                <div className="relative w-auto my-6 mx-auto max-w-3x2">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none border-2 border-orange-500 sm:p-1 focus:outline-none">
                        <div className="relative p-6 flex-auto">
                            <h3 className="text-center mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Please,
                                type your email:</h3>

                            <Input
                                type="text"
                                id="email"
                                label="Email"
                                dataId="emailResetPassword"
                                error={errors.email}
                                register={register}
                                optionsValidations={{
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                    pattern: {
                                        value:
                                            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/,
                                        message: "Invalid email",
                                    },
                                }}
                            />

                        </div>
                        <div
                            className="flex items-center justify-end p-4 border-t border-solid border-blueGray-100 rounded-b">
                            <button
                                className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center "
                                type="submit"
                                id="submitSendEmailPopUp"
                            >
                                Submit
                            </button>
                            <div className="w-1/12"></div>
                            <button
                                className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center "
                                type="button"
                                id="closePopUp"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
                {showPopUpMessage && (
                    <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                        <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                      isColorError={isColorError}/>
                    </div>
                )}
            </div>
        </form>
    );
};

export default PopUpEmail;