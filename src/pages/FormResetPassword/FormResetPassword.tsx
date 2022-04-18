import "./index.css";
import { Input} from "../../components/index";
import FieldObject from "./resetPasswordObject.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { putAxios } from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";

const FormResetPassword = () => {

  const [isActive] = useState(false);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYWJpLjk1MTJAZ21haWwuY29tIiwiZXhwIjoxNjQ5MjU1ODg0LCJpYXQiOjE2NDkyNTQ2ODQsInVzZXJJZCI6Nn0.WTAfvFVoOAg950yKDnB-7k5YcHccKHyPLAGyNLOnZpRoQ4a-uThQPzZormiLv57DEtU8ABxDP1rpmebQFxCLyA";
  
    
  async function changePassword (data: FieldObject) {
    const response: Array<FieldObject> = await putAxios(
      apiUrls.GET_USERS_CHANGE_PASSWORD_URL,
      data,
      token
    );
    console.log(response);
  }

  async function resetPassword (data: FieldObject) {

    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const tokenUrl: string = urlParams.get("token") ?? "";

    data.token = tokenUrl;

    const response: Array<FieldObject> = await putAxios(
      apiUrls.GET_USERS_RESET_PASSWORD_URL,
      data,
      ""
    );
    console.log(response);
  }

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FieldObject>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FieldObject> = (data) => {
    console.log(data);
    {isActive ? changePassword(data):resetPassword(data)};
    reset();
  };
  

  return (
    <div className="flex w-full justify-center mt-20 ">
        <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">

          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid xl:grid-cols-1 xl:gap-6">
                <p className="font-sans hover:font-arial text-[28px] text-center">Reset Password</p>
                {isActive ? 
                (<Input
                  type="password"
                  id="oldPassword"
                  label="Old Password"
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
                className="text-white color-endabank  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
  );
};

export default FormResetPassword;
