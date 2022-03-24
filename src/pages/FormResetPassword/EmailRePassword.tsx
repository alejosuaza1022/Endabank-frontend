import "./index.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./InputFormRePassword";
import FieldObject from "./rePasswordObject.interface";

const FormResetPassword = () => {

  type Inputs = {
    email: string,
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-1/2 justify-center m-auto">
      
      <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
        Forget Password
      </button>

      <div id="popup-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex justify-end p-2">
                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                      </button>
                  </div>
                  <div className="p-6 pt-0 text-center">
                      <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                      <input onSubmit={handleSubmit(onSubmit)}
                        type="text"
                        id="email"           
                        className = {`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                          errors
                            ? "border-red-500 focus:border-red-500"
                            : "focus:border-black border-gray-300 "
                        } appearance-none  focus:outline-none focus:ring-0  peer`}
                        placeholder=" "
                        {...register("email", {
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
                        
                      ></input>
                      <label
                        htmlFor= "email"
                        className={`absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
                          errors
                            ? "peer-focus:text-red-500 text-red-500"
                            : "peer-focus:text-black text-gray-500"
                        }  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                      >
                        Email
                      </label>
                      <button
                        type="submit"
                        className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center ">
                        Submit
                      </button>
                  </div>
              </div>
          </div>
      </div>        



    </div>

              

  );
};

export default FormResetPassword;
