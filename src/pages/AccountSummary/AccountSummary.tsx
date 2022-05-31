import apiUrls from "../../constants/apiUrls";
import { useContext, useEffect, useState } from "react";
import { getAxios } from "../../utils/axios";
import {
    AccountSummaryData,
    PopUpMessage,
    Spinner,
} from "../../components/index";
import strings from "../../constants/strings";
import { AxiosError } from "axios";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../../contexts/AuthProvider";
import AccountDetailsProps from "@components/AccountSummaryData/AccountSummaryDetails.interface";
import PaginationDataProps from "@components/AccountSummaryData/AccountSummaryPaginationData.interface";

const AccountSummary= () => {
    const [details, setDetails] = useState<AccountDetailsProps>();
    const [transactions, setTransactions] = useState<PaginationDataProps>();
    const [isLoading, setIsLoading] = useState(false);
    const [colorPopUpMessage, setColorPopUpMessage] = useState(false);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>(
        strings.USER_REGISTERED
    );
    const token = Cookies.get("token");
    const {
        auth : { email},
    } = useContext(AuthContext);

    function catchError(err: any) {
        const error = err as AxiosError;
        let message = strings.ERROR_MESSAGE;
        if (error.response?.data?.statusCode != 500) {
            message = error.response?.data?.message || strings.ERROR_MESSAGE;
        }
        setShowPopUpMessage(true);
        setColorPopUpMessage(true);
        setMessagePopUp(message);
        setShowPopUpMessage(true);
        setIsLoading(false);
    }

    useEffect(() => {
        async function getDetails() {
            try {
                setIsLoading(true);
                const responseDetails: AccountDetailsProps = await getAxios(
                    apiUrls.GET_ACCOUNT_DETAILS+email,
                    token
                );
                setDetails(responseDetails);
            } catch (err) {
                catchError(err);
            }
        }
        async function getTransactions() {
            try {
                const responseSummary: PaginationDataProps= await getAxios(
                    apiUrls.GET_ACCOUNT_SUMMARY+email+"/0",
                    token
                );
                setIsLoading(false);
                setTransactions(responseSummary);
            }
            catch (err) {
                catchError(err);
            }
        }
        getDetails();
        getTransactions();
    }, []);
    const renderPageOrLoading = () => {
        return isLoading ? (
            <Spinner />
        ) : (
            <div className="w-full p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <header className="p-4 bg-white font-bold justify-center md:flex md:items-center md:p-6 dark:bg-gray-800">
                    <span className="text-3xl">Account summary</span>
                </header>
                <div>
                        <div className="flex-1 min-w-0">
                            <p className="text-lg font-bold text-gray-900 truncate dark:text-white">
                                Account Number: {details?.accountNumber}
                            </p>
                            <p className="text-base text-gray-500 truncate dark:text-gray-400">
                                Founds available: ${details?.balance}
                            </p>
                        </div>
                    <div
                        className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Transactions
                            </h5>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {transactions?.content.map((value, key) =>
                                        (
                                            <AccountSummaryData createAt={value.createAt}
                                                                description={value.description}
                                                                amount={value.amount}
                                                                wasReceived={value.wasReceived}
                                                                id={value.id}
                                                                stateTypeId={value.stateTypeId}
                                                                key={value.id}/>
                                        ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            {token?.length != 0 ? renderPageOrLoading() : <Navigate replace to="/" />}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage
                        message={messagePopUp}
                        setShowPopUpMessage={setShowPopUpMessage}
                        isColorError={colorPopUpMessage}
                    />
                </div>
            )}
        </>
    );
};

export default AccountSummary;
