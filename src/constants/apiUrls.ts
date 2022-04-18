class apiUrls {
  static readonly BASE_URL = "http://localhost:8080/api/v1";
  static readonly GET_USERS_TO_APPROVE_URL = `${this.BASE_URL}/users`;
  static readonly GET_USERS_CHANGE_PASSWORD_URL = `${this.BASE_URL}/users/change-password`;
  static readonly GET_USERS_RESET_PASSWORD_URL = `${this.BASE_URL}/users/reset-password`;
}
export default apiUrls;
