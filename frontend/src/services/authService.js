import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

// Optional: Add console.log to debug
console.log('API_URL:', API_URL);

export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response;
};

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response;
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response;
};

export const updateUser = async (userData) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/update`, userData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response;
};