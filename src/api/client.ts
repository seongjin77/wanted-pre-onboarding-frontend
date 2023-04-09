import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
})



export const axiosAuthApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
});

axiosAuthApi.interceptors.request.use(
  (config)=>{
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  (error) => {
    console.log('타겟',error);
    return Promise.reject(error)
  }
)