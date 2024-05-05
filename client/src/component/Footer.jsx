import React from 'react'
import { Link,NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white border-y mt-5">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                
                    <div>
                    <Link to="/" className="flex items-center">
                    <img
                        src="./Logo2.png"
                        className="mr-3 h-16"
                        alt="Logo"
                    />
                    </Link>
                    <br />
                    <p className='w-[300px]'>Explore our vast collection of books for every interest and academic need. From fiction to textbooks, discover resources to enhance your learning journey.  </p>
                    </div>
                    
                
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Quick Links</h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4">
                            <NavLink to="/home" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/library" className={({isActive}) =>
                                        `block py-2 pb-4 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                Library
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className={({isActive}) =>
                                        `block py-2  pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                                About us
                            </NavLink>
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
                © 2024
                
                    S60-library.com
                . All Rights Reserved.
            </span>
            
        </div>
    </div>
</footer>
  )
}

export default Footer