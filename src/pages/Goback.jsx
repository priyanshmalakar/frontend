import React from 'react'
import img from "../assets/verify.jpg"
import { Link } from 'react-router-dom'
function Goback() {
  return (
    <div className='flex justify-end items-center p-20 flex-col h-[100vh] bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${img})` }}>
      <div className='rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-full md:w-1/2 lg:w-1/3 bg-pink-300 bg-opacity-20'>
    <h1 className='font-bold text-4xl p-10 text-center text-red-200'>Go back Dear!</h1>
    <h1 className='font-bold text-xl p-2 text-center text-white'>Go and Login first!</h1>
    <h1 className='font-bold text-xl p-2 text-center text-white'>You don't have any access here! <Link className="underline text-blue-300" to="/login">Login</Link></h1>
      </div>
</div>
  )
}

export default Goback
