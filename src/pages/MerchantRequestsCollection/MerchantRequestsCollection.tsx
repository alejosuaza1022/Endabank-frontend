import {PopUpMessage, Spinner} from "../../components/index";
import {useState} from "react";
import Strings from "../../constants/strings";
import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";
import RequestsTable from "./RequestsTable";

const MerchantRequestsCollection = () => {

    const token = Cookies.get("token");
    const [isLoading, setIsLoading] = useState(false);

    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>(Strings.USER_REGISTERED);
    const [isColorError, setIsColorError] = useState<boolean>(false);

    const getMerchantRequests = (page: number) => {
        try{
            setIsLoading(true);



        } catch (e) {
            setIsLoading(false);
        }
    }

    const renderPageOrLoading = () => {
        return isLoading ? (
            <Spinner/>
        ) : (
            <div className="w-full p-4  item-center rounded-lg">
                <header className="p-4 bg-white font-bold justify-center md:flex md:items-center md:p-6 dark:bg-gray-800">
                    <span className="text-3xl">Merchant requests</span>
                </header>
                <div className="flex justify-center mt-10">
                    <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                User
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created at
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">

                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <RequestsTable id="1" merchantRequestStateName="approved"
                                           createAt="1/2/3" storeName="shoes"  />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return(
        <>
            {token?.length != 0 ? renderPageOrLoading() : <Navigate replace to="/" />}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                  isColorError={isColorError} />
                </div>
            )}
        </>
    );
}

export default MerchantRequestsCollection;