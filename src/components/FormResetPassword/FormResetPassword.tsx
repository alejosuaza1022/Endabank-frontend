import "./index.css";
import { Input, SelectForm } from "../index";
import { useState } from "react";
import FieldObject from "./fields.interface";

const FormResetPassword = () => {

  const [campos, setCampos] = useState<FieldObject>({
    oldPassword: "",
    newPassword: "",
    rePassword: "",
  });

  return (
    <div className="flex w-1/2 justify-center m-auto">
      <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
        <form onSubmit={() => alert("hola")}>
          <div className="grid xl:grid-cols-1 xl:gap-6">
            <p className="font-sans hover:font-arial text-[28px] text-center">Reset Password</p>

            <Input
              type="password"
              id="oldPassword"
              label="Old Password"
              setCampos={(value: string) =>
                setCampos({ ...campos, oldPassword: value })
              }
            ></Input>
            <Input
              type="password"
              id="newPassword"
              label="New Password"
              setCampos={(value: string) =>
                setCampos({ ...campos, newPassword: value })
              }
            ></Input>
            <Input
              type="password"
              id="rePassword"
              label="Confirm password"
              setCampos={(value: string) =>
                setCampos({ ...campos, rePassword: value })
              }
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
