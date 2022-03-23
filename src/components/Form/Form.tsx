import "./index.css";
import { Input, SelectForm } from "../index";
import FieldObject from "./fields.interface";
import { useForm, SubmitHandler } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FieldObject>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FieldObject> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex w-full justify-center mt-10">
      <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid-cc">
            <SelectForm
              id="documentType"
              value="Document type"
              options={["CC", "CE"]}
              register={register}
              error={errors.documentType}
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
          <Input
            type="text"
            id="email"
            label="Email"
            register={register}
            error={errors.email}
            optionsValidations={{
              pattern: {
                value:
                  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: "Email no valido",
              },
            }}
          ></Input>
          <Input
            type="tel"
            id="phoneNumber"
            label="Phone Number"
            register={register}
            error={errors.phoneNumber}
            optionsValidations={{
              pattern: {
                value: /^[0-9]{10}/,
                message:
                  "El campo acepta solo números y deben ser de 10 caracteres",
              },
            }}
          ></Input>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <Input
              type="text"
              id="firstName"
              label="First name"
              register={register}
              error={errors.firstName}
            ></Input>
            <Input
              type="text"
              id="lastName"
              label="Last name"
              register={register}
              error={errors.lastName}
            ></Input>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <Input
              type="password"
              id="password"
              label="Password"
              register={register}
              error={errors.password}
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
              register={register}
              error={errors.rePassword}
              optionsValidations={{
                validate: () =>
                  getValues("password") === getValues("rePassword"),
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
      </div>
    </div>
  );
};

export default Form;
