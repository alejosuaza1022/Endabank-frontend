import {Spinner} from "../../components/index";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";
import RequestsTable from "./RequestsTable";
import ReactPaginate from "react-paginate";
import MerchantRequestPaginationDataProps
    from "./RequestsTable/merchantRequestPaginationDataProps.interface";
import {getAxios} from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";

const MerchantRequestsCollection = () => {

    const token = Cookies.get("token");
    const [isLoading, setIsLoading] = useState(false);
    const [merchantRequests, setMerchantRequests] = useState<MerchantRequestPaginationDataProps>();


    const getMerchantRequests = async (page: number) => {
        try{
            setIsLoading(true);

            const res: MerchantRequestPaginationDataProps = await getAxios(
                apiUrls.GET_MERCHANT_REQUESTS+"/"+page,
                token
            );
            setIsLoading(false);
            setMerchantRequests(res);

        } catch (e) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getMerchantRequests(0)
    }, []);

    const handlePageClick = (data:any) => {
        getMerchantRequests(data.selected);
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
                        { merchantRequests?.content.map((value,key)=>(

                            <RequestsTable id={value.id}
                                           merchantRequestStateName={value.merchantRequestStateName}
                                           createAt={value.createAt}
                                           storeName={value.storeName}
                                           approveOptionState={value.merchantRequestStateName === "APPROVED"}
                                           rejectOptionState={value.merchantRequestStateName === "REJECTED"}
                                           token = {token}
                                           key = {key}
                            />
                        ))

                        }

                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center">
                    {}
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        pageCount={merchantRequests != null ? merchantRequests.totalPages : 0}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={"inline-flex justify-content-center -space-x-px"}
                        pageClassName={"py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                        previousClassName={"py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                        nextClassName={"py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                        breakClassName={"py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                        activeClassName={"py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"}
                    />
                </div>

            </div>
        )
    }

    return(
        <>
            {token?.length != 0 ? renderPageOrLoading() : <Navigate replace to="/" />}

        </>
    );
}

export default MerchantRequestsCollection;