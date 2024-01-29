import React, { useState, useEffect } from 'react';
import { CafeCarousel } from '../components/Carousel/CafeCarousel';
import cafeDesign1 from "../assets/cafeDesign1.jpg";
import cafeDesign2 from "../assets/cafeDesign2.jpg";
import cafeDesign3 from "../assets/cafeDesign3.png";
import cafeDesign4 from "../assets/cafeDesign4.jpg";


function Home() {
  return (
    <div className="">
      <div className="bg-[#f5f5ef] pt-24 grid lg:grid-cols-3 max-md:grid-cols-1 max-md:pt-12">
        <div className="my-12 lg:col-span-2 lg:border-r-4 max-md:border-b-4 border-[#c6c0b7]">
          <img src={cafeDesign1} className="lg:w-2/3 mx-auto"/>
        </div>
        <div className="my-auto mx-auto w-4/5 px-12 text-[#373333] text-center">
          <h1 className="font-bold text-2xl my-4">ENJOY THE ARTISTIC VIBE AT OUR CAFE</h1>
          <p className="my-4">while sipping on coffee and munching on wraps</p>
          <button className="my-2 mb-12 text-white p-4 bg-[#545454] rounded-3xl">VIEW MENU</button>
        </div>
      </div>
      <div className="bg-[#c6c0b7] max-md:text-center max-md:px-12">
        <div className="px-12 pt-12 pb-3">
          <h2 className="text-2xl my-4 font-bold">PROMOTION AND EVENTS</h2>
          <p className="text-lg my-4">JOIN OUR LOYALTY PROGRAM TO ENJOY EXCLUSIVE DISCOUNTS</p>
          <div className="">
            <button className="w-24 text-white text-center py-3 bg-[#cb9b73] rounded">Register</button>
            <button className="w-24 my-4 ml-6 text-white text-center py-3 bg-[#cb9b73] rounded">Login</button>
          </div>
        </div>
        <div className='pb-12'>
          <CafeCarousel />
        </div>
      </div>
      <div className=" bg-[#f5f5ef] grid lg:grid-cols-2 max-md:grid-cols-1">
        <div className="my-auto">
          <div className="w-3/5 mx-auto text-center">
            <h2 className="my-6 py-4 text-2xl font-bold text-[#373333] border-b-4 border-[#c6c0b7]">ABOUT US</h2>
            <p className="my-2 text-xl text-[#1a0906]">ArtisanBrews is more than just a place to eat and drink; it is a place to appreciate the beauty and creativity of different forms of art!</p>
            <button className="my-2 py-3 px-2 bg-[#cb9b73] text-white">Learn More</button>
          </div>
        </div>
        <div className="my-auto">
          <img src={cafeDesign3} className="w-4/5 mx-auto"/>
        </div>
      </div>
      <div className="">
        <div className="h-48 bg-[#c6c0b7]"></div>
        <div className="h-3/4 relative bg-[#f5f5ef] grid lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <h2 className="w-3/4 mx-auto mb-3 mt-6 pb-4 text-2xl font-bold text-center text-[#545454] border-b-4 border-[#c6c0b7]">OUR LOCATION</h2>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7976.848424821097!2d110.34889370512823!3d1.5146835747744618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba740cd72c8fd%3A0x5543ccabe94477a2!2sGala%20City%20Commercial%20Centre!5e0!3m2!1sen!2smy!4v1705730379626!5m2!1sen!2smy" 
              className="w-3/4 h-96 mx-auto my-12"></iframe>
            </div>
          </div>
          <div className="">
            <div className="w-1/3 px-12 py-12 bg-[#d9d9d9] lg:absolute text-center -top-20 right-36 max-md:relative max-md:top-0 max-md:right-0 max-md:w-full">
              <h2 className="pt-8 my-4 font-bold text-2xl text-[#373333] ">OPENING HOURS</h2>
              <table className="text-left mx-auto my-2">
                <tbody>
                  <tr>
                    <td>MONDAY</td>
                    <td className="pl-4">9AM - 9PM</td>
                  </tr>
                  <tr>
                    <td>TUESDAY</td>
                    <td className="pl-4">9AM - 9PM</td>
                  </tr>
                  <tr>
                    <td>WEDNESDAY</td>
                    <td className="pl-4">9AM - 9PM</td>
                  </tr>
                  <tr>
                    <td>THURSDAY</td>
                    <td className="pl-4">9AM - 9PM</td>
                  </tr>
                  <tr>
                    <td>FRIDAY</td>
                    <td className="pl-4">9AM - 9PM</td>
                  </tr>
                  <tr>
                    <td>SATURDAY</td>
                    <td className="pl-4">8AM - 7PM</td>
                  </tr>
                  <tr>
                    <td>SUNDAY</td>
                    <td className="pl-4">8AM - 7PM</td>
                  </tr>
                </tbody>
              </table>
              <p className="my-4 mx-8 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 93250, Kuching, Malaysia</p>
              <button className="p-4 my-4 border-2 border-[#545454] trasition duration-700 ease-in-out hover:rounded-2xl hover:px-6">MAKE A RESERVATION</button>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Home;