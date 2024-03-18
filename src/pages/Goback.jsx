import React from 'react'
import img from "../assets/verify.jpg"
function Goback() {
  return (
    <div className='flex justify-end items-center p-20 flex-col h-screen bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${img})` }}>
      <div className='rounded px-8 pt-6 pb-8 mb-4 w-1/3 bg-pink-300 bg-opacity-20'>

    <h1 className='font-bold text-4xl p-10 text-center text-red-200'>Go back Dear!</h1>
    <h1 className='font-bold text-xl p-2 text-center text-white'>Go and Login first!</h1>
    <h1 className='font-bold text-xl p-2 text-center text-white'>You don't have any access here! <a className="underline text-blue-300" href="/login">Login</a></h1>
      </div>
</div>
  )
}

export default Goback
