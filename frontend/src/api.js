import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// Axios setup
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// Create interceptors
api.interceptors.request.use(
    (config) => {
        // Retrieve access token from local storage
        const token = localStorage.getItem(ACCESS_TOKEN)

        // Check if header contains token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    // Error handling
    (error) => {
        return Promise.reject(error);
    }
)

export default api