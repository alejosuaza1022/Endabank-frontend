import MerchantRequestProps from "./RequestsTable/merchantRequestProps.interface";
import React, {useState} from "react";
import {putAxios} from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";
import {Navigate} from "react-router-dom";
import Strings from "../../constants/strings";
import {AxiosError} from "axios";
import {PopUpMessage} from "../../components/index";

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
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>("");
    const [isColorError, setIsColorError] = useState<boolean>(false);

    console.log("approve state" +approveState)
    console.log("reject state" +rejectState)

    const approveMerchantRequest = async (stateValue:boolean) => {
        setShowPopUpMessage(false);

        try {
            const res = await putAxios(
                apiUrls.UPDATE_MERCHANT_REQUEST + "/" + id,
                {value: stateValue},
                token
            );

            setIsColorError(false)
            setMessagePopUp(res.message);
        } catch (err) {
            const error = err as AxiosError;

            setIsColorError(true);
            setMessagePopUp(error?.response?.data?.message || Strings.ERROR_MESSAGE);
            setShowPopUpMessage(true);
        }
        setShowPopUpMessage(true);
    }

    const handleApproveMerchantButton = () => {
        approveMerchantRequest(true)
        setApproveState(!approveState);
        setRejectState(false);
    }

    const handleRejectMerchantButton = () => {
        approveMerchantRequest(false)
        setRejectState(!rejectState)
        setApproveState(false)
    }

    const renderPage = () => {
        return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 bg font-medium whitespace-nowrap text">
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
                        className={`text-white mx-1 font-medium rounded-lg text-sm px-4 py-2 text-center ${(rejectState) ? "bg-gray-300" : "bg-gray-800"} `}
                    >
                        Reject
                    </button>
                    <button
                        id={"approveMerchantButton" + id}
                        type="button"
                        onClick={handleApproveMerchantButton}
                        disabled={approveState}
                        className={`text-white mx-1 font-medium rounded-lg text-sm px-4 py-2 text-center ${(approveState) ? "bg-gray-300" : "color-endabank"}`}
                    >
                        Approve
                    </button>
                </td>
            </tr>
        );
    }

    return(
        <>
            {token?.length != 0 ? renderPage() : <Navigate replace to="/" />}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                  isColorError={isColorError} />
                </div>
            )}
        </>
    );
}

export default RequestsTable;