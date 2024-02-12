import React from 'react';
import cafeDesign5  from '../assets/cafeDesign5.jpg';

function Contact() {
  return (
    <div className='grid grid-cols-2 max-lg:grid-cols-1 bg-[#f5f5ef]'>
      <div className='relative h-screen pt-24' >
        <img src={cafeDesign5} className='absolute z-10 w-full h-full'/>
        <form className='absolute px-6 py-12 z-20 w-2/3 h-2/3 mx-auto text-base text-white bg-[#545454] opacity-80'>
          <div className='relative flex flex-row max-xl:flex-col my-2'>
            <div className='mr-2 '>
              <label htmlFor="fname">First Name</label><br />
              <input type="text" id='fname' className='px-2 text-black'/>
            </div>
            <div className='ml-2 '>
              <label htmlFor="lname">Last Name</label><br />
              <input type="text" id='lname' className=' px-2 text-black'/>
            </div>
          </div>
          <div>
            <label htmlFor="phone">Phone</label><br />
            <input type="number" id='phone' className='w-2/3 px-2 text-black' />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" id='email' className='w-2/3 px-2 text-black'/>
          </div>
          <div>
            <label htmlFor="inquiry">Inquiry</label><br />
            <textarea id='inquiry' className='w-2/3 px-2 text-black'></textarea>
          </div>
          <button className='p-2 my-6 bg-[#373333] opacity-none'>SUBMIT</button>
        </form>
      </div>
      <div className='text-black'>
        <div className='mx-auto'>
          <h1 className='mt-48 text-2xl font-bold'>SEE YOU SOON</h1>
          <div>
            <h2>PHONE NUMBER</h2>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h2>EMAIL ADDRESS</h2>
            <p>hello@reallygreatsite.com</p>
          </div>
          <div>
            <h2>LOCATION</h2>
            <p>23 Anywhere St. Any City, ST 12345</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact