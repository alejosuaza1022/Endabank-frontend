import SelectFormProps from "./approveUser.interface";

const SelectForm: React.FC<SelectFormProps> = ({
  user,
  email,
  approved = true,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {user}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4 text-right">
        <label
          htmlFor="cbox"
          className="relative items-right cursor-pointer"
        >
          <input type="checkbox" id="cbox" />
        </label>
      </td>
    </tr>
  );
};

export default SelectForm;
