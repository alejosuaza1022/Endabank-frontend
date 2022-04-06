import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../index";
import apiUrls from "../../constants/apiUrls";
import { getAxios } from "../../utils/axios";

interface FieldObject {
  email: string;
}

const PopUp = (props:{setShowModal:Function}) => {

  async function sendEmail (data: FieldObject) {
    console.log(apiUrls.GET_USERS_RESET_PASSWORD_URL+ "/" + data.email);
    const response: Array<FieldObject> = await getAxios(
      apiUrls.GET_USERS_RESET_PASSWORD_URL+ "/" + data.email,
      "" 
    );
    console.log(response);
  }

  const {setShowModal} = props;

  setShowModal(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldObject>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FieldObject> = (data) => {
    console.log(data);
    sendEmail(data)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3x2">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
              <h3 className="text-center mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Please, type your email:</h3>
                
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
               
              </div>
              <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-100 rounded-b">
              <button
                  className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center "
                  type="submit"
                >
                  Submit
                </button>
                <div className="w-1/12"></div>
                <button
                  className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center "
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
     </form>
    
  );
};

export default PopUp