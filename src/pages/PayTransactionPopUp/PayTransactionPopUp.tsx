import PayTransactionPopUpInterface from "./payTransactionPopUp.interface";
import NumberFormat from "react-number-format";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";

const PayTransactionPopUp = (props: { setShowModal: Function, data:PayTransactionPopUpInterface }) => {
    const {data} = props;
    const stateType:string =data.stateType;
    const {setShowModal} = props;
    setShowModal(true);

    const removeCookie = () => {
        Cookies.remove('token')
    }

    useEffect(() => {
        console.log(data.merchant)
    }, []);
    return (
        <>
        { stateType == "AUTHORISED" ? (
            <div
                className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 sm:p-2 bg-gray-200 bg-opacity-80 rounded-lg">
                <div className="relative w-auto my-6 mx-auto max-w-3x2">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none border-2 border-orange-500 sm:p-8 focus:outline-none">
                        <div className="text-xl text-gray-900 dark:text-white text-center">
                            <div className="font-bold md:py-4">
                                {stateType} TRANSACTION
                                <div className="text-lg">
                                    <NumberFormat
                                        value={data.createAt}
                                        displayType={'text'}
                                        className="text-gray-900 dark:text-white text-center"
                                        format={'####/##/## ##:##:##'}
                                    />
                                </div>
                                <div className="text-sm text-gray-900 dark:text-white text-center">
                                    {data.stateDescription}
                                </div>
                            </div>
                            <div className="text-base text-gray-900 dark:text-white">
                                Source Account
                                <NumberFormat
                                    id="bankAccountIssuer"
                                    displayType={"text"}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                    format="####-####-####-####"
                                    value={data.bankAccountIssuer}
                                />
                            </div>
                            <div className="text-base text-gray-900 dark:text-white mt-2">
                                Destiny Merchant
                                <div className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center">
                                    {data.merchant}
                                </div>
                            </div>
                            <div className="text-base text-gray-900 dark:text-white mt-2">
                                Transaction ID
                                <div className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center">
                                    {data.id}
                                </div>
                            </div>
                            <div className="text-base text-gray-900 dark:text-white mt-2">
                                Amount
                                <NumberFormat
                                    id="bankAccountIssuer"
                                    displayType={"text"}
                                    prefix={'$'}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                    value={data.amount}
                                />
                            </div>
                            <div className="text-base text-gray-900 dark:text-white mt-2">
                                Purchase description
                                <div className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center">
                                    {data.description}
                                </div>
                            </div>
                            <div
                                className="flex-1 p-4 items-center justify-center border-t border-solid border-blueGray-100 rounded-b">
                                <Link id="profileSidebarElement" to={"/merchant-site"}
                                      className="flex items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div>
                                        <svg className="w-20 h-20 justify-center" fill="none" stroke="forestgreen"
                                             viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                    </div>
                                </Link>

                                <Link id="linkCloseTransaction" to={"/merchant-site"}
                                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <p>
                                        <button
                                            className="text-white color-endabank w-96 focus:ring-4 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
                                            type="button"
                                            id="closePopUp"
                                        >
                                            Back to merchant
                                        </button>
                                    </p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
                :
                (
                    <div
                        className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 sm:p-2 bg-gray-200 bg-opacity-80 rounded-lg">
                        <div className="relative w-auto my-6 mx-auto max-w-3x2">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none border-2 border-orange-500 sm:p-8 focus:outline-none">
                                <div className="text-xl text-gray-900 dark:text-white text-center">
                                    <div className="font-bold md:py-4">
                                        {stateType} TRANSACTION
                                        <div className="text-lg">
                                            <NumberFormat
                                                value={data.createAt}
                                                displayType={'text'}
                                                className="text-gray-900 dark:text-white text-center"
                                                format={'####/##/## ##:##:##'}
                                            />
                                        </div>
                                        <div className="text-lg text-gray-900 dark:text-white text-center mt-5 font-light">
                                            Reason: {data.stateDescription}
                                        </div>
                                        <div className="text-lg text-gray-900 dark:text-white mt-2">
                                            Transaction ID
                                            <div className="text-lg text-gray-900 dark:text-white text-center mt-2 font-light">
                                                {data.id}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex-1 p-4 items-center justify-center">
                                        <Link id="profileSidebarElement" to={"/merchant-site"}
                                              className="flex items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <div>
                                                <svg className="w-20 h-20 justify-center" fill="none" stroke="red" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                                </svg>
                                            </div>
                                        </Link>

                                        <Link id="linkCloseTransaction" to={"/merchant-site"}
                                              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <p>
                                                <button
                                                    className="justify-center text-white color-endabank w-96 focus:ring-4 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
                                                    type="button"
                                                    id="closePopUp"
                                                    onClick={() => removeCookie()}
                                                >
                                                    Back to merchant
                                                </button>
                                            </p>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </>
    );


}
export default PayTransactionPopUp;