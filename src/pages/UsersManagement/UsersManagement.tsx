import {ActivateAccountForm, MerchantRequestsCollection} from "../index";

const UsersManagement = () => {
  return(
      <div className="w-full">
          <MerchantRequestsCollection />
          <ActivateAccountForm />
      </div>
  );
}

export default UsersManagement;