import {Input, PopUpMessage, Spinner} from "../../components/index";
import FieldObject from "./resetPasswordObject.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {putAxios} from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";
import strings from "../../constants/strings";
import Strings from "../../constants/strings";
import {AxiosError} from "axios";
import AuthContext from "../../contexts/AuthProvider";
import Cookies from "js-cookie";


const FormResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isColorError, setIsColorError] = useState<boolean>(false);
  const [showPopUpMessage, setShowPopUpMessage] = useState(false);
  const [messagePopUp, setMessagePopUp] = useState<string>(strings.USER_REGISTERED);

  const token = Cookies.get('token');

  const {
    loadedData
  } = useContext(AuthContext);

  const {
      register,
      handleSubmit,
      reset,
      getValues,
      formState: {errors},
  } = useForm<FieldObject>({mode: "onTouched"});
    
  async function changePassword (data: FieldObject) {
      try {
          const response = await putAxios(
              apiUrls.GET_USERS_CHANGE_PASSWORD_URL,
              data,
              token
          );
          console.log(response.message);
          setIsColorError(false)
          setMessagePopUp(Strings.PASSWORD_UPDATED);
          setShowPopUpMessage(true);
      }catch (err) {
          const error = err as AxiosError;
          let message = strings.ERROR_MESSAGE;
          if (error.response?.data?.statusCode != 500) {
              message = error.response?.data?.message || strings.ERROR_MESSAGE;
          }
          setShowPopUpMessage(true);
          setIsColorError(true)
          setMessagePopUp(message);
      }

  }

  async function resetPassword(data: FieldObject) {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    data.token = urlParams.get("token") ?? "";
    try {
        const response = await putAxios(
            apiUrls.GET_USERS_RESET_PASSWORD_URL,
            data,
            ""
        );
        console.log(response.message);
        setIsColorError(false)
        setMessagePopUp(Strings.PASSWORD_UPDATED);
        setShowPopUpMessage(true);
    }catch (err) {
        const error = err as AxiosError;
        let message = strings.ERROR_MESSAGE;
        if (error.response?.data?.statusCode != 500) {
            message = error.response?.data?.message || strings.ERROR_MESSAGE;
        }
        setShowPopUpMessage(true);
        setIsColorError(true)
        setMessagePopUp(message);
    }

}

  const onSubmit: SubmitHandler<FieldObject> = (data) => {
    setShowPopUpMessage(false);
    setIsLoading(true);
    {token! ? changePassword(data):resetPassword(data)}
    setIsLoading(false);
    reset();
  };
  

  const renderFormOrLoading = () => {
    return isLoading ? <Spinner/> : (
    <div className="flex w-full justify-center mt-20 ">
        <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid xl:grid-cols-1 xl:gap-6">
                  {token ?
                      (<p className="font-sans hover:font-arial text-[28px] text-center">Update Password</p>)
                      :( <p className="font-sans hover:font-arial text-[28px] text-center">Reset Password</p>)
                  }
                {token ?
                (<Input
                  type="password"
                  id="oldPassword"
                  label="Old Password"
                  dataId="oldPasswordResetPassword"
                  register={register}
                  error={errors.oldPassword}
                  optionsValidations={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                ></Input>): null}
                <Input
                  type="password"
                  id="password"
                  label="New Password"
                  dataId="newPasswordResetPassword"
                  register={register}
                  error={errors.password}
                  optionsValidations={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
                      message:
                        "1 Uppercase, 1 Special Character, 1 Number, 8 to 20 Digits",
                    },
                    validate: () =>
                        getValues("oldPassword") != getValues("password"),
                  }}
                ></Input>
                <Input
                  type="password"
                  id="rePassword"
                  label="Confirm password"
                  dataId="confirmPasswordResetPassword"
                  error={errors.rePassword}
                  register={register}
                  optionsValidations={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
                      message:
                        "1 Uppercase, 1 Special Character, 1 Number, 8 to 20 Digits",
                    },
                    validate: () =>
                    getValues("password") === getValues("rePassword"),                     
                  }}              
                ></Input>
              </div>
              <button
                type="submit"
                id="submitResetPassword"
                className="text-white color-endabank  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
  );
};

return (
    <>
        {renderFormOrLoading()
            }
        {showPopUpMessage && (
            <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                              isColorError={isColorError}/>
            </div>
        )}
    </>
  );
};

export default FormResetPassword;

