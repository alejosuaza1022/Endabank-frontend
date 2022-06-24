import MerchantRequestProps from "./RequestsTable/merchantRequestProps.interface";
import React, {useState} from "react";

const RequestsTable: React.FC<MerchantRequestProps>= ({
    id,
    merchantRequestStateName,
    createAt,
    storeName,
    approveOptionState=false,
    rejectOptionState=false,
    token
}) => {

    const [approveState, setApproveState] = useState(approveOptionState);
    const [rejectState, setRejectState] = useState(rejectOptionState);

    console.log("approve state" +approveState)
    console.log("reject state" +rejectState)

    const handleApproveMerchantButton = () => {
        setApproveState(!approveState);
        setRejectState(false);
    }

    const handleRejectMerchantButton = () => {
        setRejectState(!rejectState)
        setApproveState(false)
    }

    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text">
                {storeName}
            </th>
            <td className="px-6 py-4">{createAt}</td>
            <td className="px-6 py-4">{merchantRequestStateName}</td>
            <td className="px-2 py-4 text-center">
                <button
                    id={"rejectMerchantButton" + id}
                    type="button"
                    onClick={handleRejectMerchantButton}
                    disabled={rejectState}
                    className="text-white mx-1 bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                    Reject
                </button>
                <button
                    id={"approveMerchantButton" + id}
                    type="button"
                    onClick={handleApproveMerchantButton}
                    disabled={approveState}
                    className="text-white mx-1 color-endabank font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                    Approve
                </button>
            </td>
        </tr>
    );
}

export default RequestsTable;