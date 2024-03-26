import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from "../assets/bg.jpg"
import {login } from "../Redux/store"
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  const dispatch = useDispatch();
  const username = useSelector((state)=> state.user.value.username)
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



  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await axios.post("https://backend-authentication-4lbl.onrender.com/try/login", data)
   
    const token = response.data.token;
    localStorage.setItem('token', token);
    console.log(token, "token from backend")
    
    if(response){
      console.log(data);
      
      dispatch(login({username : data.username}))
            alert('Successfully registered!')
            navigate('/')
    }
  };
  console.log(username , "username");

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${img})` }}>
    {/* <div className='text-white '>
      <p>Credentials</p>
      <p>username :123</p>
      <p>password :123</p>
    </div> */}
      <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8 mb-4 w-1/3 bg-indigo-200 bg-opacity-20">
        <div className="mb-4 " >
        <h1 className='text-white font-bold text-2xl text-center'>Login</h1>
          <label className="block  text-white text-sm font-bold mb-2" htmlFor="username">
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
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
        <div className="flex  justify-center">
          <button
            className="bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            >
            Login
          </button>
        </div>
          <p className='text-center font-bold text-xl text-white'>User Not registerd register first <a href="/register" className='text-blue-200 underline'>register</a></p>
      </form>
    </div>
            </>
  );
}

export default Login;
