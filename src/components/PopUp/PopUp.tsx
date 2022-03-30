import PopUpPropos from "./popup.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/index";

interface FieldObject {
  email: string;
}

const PopUp: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldObject>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FieldObject> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex w-1/2 justify-center m-auto">
      <div id="authentication-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex justify-end p-2">
                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                      </button>
                  </div>
                  <div className="p-6 pt-0 text-center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Please, type your email</h3>
                      <Input
                        type="text"
                        id="email"
                        label="Email"
                        error={errors.email}
                        register={register}
                        optionsValidations={{
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/,
                            message: "Invalid email",
                          },
                        }}
                      ></Input>
                      <button
                        type="submit"
                        className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center ">
                        Submit
                      </button>
                    </form>
                  </div>
              </div>
          </div>
      </div>        



    </div>

              

  );
};

export default PopUp;
