import axios from "axios";
import { ACCESS_TOKEN } from "./constants";


const apiURL = "/choreo-apis/cvd-diagnosis/backend/rest-api-be2/v1.0"

// Axios setup
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
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