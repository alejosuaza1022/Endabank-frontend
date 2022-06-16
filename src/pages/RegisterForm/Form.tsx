import "./index.css";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import {AxiosError} from "axios";
import Cookies from "js-cookie";
import {Input, PopUpMessage, SelectForm, Spinner} from "../../components/index";
import UserObject from "./userObject.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {postAxios} from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";
import Strings from "../../constants/strings";

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = Cookies.get('token') ?? "";

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: {errors},
    } = useForm<UserObject>({mode: "onTouched"});
    const [isColorError, setIsColorError] = useState<boolean>(false);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [linkPopUp, setLinkPopUp] = useState("");
    const [messagePopUp, setMessagePopUp] = useState<string>(Strings.USER_REGISTERED);
    const [linkPopUpMessage, setLinkPopUpMessage] = useState<string>("");
    const onSubmit: SubmitHandler<UserObject> = async (data) => {
        setShowPopUpMessage(false);
        try {
            setIsLoading(true);
            const response = await postAxios(
                apiUrls.POST_CREATE_USERS,
                data,
                undefined
            );
            setIsColorError(false)
            setMessagePopUp(response.message);
            setLinkPopUp("/verify-email?email=" + data.email);
            setLinkPopUpMessage(Strings.LETS_VERIFY_EMAIL)
            reset();
        } catch (err) {
            const error = err as AxiosError;
            let message = Strings.ERROR_MESSAGE;
            if (error.response?.data?.statusCode != 500) {
                message = error.response?.data?.message || Strings.ERROR_MESSAGE;
            }
            setIsColorError(true);
            setMessagePopUp(message);
            setLinkPopUp("#");
            setLinkPopUpMessage("");
        }
        setIsLoading(false);
        setShowPopUpMessage(true);
    };
    const renderFormOrLoading = () => {
        return isLoading ? <Spinner/> : (<div className="flex w-full justify-center mt-20 ">
                <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
                    <form onSubmit={handleSubmit(onSubmit)} id="signUp">
                        <div className="grid-cc">
                            <SelectForm
                                id="typeIdentifierId"
                                dataId="typeIdentifierIdSignUp"
                                value="Document type"
                                options={{"1": "CC", "2": "CE"}}
                                error={errors.typeIdentifierId}
                                register={register}
                            />
                            <Input
                                type="text"
                                id="identifier"
                                dataId="identifierSignUp"
                                label="Identifier"
                                register={register}
                                error={errors.identifier}
                                optionsValidations={{
                                    pattern: {
                                        value: /^\d{6,20}/,
                                        message:
                                            "This field must be just numbers with a length between 6 and 20",
                                    },
                                }}
                            />
                        </div>
                        {" "}
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <Input
                                type="text"
                                id="firstName"
                                dataId="firstNameSignUp"
                                label="First name"
                                error={errors.firstName}
                                register={register}
                                optionsValidations={{
                                    pattern: {
                                        value: /^[a-zA-Z]{2,20}/,
                                        message:
                                            "This field must be just letters with a length between 2 and 20",
                                    },
                                }}
                            />
                            <Input
                                type="text"
                                id="lastName"
                                dataId="lastNameSignUp"
                                label="Last name"
                                error={errors.lastName}
                                register={register}
                                optionsValidations={{
                                    pattern: {
                                        value: /^[a-zA-Z]{2,20}/,
                                        message:
                                            "This field must be just letters with a length between 2 and 20",
                                    },
                                }}
                            />
                        </div>
                        {" "}
                        <Input
                            type="tel"
                            id="phoneNumber"
                            dataId="phoneNumberSignUp"
                            label="Phone Number"
                            error={errors.phoneNumber}
                            register={register}
                            optionsValidations={{
                                pattern: {
                                    value: /^\d{10,20}/,
                                    message:
                                        "This field must be just numbers with a length between 10 and 20",
                                },
                            }}
                        />
                        <Input
                            type="text"
                            id="email"
                            dataId="emailSignUp"
                            label="Email"
                            error={errors.email}
                            register={register}
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
                            dataId="passwordSignUp"
                            label="Password"
                            error={errors.password}
                            register={register}
                            optionsValidations={{
                                pattern: {
                                    value:
                                        /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
                                    message:
                                        "1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters",
                                },
                            }}
                        />
                        <Input
                            type="password"
                            id="rePassword"
                            dataId="passwordSignUp"
                            label="Confirm password"
                            error={errors.rePassword}
                            register={register}
                            optionsValidations={{
                                validate: () =>
                                    getValues("password") === getValues("rePassword"),
                            }}
                        />
                        <button
                            type="submit"
                            id="submitSignUp"
                            className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <>
            {token?.length == 0 ?
                renderFormOrLoading()
                : (
                    <Navigate replace to="/"/>
                )}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                  isColorError={isColorError} link={linkPopUp} linkMessage={linkPopUpMessage}/>
                </div>
            )}
        </>
    );
};

export default Form;
