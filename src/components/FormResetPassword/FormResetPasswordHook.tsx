import "./index.css";
import { useState } from "react";
import FieldObject from "./fields.interface";
import { useForm, SubmitHandler } from "react-hook-form";


const FormResetPassword = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FieldObject>();
  const onSubmit: SubmitHandler<FieldObject> = data => console.log(data);

  return (
    <div className="flex w-1/2 justify-center m-auto">
      <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid xl:grid-cols-1 xl:gap-6">
            <p className="font-sans hover:font-arial text-[28px] text-center">Reset Password</p>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type= "password"
                id="oldPassword"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-300 peer"
                placeholder=" "
                {...register("oldPassword", { required: true})}
              />
              {errors.oldPassword && <span className="absolute text-xs d-block mb-2 text-red-500">This field is required</span>}
              <label
                htmlFor="oldPassword"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-300  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Old Password
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group my-10">
              <input
                  type="password"
                  id="newPassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-300 peer"
                  placeholder=" "
                  {...register("newPassword", { required: {value: true, message: 'This field is required'},
                  pattern: {value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/, 
                  message: 'Minimum 8 characters. Maximum 15. At least one capital letter. At least one lowercase letter. At least one digit. No blank spaces. At least 1 special character '}})}
                />
                <span className="absolute text-xs d-block mb-2 text-red-500">
                    {errors.newPassword && errors.newPassword.message}
                </span>

                <label
                  htmlFor="newPassword"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-300  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  New Password
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group my-10" >
                <input
                  type="password"
                  id="rePassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-300 peer"
                  placeholder=" "
                  {...register("rePassword", { required: {value: true, message: 'This field is required'},
                  pattern: {value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/, 
                  message: 'Minimum 8 characters. Maximum 15. At least one capital letter. At least one lowercase letter. At least one digit. No blank spaces. At least 1 special character '}})}
                />
                <span className="absolute text-xs d-block mb-2 text-red-500">
                    {errors.rePassword && errors.rePassword.message}
                </span>
                <label
                  htmlFor="rePassword"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-300  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>
          </div>
          <button
            type="submit"
            className="text-white color-endabank  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-10"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormResetPassword;
