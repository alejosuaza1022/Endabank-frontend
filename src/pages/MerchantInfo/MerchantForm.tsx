import {SubmitHandler, useForm} from "react-hook-form";
import MerchantFormObject from "./merchantFormObject.interface";
import {useState} from "react";
import {Input, Spinner} from "../../components/index";
import {Link} from "react-router-dom";
import {SectionTitle} from "../../components/index";

const MerchantForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<MerchantFormObject>({mode:"onTouched"})

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<MerchantFormObject> = (data, e) => {
        e?.preventDefault()

        const taxId = data.taxId;
        const address = data.address;
    }

    const renderFormOrLoading = () => {

    }

    return (
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
                            //error={errors.email}
                        />
                        <Input
                            type="text"
                            id="taxId"
                            dataId="merchantTaxId"
                            label="Tax id"
                            register={register}
                            //error={errors.email}
                        />
                        <Input
                            type="text"
                            id="address"
                            dataId="merchantAddress"
                            label="Address"
                            //error={errors.password}
                            register={register}
                        />


                    </form>
                    <button
                        id="submitMerchantRequest"
                        type="submit"
                        className="text-white color-endabank focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                                    text-sm  px-5 py-2.5 text-center"
                    >
                        Send request
                    </button>
                </div>

            </div>
        </div>
    );

}

export default MerchantForm;