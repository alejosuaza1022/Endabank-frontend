import "./index.css";
import { Input, MainImage, SelectForm } from "../../components/index";
import FieldObject from "./userObject.interface";
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
    <>
      <MainImage></MainImage>
      <div className="flex w-full justify-center mt-10">
        <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid-cc">
              <SelectForm
                id="documentType"
                value="Document type"
                options={["CC", "CE"]}
                error={errors.documentType}
                {...register("documentType", {
                  required: {
                    value: true,
                    message: "Este campo no puede estar vacio",
                  },
                })}
              ></SelectForm>
              <Input
                type="text"
                id="id"
                label="Identifier"
                {...register("id", {
                  required: {
                    value: true,
                    message: "Este campo no puede estar vacio",
                  },
                  pattern: {
                    value: /^[0-9]{10,20}/,
                    message:
                      "El campo acepta solo números y deben ser de 10 a 20 caracteres",
                  },
                })}
                error={errors.id}
              ></Input>
            </div>{" "}
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <Input
                type="text"
                id="firstName"
                label="First name"
                error={errors.firstName}
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Este campo no puede estar vacio",
                  },
                })}
              ></Input>
              <Input
                type="text"
                id="lastName"
                label="Last name"
                error={errors.lastName}
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Este campo no puede estar vacio",
                  },
                })}
              ></Input>
            </div>{" "}
            <Input
              type="tel"
              id="phoneNumber"
              label="Phone Number"
              error={errors.phoneNumber}
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Este campo no puede estar vacio",
                },
                pattern: {
                  value: /^[0-9]{10}/,
                  message:
                    "El campo acepta solo números y deben ser de 10 caracteres",
                },
              })}
            ></Input>
            <Input
              type="text"
              id="email"
              label="Email"
              error={errors.email}
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Este campo no puede estar vacio",
                },
                pattern: {
                  value:
                    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/,
                  message: "Email no valido",
                },
              })}
            ></Input>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <Input
                type="password"
                id="password"
                label="Password"
                error={errors.password}
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Este campo no puede estar vacio",
                  },
                  pattern: {
                    value: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/,
                    message:
                      "1 Mayuscula, 1 Caracter Especial, 1 Número, 8 a 20 digitos",
                  },
                })}
              ></Input>
              <Input
                type="password"
                id="rePassword"
                label="Confirm password"
                error={errors.rePassword}
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Este campo no puede estar vacio",
                  },
                  validate: () =>
                    getValues("password") === getValues("rePassword"),
                })}
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
    </>
  );
};

export default Form;
