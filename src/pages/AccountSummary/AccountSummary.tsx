import apiUrls from "../../constants/apiUrls";
import { useContext, useEffect, useState } from "react";
import { getAxios } from "../../utils/axios";
import {
    PopUpMessage,
    Spinner,
} from "../../components/index";
import strings from "../../constants/strings";
import { AxiosError } from "axios";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../../contexts/AuthProvider";
import TransactionSummaryProps from "@components/AccountSummaryData/AccountSummaryTransactionsSummary.interface";
import AccountDetailsProps from "@components/AccountSummaryData/AccountSummaryDetails.interface";

const AccountSummary= () => {
    const [details, setDetails] = useState<AccountDetailsProps>();
    const [list, setList] = useState<Array<TransactionSummaryProps>>([]);
    const [approved, setApproved] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [colorPopUpMessage, setColorPopUpMessage] = useState(false);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>(
        strings.USER_REGISTERED
    );
    const token = Cookies.get("token");
    const {
        auth: { email },
    } = useContext(AuthContext);

    function catchError(err: any) {
        const error = err as AxiosError;
        let message = strings.ERROR_MESSAGE;
        if (error.response?.data?.statusCode != 500) {
            message = error.response?.data?.message || strings.ERROR_MESSAGE;
        }
        setShowPopUpMessage(true);
        setColorPopUpMessage(false);
        setMessagePopUp(message);
        setShowPopUpMessage(true);
        setIsLoading(false);
        setApproved(false);
    }

    useEffect(() => {
        async function getData() {
            setApproved(true);
            try {
                setIsLoading(true);
                const responseDetails: AccountDetailsProps = await getAxios(
                    apiUrls.GET_ACCOUNT_DETAILS+email,
                    token
                );
                setDetails(responseDetails);
                try {
                    const responseSummary: Array<TransactionSummaryProps> = await getAxios(
                        apiUrls.GET_ACCOUNT_SUMMARY+email,
                        token
                    );
                    setIsLoading(false);
                    setList(responseSummary);
                }
                catch (err) {
                    catchError(err);
                }
            } catch (err) {
                catchError(err);
            }
        }
        getData();
    }, []);
    const renderPageOrLoading = () => {
        return isLoading ? (
            <Spinner />
        ) : (
            <div className="w-full">
                {approved ? (
                    <div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@windster.com
                            </p>
                        </div>
                    <div
                        className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest
                                Customers</h5>
                            <a href="#"
                               className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Neil Sims
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $320
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Bonnie Green
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Michael Gough
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $67
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Lana Byrd
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $367
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Thomes Lean
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2367
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    ) : (
                    <div>
                        <Navigate replace to="/profile" />
                    </div>
                )}
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
