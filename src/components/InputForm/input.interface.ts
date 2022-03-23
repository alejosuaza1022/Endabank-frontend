import FieldObject from "@components/Form/fields.interface";
import { FieldError, UseFormRegister, ValidationRule} from "react-hook-form";


interface InputProps{
    type:string,
    id: keyof FieldObject,
    label:string,
    error?:FieldError,
    register:UseFormRegister<FieldObject>,
    optionsValidations?:object


}
export default InputProps;