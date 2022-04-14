import "./index.css";
import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {AxiosError} from "axios";
import {Input, SelectForm,PopUpMessage,Spinner} from "../../components/index";
import UserObject from "./userObject.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {postAxios} from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";
import AuthContext from "../../contexts/AuthProvider";
import strings  from "../../constants/strings";

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        auth: {token},
    } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: {errors},
    } = useForm<UserObject>({mode: "onTouched"});
    const [colorPopUpMessage, setColorPopUpMessage] = useState<string>(strings.COLOR_SUCCESS);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>(strings.USER_REGISTERED);
    const onSubmit: SubmitHandler<UserObject> = async (data) => {
        setShowPopUpMessage(false);
        try {
            setIsLoading(true);
            await postAxios(
                apiUrls.POST_CREATE_USERS,
                data,
                undefined
            );
            setIsLoading(false);
            setColorPopUpMessage(strings.COLOR_SUCCESS);
            setMessagePopUp(strings.USER_REGISTERED);
            setShowPopUpMessage(true);
            reset();
        } catch (err) {
            const error = err as AxiosError;
            setShowPopUpMessage(true);
            setColorPopUpMessage(strings.COLOR_ERROR);
            const message = error.response?.data?.message || strings.ERROR_MESSAGE;
            setMessagePopUp(message);
            setIsLoading(false);
        }
    };
    const renderFormOrLoading = () => {
        return isLoading ? <Spinner/> : (<div className="flex w-full justify-center mt-20 ">
                <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid-cc">
                            <SelectForm
                                id="typeIdentifierId"
                                value="Document type"
                                options={{"1": "CC", "2": "CE"}}
                                error={errors.typeIdentifierId}
                                register={register}
                            />
                            <Input
                                type="text"
                                id="identifier"
                                label="Identifier"
                                register={register}
                                error={errors.identifier}
                                optionsValidations={{
                                    pattern: {
                                        value: /^\d{10,20}/,
                                        message:
                                            "This field must be just numbers with a length between 10 and 20",
                                    },
                                }}
                            />
                        </div>
                        {" "}
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <Input
                                type="text"
                                id="firstName"
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
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <Input
                                type="password"
                                id="password"
                                label="Password"
                                error={errors.password}
                                register={register}
                                optionsValidations={{
                                    pattern: {
                                        value:
                                            /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
                                        message:
                                            "1 Captial, 1 lowercase, 1 number, 1 special character, 8-20 characters",
                                    },
                                }}
                            />
                            <Input
                                type="password"
                                id="rePassword"
                                label="Confirm password"
                                error={errors.rePassword}
                                register={register}
                                optionsValidations={{
                                    validate: () =>
                                        getValues("password") === getValues("rePassword"),
                                }}
                            />
                        </div>
                        <button
                            type="submit"
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
            {token.length === 0 ?
                renderFormOrLoading()
                : (
                    <Navigate replace to="/"/>
                )}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage message={messagePopUp}  setShowPopUpMessage={setShowPopUpMessage} color={colorPopUpMessage}/>
                </div>
            )}
        </>
    );
};

export default Form;
