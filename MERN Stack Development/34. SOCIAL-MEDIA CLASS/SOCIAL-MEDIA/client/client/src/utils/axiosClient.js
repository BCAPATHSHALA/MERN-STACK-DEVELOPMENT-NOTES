import axios from "axios";
import {
  getItem,
  KEY_ACCESS_TOKEN,
  removeItem,
  setItem,
} from "./localStorageManager";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials: true, // send cookie from frontend to backend
});

//Requset Interceptor
axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  request.headers["Authorization"] = `Bearer ${accessToken}`;
  return request;
});

//Response Interceptor
axiosClient.interceptors.response.use(async (response) => {
  const data = response.data;
  if (data.status === "ok") {
    return data;
  }

  const originalRequet = response.config;
  const statusCode = data.statusCode;
  const error = data.error;

  if (
    //when refresh token expires, send user to login page
    statusCode === 401 &&
    originalRequet.url ===
      `${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`
  ) {
    removeItem(KEY_ACCESS_TOKEN);
    window.location.replace("/login", "_self");
    return Promise.reject(error);
  }

  if (statusCode === 401) {
    // When accessToken has expired then call refreshToken API
    //to generate the new access token
    const response = await axiosClient.get("./auth/refresh");
    console.log("response from backend: ", response);

    if (response.status === "ok") {
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      originalRequet.headers[
        "Authorization"
      ] = `Bearer ${response.result.accessToken}`;

      return axios(originalRequet);
    }
  }

  return Promise.reject(error);
});
