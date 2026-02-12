import axios from "axios";
import config from "../config";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: `${config.API_BASE_URL}${config.API_SUB_PATH}`,
  withCredentials: true,
  timeout: 60000, // 60 second timeout for slower uploads/cold starts
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for better error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle Timeout
    if (error.code === 'ECONNABORTED') {
      toast.error("Request timed out. The server might be waking up or processing a large file. Please try again.");
      console.warn('⚠️ Request Timed Out');
      return Promise.reject(error);
    }

    if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK' || !error.response) {
      // Backend is not running
      toast.error(
        `❌ Cannot connect to backend server!\n\nPlease ensure the backend is running at ${config.API_BASE_URL}`,
        {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      console.error('🔴 Backend Connection Error:', {
        message: 'Backend server is not running or unreachable',
        expectedURL: config.API_BASE_URL,
      });
    } else if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const message = error.response.data?.message || error.message;

      if (status === 401) {
        toast.error("Unauthorized access. Please login again.");
      } else if (status === 403) {
        toast.error("Access forbidden.");
      } else if (status === 404) {
        toast.error("Resource not found.");
      } else if (status >= 500) {
        toast.error(`Server error: ${message}`);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
