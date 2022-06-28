import React, {useState} from "react";
import PopUpPaymentData from "./popUpPaymentData";
import PopUpPaymentProps from "./popUpPaymentProps";
import Cookies from "js-cookie";

const PopUpPayment: React.FC<PopUpPaymentProps> = ({setShowPayment, amount}) => {
    const [data, setData] = useState<PopUpPaymentData>(
        {
            userId: "",
            apiId: "245HKG654KJG327",
            merchantKey: "1H4VDJK5645HG2KLHY754GHF3",
            amount: amount,
            description: "payment for shoes",
            address: "192.198.100.1"
        })
    const setUserId = (value: string) => {
        setData({...data, userId: value})
    }
    const setInfoToPay = () => {
        const dataString = JSON.stringify(data);
        Cookies.set("dataMerchant", dataString, {secure: true})
        const dataReaded:PopUpPaymentData = JSON.parse(Cookies.get("dataMerchant") ?? "{}")
        console.log(dataReaded)

    }
    return (<div
        className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 sm:p-2 bg-gray-900 bg-opacity-80 rounded-lg">
        <div className="relative w-auto my-6 mx-auto max-w-3x2">
            <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none border-2 border-gray-900 sm:p-8 focus:outline-none ">
                <div className="text-xl text-gray-900 dark:text-white text-center">
                    <div className="font-bold mx-4 ">
                        Please enter your ID
                        <div className="text-lg pb-4 ">
                            <input
                                value={data.userId}
                                onChange={(event => {
                                    setUserId(event.target.value)
                                })}
                                className=" text-center border mt-4 border-2 border-gray-900 rounded-lg w-full py-1"
                            />
                        </div>
                    </div>


                    <div
                        className="flex flex-col p-4 items-center justify-center border-t border-solid border-blueGray-100 rounded-b">


                        <button
                            className="text-black border-2 border-gray-900 bg-white w-96 focus:ring-4 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-4"
                            type="button"
                            id="closePopUp"
                            onClick={() => setInfoToPay()}
                        >
                            Pay With EndaBank
                        </button>


                        <button
                            className="text-black border-2 border-gray-900 bg-white  w-96 focus:ring-4 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-4"
                            type="button"
                            id="closePopUp"
                        >
                            Pay With Apple Pay
                        </button>
                        <button
                            className="text-black border-2 border-gray-900 bg-white w-96 focus:ring-4 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-4"
                            type="button"
                            id="closePopUp"
                        >
                            Pay With Bancolombia
                        </button>
                        <button
                            className="text-white  border-2 border-gray-900 bg-black   w-96 focus:ring-4 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mb-4"
                            type="button"
                            id="closePopUp"
                            onClick={() => setShowPayment(false)}
                        >
                            Close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>)

}
export default PopUpPayment;