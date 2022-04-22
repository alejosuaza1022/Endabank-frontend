import ApproveUserProps from "./approveUserTable.interface";
import React, { useEffect, useState } from "react";
import { getAxios, putAxios } from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";

const SelectForm: React.FC<ApproveUserProps> = ({
  firstName,
  lastName,
  email,
  approved = false,
  id,
  token,
}) => {
  const [actualState, changeCheckState] = useState(approved);
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCheckState(e.target.checked);
    console.log(token);
    async function putData() {
      const response: Array<ApproveUserProps> = await putAxios(
        apiUrls.PUT_USERS_TO_APPROVE_URL + "/" + id,
        {value:e.target.checked},
        token
      );
    }
    putData();
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {firstName}
      </th>
      <td className="px-6 py-4">{lastName}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4 ">
        <label htmlFor={"approveToggle"+id} className="flex relative mb-4 cursor-pointer ">
          <input
            checked={actualState}
            onChange={handleCheckbox}
            type="checkbox"
            id={"approveToggle"+id}
            className="sr-only"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
        </label>
      </td>
    </tr>
  );
};

export default SelectForm;
