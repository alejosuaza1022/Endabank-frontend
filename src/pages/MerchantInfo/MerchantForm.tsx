import {SubmitHandler, useForm} from "react-hook-form";
import MerchantFormObject from "./merchantFormObject.interface";
import {useState} from "react";
import {Input, PopUpMessage, SectionTitle, Spinner} from "../../components/index";
import Strings from "../../constants/strings";
import {AxiosError} from "axios";
import apiUrls from "../../constants/apiUrls";
import Cookies from "js-cookie";
import {postAxios} from "../../utils/axios";

const MerchantForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<MerchantFormObject>({mode:"onTouched"})

    const [isLoading, setIsLoading] = useState(false);
    const [showPopUpMessage, setShowPopUpMessage] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState<string>(Strings.MERCHANT_REQUEST_REGISTERED);
    const [isColorError, setIsColorError] = useState<boolean>(false);

    const onSubmit: SubmitHandler<MerchantFormObject> = async (data, e) => {
        e?.preventDefault();

        const token = Cookies.get('token');

        setShowPopUpMessage(false);

        try{
            setIsLoading(true);

            const res = await  postAxios(
                apiUrls.POST_CREATE_MERCHANT_REQUEST,
                data,
                token
            );

            setIsColorError(false)
            setMessagePopUp(res.message);
            reset();

        } catch (err) {
            const error = err as AxiosError;

            if(error.response?.data?.statusCode == 400){
                setIsLoading(false);
                setIsColorError(true);
                setMessagePopUp(error?.response?.data?.message || Strings.ERROR_MESSAGE);
                setShowPopUpMessage(true);
            }
        }

        setIsLoading(false)
        setShowPopUpMessage(true);
        reset();
    }

    const renderFormOrLoading = () => {
        return isLoading ? <Spinner/>
                        : (
                <div>
                    <SectionTitle title="Billing info"/>
                    <div className="flex w-full mt-5 ">
                        <div className="p-4  container-form">
                            <form id="merchantForm" onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    type="text"
                                    id="storeName"
                                    dataId="merchantStoreName"
                                    label="Store name"
                                    register={register}
                                    error={errors.storeName}
                                />
                                <Input
                                    type="text"
                                    id="taxId"
                                    dataId="merchantTaxId"
                                    label="Tax id"
                                    register={register}
                                    error={errors.taxId}
                                    optionsValidations={{
                                        pattern: {
                                            value: /^\d{10,11}$/,
                                            message:
                                                "This field must be only numbers with a length between 10 and 11",
                                        },
                                    }}
                                />
                                <Input
                                    type="text"
                                    id="address"
                                    dataId="merchantAddress"
                                    label="Address"
                                    error={errors.address}
                                    register={register}
                                />
                                <button
                                    type="submit"
                                    id="submitMerchantRequest"
                                    className="text-white color-endabank focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                                    text-sm  px-5 py-2.5 text-center"
                                >
                                    Send request
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            )

    }

    return (
        <div className="w-full">
            {renderFormOrLoading()}
            {showPopUpMessage && (
                <div className="fixed bottom-0 right-0 lg:w-1/4 md:w-1/3  ">
                    <PopUpMessage message={messagePopUp} setShowPopUpMessage={setShowPopUpMessage}
                                  isColorError={isColorError} />
                </div>
            )}
        </div>
    );

}

export default MerchantForm;