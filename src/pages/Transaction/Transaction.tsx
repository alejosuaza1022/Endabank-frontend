import apiUrls from "../../constants/apiUrls";
import React, {useContext, useEffect, useState} from "react";
import {getAxios, postAxios} from "../../utils/axios";
import {GenericInput, PopUpMessage, Spinner,} from "../../components/index";
import strings from "../../constants/strings";
import Strings from "../../constants/strings";
import axios, {AxiosError} from "axios";
import {Link, Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../../contexts/AuthProvider";
import AccountDetailsProps from "@components/AccountSummaryData/AccountSummaryDetails.interface";
import NumberFormat from "react-number-format";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import GetIpDataProps from "@components/getIp/getIpData.interface";
import TransactionObjectProps from "@pages/Transaction/transaction.interface";
import TransactionPopUpInterface from "@pages/Transaction/TransactionPopUp/transactionPopUp.interface";
import TransactionPopUp from "./TransactionPopUp/TransactionPopUp";

const Transaction= () => {
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
    const [data, setData] = useState<TransactionPopUpInterface>();
    const [messagePopUp, setMessagePopUp] = useState<string>(Strings.USER_REGISTERED);

    const token = Cookies.get("token");
    const {
        auth : { email},
    } = useContext(AuthContext);
    const openModal = () => {
        setShowModal(true);
    };
    const setShowModalFunction = (value: boolean) => {
        setShowModal(value);
    };
    const dataDefault={
        amount: 0,
        bankAccountReceiver: {accountNumber: ""},
        bankAccountIssuer: {accountNumber: ""},
        createAt: "",
        stateType:{name:""},
        stateDescription: "",
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
                apiUrls.GET_ACCOUNT_DETAILS+email,
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
    const onSubmit: SubmitHandler<TransactionObjectProps> = async (data) => {
        setShowPopUpMessage(false);
        try {
            setIsLoading(true);
            const response:TransactionPopUpInterface = await postAxios(
                apiUrls.POST_SEND_MONEY,
                {...data , bankAccountNumberIssuer:details?.accountNumber, address:ip},
                token
            );
            setData(response);
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
                    <span className="text-3xl">Transfer transaction</span>
                </header>
                <form onSubmit={handleSubmit(onSubmit)} id="submitTransaction">
                            <div className="flex justify-between mb-4">
                                    <div className="flex-1 min-w-0 p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
                                        <div className="text-lg text-gray-900 dark:text-white">
                                            Source Account
                                            <NumberFormat
                                                    thousandSeparator={true}
                                                    id="bankAccountNumberIssuer"
                                                    displayType={"text"}
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                                    format="####-####-####-####"
                                                    value={details?.accountNumber}
                                                />
                                        <div>
                                            Destiny Account
                                            <Controller control={control} name="bankAccountNumberReceiver" render={({field: {onChange,value}}) => (
                                                <NumberFormat
                                                    thousandSeparator={true}
                                                    id="bankAccountNumberReceiver"
                                                    className="input block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-center"
                                                    placeholder="0000-0000-0000-0000"
                                                    format="####-####-####-####"
                                                    onValueChange={(v)=>onChange(v.value)
                                                    }
                                                    value={value}
                                                />)}
                                            />
                                        </div>
                                            Amount
                                            <Controller control={control} name="amount" render={({field: {onChange,value}}) => (
                                                <NumberFormat
                                                    thousandSeparator={true}
                                                    id={"amount"}
                                                    className="input block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 text-right"
                                                    placeholder="$0"
                                                    allowLeadingZeros={false}
                                                    allowNegative={false}
                                                    prefix={'$'}
                                                    onValueChange={(v)=>onChange(v.value)
                                                    }
                                                    value={value}
                                                />)}
                                                />
                                        </div>
                                        <div>
                                            Description
                                            <GenericInput type="textarea"
                                                          id="description"
                                                          className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                          placeholder="Leave a description (Max. 250 characters)"
                                                          maxLength={255}
                                                          register={register}/>
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
            {showModal && (<TransactionPopUp setShowModal={setShowModalFunction} data={data??dataDefault}/>)}
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

export default Transaction;
