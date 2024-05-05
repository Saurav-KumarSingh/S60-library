import React, { useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoPerson } from "react-icons/io5"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

   
    

    return (
        <nav className="bg-white  z-10 shadow-md sticky top-0 left-0">
           
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    {/* Logo */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to='/' className="flex items-center link-no-border">

                            <img className='h-[55px]' src="./Logo2.png" alt="" />
                        </Link>
                    </div>
                    {/* Hamburger Menu (for mobile) */}
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-orange-400  hover:text-white hover:bg-orange-400 focus:outline-none focus:bg-orange-400 focus:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex flex-grow justify-end items-center space-x-8">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                ` link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-blue-600" : "text-orange-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/library"
                            className={({ isActive }) =>
                                `link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-blue-600" : "text-orange-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            Library
                        </NavLink>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                `link-no-border md:mx-4 md:pr-8 block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-blue-600" : "text-orange-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            About us
                        </NavLink>
                        <NavLink
                            to='/profile'
                            className={({ isActive }) =>
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-orange-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            <div class="flex items-center">
                                <div class="relative">
                                <div class="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-orange-400 rounded-full">
                                <IoPerson />
</div>
                                    <div class="absolute inset-0 rounded-full shadow-inner"></div>
                                </div>

                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink
                            href="#"
                            className={({ isActive }) =>
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-orange-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/library'
                            className={({ isActive }) =>
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-orange-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            Library
                        </NavLink>
                        <NavLink
                            href="/about-us"
                            className={({ isActive }) =>
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-orange-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            About us
                        </NavLink>
                        <NavLink
                            to='/profile'
                            className={({ isActive }) =>
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 ${isActive ? "text-orange-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                            }
                        >
                            <div class="flex items-center">
                                <div class="relative">
                                <div class="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-orange-400 rounded-full">
                                <IoPerson />
</div>
                                    <div class="absolute inset-0 rounded-full shadow-inner"></div>
                                </div>

                            </div>
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
