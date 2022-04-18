import { Input, PopUp} from "../../components/index";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginObject from "./loginObject.interface";
import { Link } from "react-router-dom";
import { useState } from "react";

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<LoginObject>({ mode: "onTouched" });

  const [showModal, setShowModal] = useState(false);

  const onSubmit: SubmitHandler<LoginObject> = (data) => {
    console.log(data);
    reset();
  };

  const openModal = () =>{
    setShowModal(true);
  };

  const setShowModalFuntion = (value: boolean) =>{
    setShowModal(value);
  };

  return (
    <div className="w-full">
      {showModal && (<PopUp setShowModal={setShowModalFuntion}/>)}
      {errors &&
          <div id="alert-border-2" className="flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200"
               role="alert">
            <svg className="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
    clipRule="evenodd"/>
            </svg>
            <div className="ml-3 text-sm font-medium text-red-700">
              {errors}
            </div>
          </div>}
      <form  onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="email"
          label="Email"
          register={register}
          error={errors.email}
          optionsValidations={{
            pattern: {
              value:
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/,
              message: "Email no valido",
            },
          }}
        />
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
        />
        <button
          type="submit"
          className="text-white color-endabank focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
        <div className="m-5 text-right text-sm">
          <a className="decoration-0" onClick={openModal}>
            Forgot password?
          </a>
        </div>
      </form>
      <div className="text-center text-sm m-0 border-t-2 border-gray-300 pt-5">
        New merchant? <Link to="/signup">create an account</Link>
      </div>
    </div>
  );
};

export default LogInForm;
