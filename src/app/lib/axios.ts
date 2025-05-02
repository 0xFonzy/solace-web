import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
  console.warn(
    "NEXT_PUBLIC_API_BASE_URL is not defined in environment variables"
  );
}

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
