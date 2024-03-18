import React from 'react'
import img from "../assets/home.jpg"
import {  useSelector , useDispatch} from 'react-redux';
import { logout } from '../Redux/store';

function Home() {
  const dispatch = useDispatch();
  const username = useSelector((state)=> state.user.value.username);
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div className='flex justify-center p-5 items-start h-screen  bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${img})`}}>
      <div className='bg-gray-200 bg-opacity-40 rounded-md p-10 flex gap-10 flex-col' >
        <h1 className='font-bold text-5xl'>Welcome to our {username}!</h1>
        <h1 className='text-center font-bold text-xl'>Now you have all the access to visit this site!</h1>
<button   onClick={handleLogout} className='bg-red-500 p-5 text-white font-bold text-lg'>LogOut</button>
      </div>
    </div>
  ) 
}

export default Home
