import axios from "axios";
import Cookies from "js-cookie";

export const token = Cookies.get("token");

const axiosInstance = axios.create({
  baseURL: "https://nwlogics.com/valyoux_api/api/",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default axiosInstance;
