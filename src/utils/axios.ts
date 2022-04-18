import axios, {AxiosRequestHeaders} from "axios";

function headers(token: string | undefined): AxiosRequestHeaders {
  if (token) {
    return {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    };
  }
  return { "Access-Control-Allow-Origin": "*" };
}

async function getAxios(url: string, token: string | undefined) {

  const response = await axios.get(url, { headers: headers(token) });
  return await response?.data;
}
async function putAxios(url: string, data: any, token: string | undefined) {
  const response = await axios.put(url, data, {
    headers: headers(token),
  });
  return await response?.data;
}
async function postAxios(url: string, data: any, token: string | undefined) {
  const response = await axios.post(url, data, {
    headers: headers(token),
  });
  return await response?.data;
}
export { getAxios, putAxios, postAxios };
