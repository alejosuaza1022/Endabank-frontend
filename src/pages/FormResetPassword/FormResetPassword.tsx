import "./index.css";
import { Input, MainImage, SelectForm } from "../../components/index";
import FieldObject from "./resetPasswordObject.interface";
import { useForm, SubmitHandler } from "react-hook-form";

const FormResetPassword = () => {

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FieldObject>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FieldObject> = (data) => {
    console.log(data);
    reset();
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid xl:grid-cols-1 xl:gap-6">
            <p className="font-sans hover:font-arial text-[28px] text-center">Reset Password</p>

            <Input
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
            ></Input>
            <Input
              type="password"
              id="newPassword"
              label="New Password"
              register={register}
              error={errors.newPassword}
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
                    getValues("oldPassword") != getValues("newPassword"),
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
                getValues("newPassword") === getValues("rePassword"),                     
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
  );
};

export default FormResetPassword;
