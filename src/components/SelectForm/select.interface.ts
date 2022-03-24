import FieldObject from "@pages/RegisterForm/userObject.interface";
import { FieldError, UseFormRegister } from "react-hook-form";
interface SelectFormProps {
  id: keyof FieldObject;
  value: string;
  options: Array<string>;
  error?: FieldError;
  register: UseFormRegister<FieldObject>;
}
export default SelectFormProps;
