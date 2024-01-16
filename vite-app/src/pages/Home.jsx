import React, { useState, useEffect } from 'react';
import { CafeCarousel } from '../components/Carousel/CafeCarousel';
import cafeDesign1 from "../assets/cafeDesign1.jpg";
import cafeDesign2 from "../assets/cafeDesign2.jpg";
import cafeDesign3 from "../assets/cafeDesign3.png";
import cafeDesign4 from "../assets/cafeDesign4.jpg";


function Home() {
  return (
    <div className="">
      <div className="bg-[#f5f5ef] pt-24 grid lg:grid-cols-3 max-md:grid-cols-1">
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
            <h2 className="my-2 py-4 text-2xl font-bold text-[#373333] border-b-4 border-[#c6c0b7]">ABOUT US</h2>
            <p className="my-2 text-xl text-[#1a0906]">ArtisanBrews is more than just a place to eat and drink; it is a place to appreciate the beauty and creativity of different forms of art!</p>
            <button className="my-2 py-3 px-2 bg-[#cb9b73] text-white">Learn More</button>
          </div>
        </div>
        <div className="my-auto">
          <img src={cafeDesign3} className="w-4/5 mx-auto"/>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 max-md:grid-cols-1">
        <div className="z-1 text-center bg-[#f5f5ef]">
          <h2 className="pt-8 my-4 font-bold text-2xl text-[#373333] ">OPEN HOURS</h2>
          <div className="my-2">
            <p className="text-lg">Mon - Friday</p>
            <p className="text-sm">8am - 9am</p>
            <p className="text-lg">Sat - Sunday</p>
            <p className="text-sm">7am - 5pm</p>
          </div>
          <p className="my-4 text-base">Sultana Street, Southweast Vilenz, 9410, Kuala Lumpur</p>
          <button className="p-4 my-4 border-2 border-[#545454]">MAKE A RESERVATION</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Home;