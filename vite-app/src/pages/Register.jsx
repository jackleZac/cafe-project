import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Register() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ birthDate, setBirthDate ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState(60);
  const [ password, setPassword ] = useState('');

  let navigate = useNavigate();
  
  const submitForm = async () => {
    try {
      axios.post('/api/register', {
        firstName: firstName,
        lastName: lastName,
        username: username, 
        birthDate: birthDate,
        email: email, 
        phone: phone,
        password: password,
      })
      .then((res) => {
        if (res['data'].message === 'Registration Success!') 
          return navigate('/login')
      }) 
    } catch(error) {
      console.log(error)
    }
  }
  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent page refreshes
    e.preventDefault();
    submitForm();
  }

  return (
      <div className='h-screen pt-36 bg-[#f5f5ef]'>
        <form className='px-6 py-2 h-fit w-fit mx-auto shadow-xl bg-white' onSubmit={handleSubmit}>
          <h1 className='my-4 text-2xl text-center font-bold'>Create an Account</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdOutlinePersonAddAlt className='text-2xl mx-2 text-gray-500'/>
              <input type="text" className='bg-transparent w-full border-none outline-none' placeholder='First Name' 
              value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdOutlinePersonAddAlt className='text-2xl mx-2 text-gray-500'/>
              <input type="text" className='bg-transparent w-full border-none outline-none' placeholder='Last Name' 
              value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaUser className='text-xl mx-2 text-gray-500'/>
              <input type="text" className='bg-transparent w-full border-none outline-none' placeholder='Username' 
              value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdDateRange className='text-2xl mx-2 text-gray-500'/>
              <input type="date" className='bg-transparent w-full border-none outline-none' placeholder='Date of Birth' 
              value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <MdEmail className='text-2xl mx-2 text-gray-500'/>
              <input type="email" className='bg-transparent w-full border-none outline-none' placeholder='Email' 
              value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaPhoneAlt className='text-xl mx-2 text-gray-500'/>
              <input type="tel" className='bg-transparent w-full border-none outline-none' placeholder='Phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaLock className='text-xl mx-2 text-gray-500'/>
              <input type="password" className='bg-transparent w-full border-none outline-none' placeholder='Password' 
              value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className='p-4 flex flex-row bg-[#eaeaea] rounded-md'>
              <FaLock className='text-xl mx-2 text-gray-500'/>
              <input type="password" className='bg-transparent w-full border-none outline-none' placeholder='Confirm Password' 
              value={password} onChange={(e) => setPassword(e.target.value)} required/>
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