// src/utils/auth.js

// Save admin token to browser storage
export const setToken = (token) => {
  localStorage.setItem('adminToken', token);
};

// Get token from browser storage
export const getToken = () => {
  return localStorage.getItem('adminToken');
};

// Remove token (on logout)
export const removeToken = () => {
  localStorage.removeItem('adminToken');
};
