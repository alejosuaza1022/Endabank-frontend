import InputProps from "./input.interface";
import "./index.css";
const Input: React.FC<InputProps> = ({
  type,
  id,
  label,
  error,
  register,
  optionsValidations,
}) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <input
        type={type}
        id={id}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "focus:border-black border-gray-300 "
        } appearance-none  focus:outline-none focus:ring-0  peer`}
        placeholder=" "
        {...register(id, {
          required: {
            value: true,
            message: "Este campo no puede estar vacio",
          },
          ...optionsValidations,
        })}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
          error
            ? "peer-focus:text-red-500 text-red-500"
            : "peer-focus:text-black text-gray-500"
        }  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
      >
        {label}
      </label>
      {error && error.type === "validate" ? (
        <p className="text-sm text-red-600 ml-1 mt-2 text-bold">
          Las contraseñas no coinciden
        </p>
      ) : error ? (
        <p className="text-sm text-red-600 ml-1 mt-2 text-bold">
          {error.message}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
