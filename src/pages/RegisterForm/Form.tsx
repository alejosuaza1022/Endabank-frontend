import "./index.css";
import { Input, MainImage, SelectForm } from "../../components/index";
import UserObject from "./userObject.interface";
import { useForm, SubmitHandler } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<UserObject>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<UserObject> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid-cc">
          <SelectForm
            id="documentType"
            value="Document type"
            options={["CC", "CE"]}
            error={errors.documentType}
            register={register}
          ></SelectForm>
          <Input
            type="text"
            id="id"
            label="Identifier"
            register={register}
            error={errors.id}
            optionsValidations={{
              pattern: {
                value: /^[0-9]{10,20}/,
                message:
                  "El campo acepta solo números y deben ser de 10 a 20 caracteres",
              },
            }}
          ></Input>
        </div>{" "}
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <Input
            type="text"
            id="firstName"
            label="First name"
            error={errors.firstName}
            register={register}
          ></Input>
          <Input
            type="text"
            id="lastName"
            label="Last name"
            error={errors.lastName}
            register={register}
          ></Input>
        </div>{" "}
        <Input
          type="tel"
          id="phoneNumber"
          label="Phone Number"
          error={errors.phoneNumber}
          register={register}
          optionsValidations={{
            pattern: {
              value: /^[0-9]{10,20}/,
              message:
                "El campo acepta solo números y deben ser de 10 a 20 caracteres",
            },
          }}
        ></Input>
        <Input
          type="text"
          id="email"
          label="Email"
          error={errors.email}
          register={register}
          optionsValidations={{
            pattern: {
              value:
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/,
              message: "Email no valido",
            },
          }}
        ></Input>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <Input
            type="password"
            id="password"
            label="Password"
            error={errors.password}
            register={register}
            optionsValidations={{
              pattern: {
                value: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
                message:
                  "1 Mayuscula, 1 Caracter Especial, 1 Número, 8 a 20 digitos",
              },
            }}
          ></Input>
          <Input
            type="password"
            id="rePassword"
            label="Confirm password"
            error={errors.rePassword}
            register={register}
            optionsValidations={{
              validate: () => getValues("password") === getValues("rePassword"),
            }}
          ></Input>
        </div>
        <button
          type="submit"
          className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
