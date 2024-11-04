import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OTPAuthentication() {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedOtp = localStorage.getItem('otp');
    if (storedOtp) {
      setOtp(storedOtp);
    }
  }, []);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Get the access token from local storage
    const token = localStorage.getItem('acc_token');
  
    try {
      console.log('Submitting OTP:', otp);
      console.log("Access Token:", token); // Log the token for debugging
  
      const response = await axios.post(
        'http://142.93.100.226:8000/api/verify-otp/',
        { otp },
        {
          headers: {
            Authorization: `Bearer ${token}`, // This line includes the token in the request headers
          },
        }
      );
  
      console.log('Response:', response);
  
      if (response.status === 200) {
        alert('OTP verified successfully!');
        // localStorage.removeItem('otp'); // Optionally remove OTP from local storage
        navigate('/login'); // Redirect to the login page
      }
    } catch (error) {
      console.error('OTP verification failed:', error.response ? error.response.data : error.message);
      setErrorMessage('Invalid OTP. Please try again.'); // Show error message
    }
  };
  
  return (
    <div
    style={{
      background: `
        radial-gradient(68.44% 68.44% at 11.68% 128.28%, rgba(31, 228, 160, 0.38) 0%, rgba(32, 228, 157, 0) 100%),
        radial-gradient(62.06% 62.06% at 56.94% 1.01%, rgba(33, 159, 248, 0.2) 0%, rgba(30, 159, 252, 0) 100%),
        radial-gradient(25.75% 98.99% at 94.13% 88.82%, rgba(181, 44, 232, 0.2) 0%, rgba(176, 36, 227, 0) 100%),
        linear-gradient(256.1deg, #f8f5f5, #d5ebf9 22.92%, #d5e9f5 38.54%, #fbf9e8 73.96%, #f0eded),
        radial-gradient(112% 112% at 50% -8.08%, #fff 0%, #e4f1fe 100%)`,
    }}
  >
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-100 border p-3 rounded-md w-[340px] h-[300px]">
        <h2 className="text-2xl text-center font-extrabold p-6 text-slate-700">OTP Authentication</h2>
        <form onSubmit={handleSubmit}>
          <div className="ml-10">
            <label className="font-semibold text-slate-900" htmlFor="OTP">
             
            </label>
            <input
              className="w-60 h-9 mt-1 border rounded-md"
              type="text"
              value={otp}
              name="email"
            placeholder='   Enter your OTP'
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit Button */}
          <div className="mt-5 ml-1 flex justify-center">
            <button
              className="w-60 h-9 items-center bg-green-500 cursor-pointer text-white font-bold rounded-md text-md"
              type="submit"
            >
            Verify
            </button>
          </div>
         

     
        </form>
      </div>
    </div>

    {/* Error Message */}
    {errorMessage && (
      <div className="text-red-500 text-center mt-4">{errorMessage}</div>
    )}
  </div>
  );
}

export default OTPAuthentication;
