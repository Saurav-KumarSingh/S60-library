import React from 'react'
import { IoIosDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Mycard = () => {
  return (
    <div>
      <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">Delba</h1>
    <p class="mt-2 text-sm text-gray-300">
      Semester-3 (DSA)
    </p>
    <div className='flex justify-between '><button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black p-2 bg-white rounded-md">
    View <FaEye className='mx-2 text-lg' />
    </button>
    <button class="mt-2  mx-10 inline-flex cursor-pointer items-center text-sm font-semibold text-black p-2 bg-white rounded-md ">
     Download <IoIosDownload className='text-xl'/>
    </button></div>
  </div>
</div>

    </div>
  )
}

export default Mycard