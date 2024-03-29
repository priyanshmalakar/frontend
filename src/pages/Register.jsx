import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import video from '../assets/video.mp4';

function Register() {
const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://backend-authentication-4lbl.onrender.com/try/register", data)
    .then(()=>{
        console.log(data);
        alert('Successfully registered!')
        navigate('/login')
    })
    .catch((err)=>{
        console.error(`Error: ${err}`);
        alert('Registration failed. Please try again.');
       
    });
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
    <video autoPlay loop  className="fixed inset-0 object-cover w-full h-full z-0">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4  w-full sm:w-full md:w-1/2 lg:w-1/3 bg-indigo-200 bg-opacity-20 z-10">
      <h1 className='text-white font-bold text-2xl text-center'>Register</h1>
      <div className="mb-4">
        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="username"
          type="text"
          placeholder="Enter your username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center mb-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>
      <p className='text-center font-bold text-xl text-white'>Already Have Account ? <Link to="/login" className='text-blue-200 underline'>Login</Link></p>
    </form>
  </div>
  );
}

export default Register;
