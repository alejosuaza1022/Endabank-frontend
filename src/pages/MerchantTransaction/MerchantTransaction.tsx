import apiUrls from "../../constants/apiUrls";
import React, {useEffect, useState} from "react";
import {getAxios, postAxios} from "../../utils/axios";
import {PopUpMessage, Spinner,} from "../../components/index";
import strings from "../../constants/strings";
import Strings from "../../constants/strings";
import axios, {AxiosError} from "axios";
import {Link, Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import AccountDetailsProps from "@components/AccountSummaryData/AccountSummaryDetails.interface";
import NumberFormat from "react-number-format";
import {SubmitHandler, useForm} from "react-hook-form";
import GetIpDataProps from "@components/getIp/getIpData.interface";
import TransactionObjectProps from "@pages/Transaction/transaction.interface";
import PayTransactionPopUp from "../PayTransactionPopUp/PayTransactionPopUp";
import PayTransactionPopUpInterface from "@pages/PayTransactionPopUp/payTransactionPopUp.interface";

const MerchantTransaction= () => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        getValues,
        formState: {errors},
    } = useForm<TransactionObjectProps>({mode: "onTouched"});
    const [details, setDetails] = useState<AccountDetailsProps>();
    const [showModal, setShowModal] = useState(false);
    const [ip, setIp] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [isColorError, setIsColorError] = useState<boolean>(false);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [response, setResponse] = useState<PayTransactionPopUpInterface>();
    const [messagePopUp, setMessagePopUp] = useState<string>(Strings.USER_REGISTERED);

    const token = Cookies.get("token");
    const merchantKey="1H4VDJK5645HG2KLHY754GHF3";
    const apiId="245HKG654KJG327";
    const identifier="1006504371";
    const amount=1000;
    const description="test";

    const openModal = () => {
        setShowModal(true);
    };
    const setShowModalFunction = (value: boolean) => {
        setShowModal(value);
    };
    const dataDefault={
        amount: 0,
        stateType: "",
        bankAccountIssuer: "",
        merchant: "",
        createAt: "",
        stateDescription:"",
        description: "",
    }
    function catchError(err: any) {
        const error = err as AxiosError;
        let message = strings.ERROR_MESSAGE;
        if (error.response?.data?.statusCode != 500) {
            message = error.response?.data?.message || strings.ERROR_MESSAGE;
        }
        setShowPopUpMessage(true);
        setIsColorError(true);
        setMessagePopUp(message);
        setShowPopUpMessage(true);
        setIsLoading(false);
    }
    async function getDetails() {
        try {
            setIsLoading(true);
            const responseDetails: AccountDetailsProps = await getAxios(
                apiUrls.GET_ACCOUNT_DETAILS,
                token
            );
            setDetails(responseDetails);
            setIsLoading(false);
        } catch (err) {
            catchError(err);
        }
    }
    async function getIP() {
        try {
            setIsLoading(true);
            const res:GetIpDataProps= await axios.get('https://geolocation-db.com/json/');
            setIp(res.data.IPv4);
        }
        catch (err) {
        }
    }
    useEffect(() => {
        getDetails();
        getIP();
    }, []);
    const onSubmit: SubmitHandler<any> = async () => {
        setShowPopUpMessage(false);
        try {
            setIsLoading(true);
            const response:PayTransactionPopUpInterface = await postAxios(
                apiUrls.MERCHANT_TRANSACTION,
                {merchantKey: merchantKey,
                    apiId: apiId,
                    identifier: identifier,
                    amount: amount,
                    description: description,
                    address: ip,},
                token
            );
            setResponse(response);
            reset();
            setShowModal(true);
        } catch (err) {
            catchError(err);
        }
        setIsLoading(false);
    };
    const renderPageOrLoading = () => {
        return isLoading ? (
            <Spinner />
        ) : (
            <div >
                <header className="p-4 bg-white font-bold justify-center md:flex md:items-center md:p-6 dark:bg-gray-800">
                    <span className="text-3xl">Transaction</span>
                </header>
                <form onSubmit={handleSubmit(onSubmit)} id="transaction">
                        <div className="flex justify-between mb-4">
                            <div className="flex-1 min-w-0 p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
                                <div className="flex justify-between">
                                        <div className="text-lg text-gray-900 dark:text-white w-52">
                                            <div className="font-bold">
                                            Source Account
                                            </div>
                                            <NumberFormat
                                                    thousandSeparator={true}
                                                    id="bankAccountNumberIssuer"
                                                    displayType={"text"}
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                                    format="####-####-####-####"
                                                    value={details?.accountNumber}
                                                />
                                        </div>
                                        <div className="text-lg text-gray-900 dark:text-white w-32">
                                            <div className="font-bold">
                                            Balance
                                            </div>
                                            <NumberFormat
                                                thousandSeparator={true}
                                                id={"amount"}
                                                displayType={"text"}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                                prefix={'$'}
                                                value={details?.balance}
                                            />
                                        </div>
                                    </div>
                                        <div className="text-lg text-gray-900 dark:text-white w-full mt-2">
                                            <div className="font-bold">
                                            Amount
                                            </div>
                                            <NumberFormat
                                                thousandSeparator={true}
                                                id={"amount"}
                                                displayType={"text"}
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                                placeholder="$0"
                                                allowLeadingZeros={false}
                                                allowNegative={false}
                                                prefix={'$'}
                                                value={amount}
                                            />
                                        </div>
                                        <div className="text-lg text-gray-900 dark:text-white mt-2">
                                            <div className="font-bold">
                                            Description
                                            </div>
                                            <div className="block py-2.5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center">
                                                {description}
                                            </div>
                                        </div>
                                        <div className="text-lg text-gray-900 dark:text-white w-full mt-2">
                                            <div className="font-bold">
                                            Address
                                            </div>
                                            <div className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center">
                                                {ip}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="flex justify-between">
                    <Link id="profileSidebarElement" to={"/profile"}
                          className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white">
                            <button
                                className="text-white color-endabank focus:ring-4 font-medium rounded-lg text-sm w-52 px-5 py-2.5 text-center "
                                type="button"
                                id="cancelTransaction"
                            >
                                Cancel
                            </button>
                    </Link>
                    <button
                        type="submit"
                        id="submitTransaction"
                        className="text-white color-endabank  focus:ring-4  font-medium rounded-lg text-sm  w-52 px-5 py-2.5 text-center "
                    >
                        Submit
                    </button>
                            </div>
                </form>
            </div>
        );
    };
    return (
        <>
            {showModal && (<PayTransactionPopUp setShowModal={setShowModalFunction} data={response??dataDefault}/>)}
            {token?.length != 0 ? renderPageOrLoading() : <Navigate replace to="/" />}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage
                        message={messagePopUp}
                        setShowPopUpMessage={setShowPopUpMessage}
                        isColorError={isColorError}
                    />
                </div>
            )}
        </>
    );
};

export default MerchantTransaction;
