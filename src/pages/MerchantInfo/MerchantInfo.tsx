import UserGeneralInfo from "./UserGeneralInfo";
import MerchantKeysSection from "./MerchantKeysSection";
import MerchantForm from "./MerchantForm";
import useAuth from "../../Hooks/useAuth";

const MerchantInfo = () => {

    const {auth} = useAuth();

    return(
        <div className="flex flex-col w-full p-5 gap-y-4">
            <UserGeneralInfo/>
            {auth?.authorities?.find(role => ['ROLE_MERCHANT'].includes(role)) &&
            <MerchantKeysSection/>}
            <MerchantForm />
        </div>
    );
}

export default MerchantInfo;