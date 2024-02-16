import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Register() {
  return (
      <div className='h-screen pt-36 bg-[#f5f5ef]'>
        <form className='px-6 py-2 h-fit w-fit mx-auto shadow-xl bg-white'>
          <h1 className='my-4 text-2xl text-center font-bold'>Create an Account</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdOutlinePersonAddAlt className='text-2xl mx-2 text-gray-500'/>
              <input type="text" className='bg-transparent w-full border-none outline-none' placeholder='First Name' required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdOutlinePersonAddAlt className='text-2xl mx-2 text-gray-500'/>
              <input type="text" className='bg-transparent w-full border-none outline-none' placeholder='Last Name' required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaUser className='text-xl mx-2 text-gray-500'/>
              <input type="text" className='bg-transparent w-full border-none outline-none' placeholder='Username' required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdDateRange className='text-2xl mx-2 text-gray-500'/>
              <input type="date" className='bg-transparent w-full border-none outline-none' placeholder='Date of Birth' required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdEmail className='text-2xl mx-2 text-gray-500'/>
              <input type="email" className='bg-transparent w-full border-none outline-none' placeholder='Email' required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaPhoneAlt className='text-xl mx-2 text-gray-500'/>
              <input type="tel" className='bg-transparent w-full border-none outline-none' placeholder='Phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaLock className='text-xl mx-2 text-gray-500'/>
              <input type="password" className='bg-transparent w-full border-none outline-none' placeholder='Password' required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaLock className='text-xl mx-2 text-gray-500'/>
              <input type="password" className='bg-transparent w-full border-none outline-none' placeholder='Confirm Password' required/>
            </div>
          </div>
          <div className=''>
            <button type="submit" className='px-12 py-2 mx-auto mt-12 bg-[#545454] text-white block rounded-3xl'>REGISTER</button>
            <Link to='/login'><p className='my-4 text-center text-xs hover:underline'>Already a Member? Login</p></Link>
          </div>
        </form>
      </div>
  )
}

export default Register