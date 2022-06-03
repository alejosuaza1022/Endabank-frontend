import {UseFormRegister} from "react-hook-form";
import TransactionObjectProps from "@pages/Transaction/transaction.interface";

interface GenericInputProps {
    type: string;
    inputType?: string;
    rows?: number;
    id: keyof TransactionObjectProps;
    className: string;
    placeholder?: string;
    pattern?: string;
    maxLength?: number;
    register: UseFormRegister<any>;
}
export default GenericInputProps;