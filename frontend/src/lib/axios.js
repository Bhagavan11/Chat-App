import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-1-1e2e.onrender.com/api",
  withCredentials: true,
})
