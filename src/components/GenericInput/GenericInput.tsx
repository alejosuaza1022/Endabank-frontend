import React from "react";
import GenericInputProps from "./genericInput.interface";

const GenericInput: React.FC<GenericInputProps> = ({
                                                       type,
                                                       inputType,
                                                       rows,
                                                       id,
                                                       className,
                                                       placeholder,
                                                       pattern,
                                                       maxLength,
                                                       register,

                                                   }) => {
    return (
        type === "textarea" ? (
            <textarea id={id}
                      rows={rows}
                      className={className}
                      placeholder={placeholder}
                      maxLength={maxLength}
                      {...register(id, {
                required: {
                    value: false,
                    message: "",
                },
            })}/>
        ):(
            <input type={inputType}
                   id={id}
                   className={className}
                   placeholder={placeholder}
                   pattern={pattern}
                   {...register(id, {
                       required: {
                           value: true,
                           message: "This field is required",
                       },
                   })}/>
        )

    );
}
export default GenericInput;