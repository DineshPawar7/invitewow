import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1/auth',
    withCredentials: true
})

export default instance;