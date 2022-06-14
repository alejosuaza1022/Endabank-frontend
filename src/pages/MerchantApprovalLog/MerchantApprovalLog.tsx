import { Spinner} from "../../components/index";
import {ChangeEvent, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import {postAxios} from "../../utils/axios";
import apiUrls from "../../constants/apiUrls";
import MerchantLogPaginationDataProps
    from "./LogTable/merchantLogPaginationData.interfaceProps";
import ReactPaginate from "react-paginate";
import LogTable from "./LogTable";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {format} from "date-fns";

const MerchantApprovalLog = () => {

    const defaultState = {
        noFilter:{
            merchantName: '',
            adminName: '',
            starDate: '',
            endDate: ''
        }
    };

    const token = Cookies.get("token");
    const [merchantLogs, setMerchantLogs] = useState<MerchantLogPaginationDataProps>();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [logsFilter, setLogsFilter] = useState(defaultState.noFilter);
    const [merchantName, setMerchantName] = useState('');
    const [adminName, setAdminName] = useState('');

    const getMerchantLogs = async (filter: {}, page: number) => {
        try {
            setIsLoading(true);

            const res: MerchantLogPaginationDataProps = await postAxios(
                apiUrls.GET_MERCHANT_APPROVAL_LOGS+"/"+page,
                filter,
                token
            );
            setIsLoading(false);
            setMerchantLogs(res)

        } catch (e) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getMerchantLogs(defaultState.noFilter,0)
    }, []);

    const handlePageClick = (data:any) => {
        getMerchantLogs(logsFilter,data.selected);
    }

    const handleMerchantNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setMerchantName(event.target.value)
    }

    const handleReviewingUserInput = (event: ChangeEvent<HTMLInputElement>) => {
      setAdminName(event.target.value)
    }

    const applyFilter = () => {

        setMerchantName('');
        setAdminName('')

        let sDate = '';
        let eDate = '';

        if(startDate != null ){
            sDate = format(startDate, "yyyy-MM-dd")
        }
        if(endDate != null){
            eDate = format(endDate, "yyyy-MM-dd")
        }

        const filter = {
            merchantName: merchantName,
            adminName: adminName,
            startDate: sDate,
            endDate: eDate
        }

        setLogsFilter({merchantName,adminName,starDate: sDate,endDate: eDate});
        console.log(filter);
        getMerchantLogs(filter,0)

    }

    const renderPageOrLoading = () => {
        return isLoading ? (
            <Spinner />
        ) : (
            <div className="w-full p-4  item-center rounded-lg">
                <header className="p-4 bg-white font-bold justify-center md:flex md:items-center md:p-6 dark:bg-gray-800">
                    <span className="text-3xl">Merchant approval log</span>
                </header>
                <div className="flex items-center">
                    <div className="relative">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Start date</label>
                        <DatePicker
                            id="searchStartDate"
                            selected={startDate}
                            onChange={(date:Date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}/>
                    </div>
                    <span className="mx-4 mt-8 text-gray-500">to</span>
                    <div className="relative pr-8">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            End date</label>
                        <DatePicker
                            id="searchEndDate"
                            selected={endDate}
                            onChange={(date:Date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            required
                        />
                    </div>
                    <div className="pr-8">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Merchant</label>
                        <input type="text" id="merchantSearchInput"
                               onChange={handleMerchantNameInput}
                               className=" text-gray-500 text-sm  focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5 "
                               placeholder="Shoes and shoes" required />
                    </div>

                    <div className="pr-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Reviewing user</label>
                        <input type="text" id="reviewingUserSearchInput"
                               onChange={handleReviewingUserInput}
                               className=" text-gray-500 text-sm  focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5 "
                               placeholder="Pepito" required />
                    </div>

                    <button
                        id="submitFilter"
                        onClick={applyFilter}
                        className="text-white mt-7 color-endabank focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center"
                    >
                        Search
                    </button>
                </div>
                <div className="flex justify-center mt-10">
                    <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Merchant
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time Stamp
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        { merchantLogs?.content.map((value,key)=>(
                            <LogTable storeName={value.storeName}
                                      reviewedByFirstName={value.reviewedByFirstName}
                                      merchantRequestStateName={value.merchantRequestStateName}
                                      updatedAt={value.updatedAt}
                                      id={value.id}
                                      key={key}/>
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
                        pageCount={merchantLogs != null ? merchantLogs.totalPages : 0}
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

            </div >
        );
    }

    return(
        <>
            {token?.length != 0 ? renderPageOrLoading() : <Navigate replace to="/" />}
        </>
    );
}

export default MerchantApprovalLog;