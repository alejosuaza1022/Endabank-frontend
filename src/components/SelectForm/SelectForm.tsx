import SelectFormProps from "./select.interface";

const SelectForm: React.FC<SelectFormProps> = ({
  id,
  value,
  options,
  error,
  register,
  optionsValidations,
}) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <select
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
        placeholder=" "
        {...register(id, {
          required: {
            value: true,
            message: "Este campo no puede estar vacio",
          },
          ...optionsValidations,
        })}
      >
        {" "}
        {Object.entries(options).map(([k, v]) => (
          <option key={v} value={k}>
            {v}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute text-sm text-gray-500  duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
          error
            ? "peer-focus:text-red-500 text-red-500"
            : "peer-focus:text-black text-gray-500"
        }  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`}
      >
        {value}
      </label>
    </div>
  );
};

export default SelectForm;
