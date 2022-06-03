import TransactionPopUpInterface from "./transactionPopUp.interface";
import NumberFormat from "react-number-format";
import React from "react";

const TransactionPopUp = (props: { setShowModal: Function, data:TransactionPopUpInterface }) => {
    const {data} = props;
    const {setShowModal} = props;
    setShowModal(true);
    return (
            <div
                className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 sm:p-2 bg-gray-200 bg-opacity-80 rounded-lg">
                <div className="relative w-auto my-6 mx-auto max-w-3x2">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none border-2 border-orange-500 sm:p-8 focus:outline-none">
                        <div className="text-lg text-gray-900 dark:text-white text-center">
                            Successful transfer
                            <div>
                                <NumberFormat
                                value={data.createAt}
                                displayType={'text'}
                                className="text-gray-900 dark:text-white text-center"
                                format={'####/##/## ##:##:##'}
                                />
                            </div>
                            <NumberFormat
                                id="bankAccountIssuer"
                                displayType={"text"}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                format="####-####-####-####"
                                value={data.bankAccountIssuer.accountNumber}
                            />
                            </div>
                            <div className="text-lg text-gray-900 dark:text-white">
                                Destiny Account
                                <NumberFormat
                                    id="bankAccountIssuer"
                                    displayType={"text"}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                    format="####-####-####-####"
                                    value={data.bankAccountReceiver.accountNumber}
                                />
                                </div>
                            <div className="text-lg text-gray-900 dark:text-white">
                                Amount
                                <NumberFormat
                                    id="bankAccountIssuer"
                                    displayType={"text"}
                                    prefix={'$'}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                    value={data.amount}
                                />
                                </div>

                        <div
                            className="flex items-center justify-end p-4 border-t border-solid border-blueGray-100 rounded-b">
                            <div className="w-1/12"></div>
                            <button
                                className="text-white color-endabank w-96 focus:ring-4  font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center "
                                type="button"
                                id="closePopUp"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default TransactionPopUp;