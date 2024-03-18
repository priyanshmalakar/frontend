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
    const response = await axios.post("http://localhost:5000/try/login", data)
   
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
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${img})` }}>
      <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8 mb-4 w-1/3 bg-indigo-200 bg-opacity-20">
        <div className="mb-4 " >
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
          {/* <p>User Not registerd register first <a href="/register" className='text-blue-500 underline'>register</a></p> */}
        </div>
      </form>
    </div>
  );
}

export default Login;
