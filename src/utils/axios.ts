import axios from "axios";

async function getAxios(token: string, url: string) {
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });
  const dataResponse = await response?.data;
  return dataResponse;
}
async function putAxios(token: string, url: string, data: any) {
  const response = await axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
  const dataResponse = await response?.data;
  return dataResponse;
}
async function postAxios(token: string, url: string, data: any) {
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
  const dataResponse = await response?.data;
  return dataResponse;
}
export { getAxios, putAxios, postAxios };
