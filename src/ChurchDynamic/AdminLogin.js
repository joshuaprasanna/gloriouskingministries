// src/ChurchDynamic/AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/admin/login', { email, password });
        localStorage.setItem('token', res.data.token);
        navigate('/admin/upload');
      } catch (err) {
        setError('Invalid credentials');
      } finally {
        setLoading(false);
      }
    }, 800); // ⏳ Spinner shown with slight delay
  };

  return (
    <div className="admin-login-container">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          height: 100vh;
          overflow: hidden;
        }

        .admin-login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .login-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          text-align: center;
          width: 300px;
          animation: fadeIn 1s ease-in-out;
        }

        .login-box h2 {
          color: #fff;
          margin-bottom: 20px;
        }

        .login-box input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          outline: none;
          font-size: 16px;
        }

        .login-box button {
          background: #fff;
          color: #2a5298;
          padding: 12px 20px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          transition: 0.3s ease;
        }

        .login-box button:hover {
          background: #ffcc00;
          color: #000;
        }

        .error-message {
          color: #ff4d4d;
          margin-bottom: 15px;
        }

        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
          margin: 10px auto;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="login-box">
        <h2>Admin Login</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? <div className="spinner"></div> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
