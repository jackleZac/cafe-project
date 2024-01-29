import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import LOGO from "../../assets/artisanBrewsBrand.png";

const navigation = [
    { name: 'HOME', href: '/', current: true},
    { name: 'MENU', href: '/menu', current: false},
    { name: 'ABOUT US', href: '/about', current: false},
    { name: 'CONTACT US', href: '/contact', current: false}
]

export const Header = () => {
  const [showMobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => {
    showMobileNav ? (
        setMobileNav(false)
    ) : (
        setMobileNav(true)
    )
  }

  useEffect(() => {
  }, [])
  return (
    <div>
        <header className="w-full h-24 z-30 fixed flex flex-row justify-between bg-[#373333]">
            <div className="text-white m-2 w-32">
                <img src={LOGO} />
            </div>
            <div className="relative my-8 mx-auto max-md:hidden">
                {navigation.map((item) => (
                    <a 
                        key={item.name} 
                        href={item.href} 
                        className="px-4 py-2 text-white hover:border-2 border-slate-200 rounded-md">
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="flex flex-row text-white text-4xl">
                <button><VscAccount className="max-md:hidden mx-2 mx-6"/></button>
                <button onClick={() => handleMobileNav()}><IoMenu className="md:hidden mx-6 active:border-2 border-slate-200 rounded-md"/></button>
            </div>
        </header>
        <nav className={`fixed ${showMobileNav ? 'left-0' : '-left-[100%]'} transition-all duration-700 z-50 w-full h-screen bg-[#c6c0b7] text-center`}>
            <div className="relative">
                <button onClick={() => handleMobileNav()}><IoMdClose className="absolute top-5 right-5 text-white text-4xl active:border-2 border-slate-200 rounded-md"/></button>
                <div className="pt-40 block">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="w-2/5 mx-auto font-bold text-[#ffffff] block py-4 drop-shadow-md active:border-2 border-slate-200 rounded-md">
                        {item.name}
                    </a>
                ))}
                </div>
            </div>
        </nav>
    </div>
  )
}
