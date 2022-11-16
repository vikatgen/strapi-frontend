import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Authentication': `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`
    }
});

export default API;