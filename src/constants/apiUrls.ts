class apiUrls {
  static readonly BASE_URL = process.env.BACK_URL;
  static readonly GET_USERS_TO_APPROVE_URL = `${this.BASE_URL}/users`;
  static readonly BASE_ACCOUNT_URL =`${this.BASE_URL}/accounts`;
  static readonly BASE_MERCHANTS_URL =`${this.BASE_URL}/merchants`;
  static readonly BASE_TRANSACTIONS_URL = `${this.BASE_URL}/transactions`;
  static readonly POST_SEND_MONEY= `${this.BASE_TRANSACTIONS_URL}/send-money`;
  static readonly POST_CREATE_MERCHANT_REQUEST =`${this.BASE_MERCHANTS_URL}/create-request`;
  static readonly GET_MERCHANT_APPROVAL_LOGS =`${this.BASE_MERCHANTS_URL}/filter`;
  static readonly GET_MERCHANT_REQUESTS =`${this.BASE_MERCHANTS_URL}/requests`;
  static readonly UPDATE_MERCHANT_REQUEST =`${this.BASE_MERCHANTS_URL}/update-request`;
  static readonly GET_ACCOUNT_DETAILS=`${this.BASE_ACCOUNT_URL}/details/`;
  static readonly GET_ACCOUNT_SUMMARY=`${this.BASE_ACCOUNT_URL}/summary/`;
  static readonly GET_USER_DETAILS = `${this.BASE_URL}/users/details`;
  static readonly GET_USER_GENERAL_INFO = `${this.BASE_URL}/users/general-info`;
  static readonly PUT_USERS_TO_APPROVE_URL = `${this.GET_USERS_TO_APPROVE_URL}/approve`;
  static readonly LOG_IN_URL = `${this.BASE_URL}/login`
  static readonly GET_USERS_CHANGE_PASSWORD_URL = `${this.BASE_URL}/users/change-password`;
  static readonly GET_USERS_RESET_PASSWORD_URL = `${this.BASE_URL}/users/reset-password`;
  static readonly POST_CREATE_USERS = `${this.BASE_URL}/users`;
  static readonly VERIFY_USER_EMAIL_URL = `${this.BASE_URL}/users/verify-email/`;
}
export default apiUrls;
