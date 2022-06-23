import MerchantLogProps from "./LogTable/merchantLogProps.interface";
import React from "react";

const LogTable: React.FC<MerchantLogProps> = ({
    storeName,
    reviewedByFirstName,
    merchantRequestStateName,
    updatedAt,
    id
}) => {
  return(
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
          {storeName}
        </th>
        <td className="px-6 py-4">{reviewedByFirstName}</td>
        <td className="px-6 py-4">{merchantRequestStateName}</td>
        <td className="px-6 py-4">{updatedAt}</td>
      </tr>
  );
}

export default LogTable;