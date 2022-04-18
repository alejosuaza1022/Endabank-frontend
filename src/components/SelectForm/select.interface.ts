import FieldObject from "@pages/RegisterForm/userObject.interface";
import { FieldError, UseFormRegister } from "react-hook-form";
interface SelectFormProps {
  id: keyof FieldObject;
  value: string;
  options: Object;
  error?: FieldError;
  register: UseFormRegister<any>;
  optionsValidations?: object;
}
export default SelectFormProps;
