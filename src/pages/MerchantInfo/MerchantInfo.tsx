import UserGeneralInfo from "./UserGeneralInfo";
import MerchantKeysSection from "./MerchantKeysSection";
import MerchantForm from "./MerchantForm";

const MerchantInfo = () => {
  return(
      <div className="flex flex-col w-full p-5 gap-y-4">
          <UserGeneralInfo/>
          <MerchantKeysSection/>
          <MerchantForm />
      </div>
  );
}

export default MerchantInfo;