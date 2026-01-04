import axios from "axios";
import { getToken } from "@/utils/storage";

const api = axios.create({
  baseURL: "https://cwlcoursebackend.onrender.com/api",
});

// 🔐 Attach token automatically
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

