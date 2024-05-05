import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegFaceSmile } from "react-icons/fa6"; 

const SigninForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:1688/login';
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(url, formData);
      if (response && response.data) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        onLogin(); // Update login status in parent component
        Navigate('/home');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login failed:', error);
    }
  };

  return (
    <>
    <div>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
          <FaRegFaceSmile className='mx-auto text-4xl text-orange-400'/>
            <h2 className="my-1 text-center text-3xl font-bold tracking-tight text-gray-900">
              Log in
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={handleChange}
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    onChange={handleChange}
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
                  >
                    {showPassword ? (
                      <IoClose />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <p className="text-red-500">{error}</p>
              )}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Log In
                </button>
              </div>
            </form>
            <p>Don't have an account? <Link to='/' className='text-blue-500 hover:text-blue-700 hover:border-b-blue-600'>Signup</Link> </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SigninForm;
