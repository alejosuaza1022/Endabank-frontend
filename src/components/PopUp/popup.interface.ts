import FieldObject from "@pages/RegisterForm/userObject.interface";
import { FieldError, UseFormRegister, ValidationRule } from "react-hook-form";

interface PopUpProps {
  type: string;
  id: string;
  label: string;
  error?: FieldError;
}
export default PopUpProps;
