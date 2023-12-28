import React from 'react';
import { Menu } from '@headlessui/react';
import { VscAccount } from "react-icons/vsc";
import LOGO from "../../assets/artisanBrewsBrand.png";

const navigation = [
    { name: 'HOME', href: '/home', current: true},
    { name: 'MENU', href: '/menu', current: false},
    { name: 'ABOUT US', href: '/about', current: false},
    { name: 'CONTACT US', href: '/contact', current: false}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between bg-[#373333]">
        <div className="text-white m-2 w-32">
            <img src={LOGO} />
        </div>
        <div className="relative my-8">
            {navigation.map((item) => (
                <a 
                    key={item.name} 
                    href={item.href} 
                    className="mx-4 text-white">
                    {item.name}
                </a>
            ))}
        </div>
        <Menu as="div" className="relative">
            <Menu.Button as="div" className="text-white"><VscAccount className="text-3xl m-8"/></Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`}>
                            Edit Profile
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`}>
                            Notification
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`}>
                            Privacy Notice
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    </div>
  )
}
