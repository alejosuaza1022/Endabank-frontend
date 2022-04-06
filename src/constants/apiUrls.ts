class apiUrls {
  static readonly BASE_URL = "http://localhost:8080/api/v1";
  static readonly GET_USERS_TO_APPROVE_URL = `${this.BASE_URL}/users`;
  static readonly LOG_IN_URL = `${this.BASE_URL}/login`
}
export default apiUrls;
