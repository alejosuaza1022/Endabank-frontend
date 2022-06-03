import UserObject from "@pages/RegisterForm/userObject.interface";
import { FieldError, UseFormRegister, ValidationRule } from "react-hook-form";
import LoginObject from "../../pages/LogIn/loginObject.interface";
import resetPasswordObject from "../../pages/FormResetPassword/resetPasswordObject.interface";
import TransactionObjectProps from "../../pages/Transaction/transaction.interface";

interface InputProps {
  type: string;
  id: keyof UserObject | keyof LoginObject | keyof resetPasswordObject | keyof TransactionObjectProps;
  label: string;
  error?: FieldError;
  register: UseFormRegister<any>;
  optionsValidations?: object;
  dataId: string;
}
export default InputProps;
