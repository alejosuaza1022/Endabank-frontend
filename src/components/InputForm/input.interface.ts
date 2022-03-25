import UserObject from "@pages/RegisterForm/userObject.interface";
import { FieldError, UseFormRegister, ValidationRule } from "react-hook-form";
import LoginObject from "../../pages/LogIn/loginObject.interface";

interface InputProps {
  type: string;
  id: keyof UserObject | keyof LoginObject;
  label: string;
  error?: FieldError;
  register: UseFormRegister<any>;
  optionsValidations?: object;
}
export default InputProps;
