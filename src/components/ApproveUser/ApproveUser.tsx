import SelectFormProps from "./approveUser.interface";
import React, { useState } from "react";

const SelectForm: React.FC<SelectFormProps> = ({
  user,
  email,
  approved = true,
  id,
}) => {
  const [actualState, changeCheckState] = useState(false);
  const handleCheckbox = (e) => {
    changeCheckState(e.target.checked);
    alert(user +" toggle "+e.target.checked)
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {user}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4 ">
        <label htmlFor={id} className="flex relative mb-4 cursor-pointer ">
          <input
            checked={actualState}
            onChange={handleCheckbox}
            type="checkbox"
            id={id}
            className="sr-only"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
        </label>
      </td>
    </tr>
  );
};

export default SelectForm;
