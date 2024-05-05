import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import axios from 'axios';

const Home = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                axios.defaults.withCredentials = true;
                const response = await axios.get('http://localhost:1688/home');
                setUserData(response.data); // Assuming response.data contains user data
                console.log(userData)
            } catch (error) {
                console.log('Failed to fetch user data:', error.response.data);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div>

            {userData ? (
                <>
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[40vh] w-[100vw] overflow-hidden'><img src="https://www.pngkey.com/png/full/50-509797_grad-vector-blue-silhouette-graduation.png" alt="" /></div>
      <div style={{position:'relative',top:'-80px'}}><img className='rounded-full h-[160px]  mx-7 border-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFH4LQT0X19iwY5MWGJiaZWP2rE9KsUdsUjg&s" alt="" />
        <br />
        <div className='grid grid-cols-2'>
          <div className='mx-7 border-e-2'>
            <p className=' font-semibold text-3xl my-2'>{userData? (<p>{userData.name}</p>):(<p>Saurav</p>)} </p>
            <p className='my-2'>Hello, I'm {userData.name}. I'm passionate about learning . I enjoy learning and love exploring new things. Looking forward to connecting and sharing experiences with others.</p>
          </div>
          <div>
            <label htmlFor="Name">Name</label>
            <p className='m-2 text-lg font-semibold'>{userData? (<p>{userData.name}</p>):(<p>Saurav</p>)}</p>
            <label htmlFor="college">College</label>
            <p className='m-2 text-lg'><FaSchool className='inline me-2'/> SVIET</p>
            <label htmlFor="course">Course</label>
            <p className='m-2 text-lg'><MdSchool className='inline me-2'/> B.Tech. (CSE)</p>
            <label htmlFor="Info">Info</label>
            <p className='m-2 text-lg'> <MdEmail className='inline me-2'/>{userData.email}</p>

            {/* <p className='m-2 text-lg'><IoCall className='inline me-2'/> +91 7253094384</p> */}
            
          </div>
        </div>
      </div></>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
