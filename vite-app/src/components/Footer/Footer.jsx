import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ABOUT = [
    { name: 'Who We Are', href: '/'},
    { name: 'Our Menu', href: '/'},
    { name: 'Latest Promotion', href: '/'}
]

const CONTACT = [
    { name: 'Phone: 108-5AR32M', href: '/'},
    { name: 'Email: artisanbrews@gmail.com', href: '/'},
    { name: 'Address: Sultana Street', href: '/'}
]

export const Footer = () => {
  return (
    <div className='flex flex-col divide-y bg-[#c6c0b7]'>
        <div className='h-24'>
            
        </div>
        <div className='flex flex-row items-stretch p-24'>
            <div className='basis-1/3'>
                <h3 className='font-bold'>About Us</h3>
                <ul>
                    {ABOUT.map((link) => (
                        <li className=''><a href={link.href}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
            <div className='basis-1/3'>
                <h3 className='font-bold'>Contact Us</h3>
                <ul>
                    {CONTACT.map((link) => (
                        <li className=''><a href={link.href}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
            <div className='basis-1/3'>
                <h3 className='font-bold'>Our Newsletter</h3>
                <p>Subscribe to our newsletter to receive discounts,  announcement events, and career opportunities!</p>
                <form action="" className='my-2'>
                    <input type="text" placeholder="email@gmail.com" className="text-sm p-2"/>
                    <input type="submit" value="SUBSCRIBE" className="bg-[#1a0906] text-white text-sm p-2"/>
                </form>
            </div>
        </div>
        <div className='basis-1/3 h-36 py-4'>
            <h4 className='text-center'>Connect with Us</h4>
            <div className='flex flex-row justify-center my-2'>
                <a className='p-2 text-xl' href='/'><FaInstagram /></a>
                <a className='p-2 text-xl' href='/'><FaFacebook /></a>
                <a className='p-2 text-xl' href='/'><FaWhatsapp /></a>
            </div>
            <p className='text-xs text-center my-2'>All Right Reserved</p>
        </div>
    </div>
  )
}
