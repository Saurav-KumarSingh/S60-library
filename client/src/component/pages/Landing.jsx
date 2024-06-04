import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Carousel from "./Carousel";
import axios from 'axios';


const Home = () => {
    axios.defaults.withCredentials = true;
    const Navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:1688/home')
            .then(result => {
                console.log(result)
                if (result.data !== "Success") { Navigate('/login') }
            })
            .catch(console.log(error))

    }, [])

    return (
        <>
            <div>
                <section>
                    <div >
                        <div
                            class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid "
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <div class="pr-2 md:mb-14 py-14 md:py-0">
                                <h1
                                    class="text-3xl font-bold text-black-900 xl:text-5xl lg:text-3xl"
                                    style={{ fontFamily: "cursive" }}
                                >
                                    <span class="block w-full pb-2">There Is No Friend </span>
                                    As Loyal As a Book
                                </h1>
                                <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                                    Explore our vast collection of books for every interest and
                                    academic need. From fiction to textbooks, discover resources to
                                    enhance your learning journey. Visit us today and dive into a
                                    world of knowledge!
                                </p>
                                <div class="mt-4">
                                    <a
                                        href=""
                                        class="flex items-center w-[150px] text-indigo-700 hover:bg-indigo-700 hover:text-white border border-indigo-600 py-2 px-6 gap-2 rounded"
                                    >
                                        <span>View More</span>
                                        <svg
                                            className="w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
                                <img
                                    id="heroImg1"
                                    class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
                                    src="./book-pile.jpg"
                                    alt="Awesome hero page"
                                    width="500"
                                    height="488"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* end of first page */}

                {/* Second Page */}

                <section>
                    <div>
                        <div
                            class="items-center w-10/12 grid-cols-2 gap-5 mx-auto overflow-x-hidden lg:grid "
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <div class="pb-10 overflow-hidden md:p-10 lg:p-0 pe-3 sm:pb-0">
                                <img
                                    id="heroImg1"
                                    class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-5/6 sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0 "
                                    src="./Logo2.png"
                                    alt="Awesome hero page"

                                />
                            </div>

                            <div class="pr-2 md:mb-14 py-14 md:py-0">
                                <h1
                                    class="text-3xl font-bold text-black-900 xl:text-6xl lg:text-3xl"
                                    style={{ fontFamily: "cursive" }}
                                >
                                    <span class="block w-full font-mulli">ABOUT US</span>
                                </h1>
                                <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                                    "Super 60 Library System" is an advanced library management
                                    system with cutting-edge features. It boasts a vast collection
                                    of 60 million books, accessible through an intuitive online
                                    platform. Users can easily search, borrow, and return books,
                                    with automated reminders for due dates. The system includes
                                    AI-driven recommendation engines, ensuring personalized
                                    suggestions for readers. It offers seamless integration with
                                    e-readers and mobile devices, promoting reading on-the-go. Super
                                    60 implements robust security measures, safeguarding user data
                                    and preventing unauthorized access. With its efficient
                                    cataloging and tracking capabilities, it streamlines library
                                    operations, making it a preferred choice for libraries
                                    worldwide.
                                </p>
                                <div class="mt-4">
                                    <a
                                        href=""
                                        class="flex items-center w-[150px] text-indigo-700 hover:bg-indigo-700 hover:text-white border border-indigo-600 py-2 px-6 gap-2 rounded"
                                    >
                                        <span>View More</span>
                                        <svg
                                            className="w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* about */}

                <div class=" w-full">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8  lg:py-20">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="pb-1 text-5xl font-bold text-orange-400 py-2">We Provides Solutions</h2>
                            <p class="mt-3 text-lg pt-3 font-semibold">
                                We are helping hands and provide authentic notes, PTU solved PYQ, MOCK test PYQ, markings & syllabus and other study materials for FREE!

                            </p>
                        </div>
                        <div class="mt-10 text-center grid-cols-4 sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
                            <div class="flex flex-col">
                                <dt class="order-2 mt-2 text-lg leading-6 font-medium ">
                                    Notes
                                </dt>
                                <dd class="order-1 text-7xl font-bold text-orange-400">100+</dd>
                            </div>
                            <div class="flex flex-col mt-10 sm:mt-0">
                                <dt class="order-2 mt-2 text-lg leading-6 font-medium ">Syllabus</dt>
                                <dd class="order-1 text-7xl font-bold text-orange-400 ">1600</dd>
                            </div>
                            <div class="flex flex-col mt-10 sm:mt-0">
                                <dt class="order-2 mt-2 text-lg leading-6 font-medium ">
                                    PYQ
                                </dt>
                                <dd class="order-1 text-7xl font-bold text-orange-400 ">1200</dd>
                            </div>
                            <div class="flex flex-col mt-10 sm:mt-0">
                                <dt class="order-2 mt-2 text-lg leading-6 font-medium ">
                                    Road MAPS
                                </dt>
                                <dd class="order-1 text-7xl font-bold text-orange-400 ">90</dd>
                            </div>
                        </div>
                    </div>
                </div>



                {/* CARD */}


                <div class=" w-full">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8  lg:py-20">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="pb-1 text-5xl font-bold text-black py-2">Browse study materials by Semester</h2>
                        </div>
                        <div class="mt-10 text-center grid-cols-4 sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
                            <div class="flex flex-col">
                                <Link><img src="./sem1.jpg" alt="" /></Link>
                            </div>
                            <div class="flex flex-col">
                                <Link><img src="./sem2.jpg" alt="" /></Link>
                            </div>
                            <div class="flex flex-col">
                                <Link><img src="./sem3.jpg" alt="" /></Link>
                            </div>
                            <div class="flex flex-col">
                                <Link><img src="./sem4.jpg" alt="" /></Link>
                            </div>
                            <div class="flex flex-col">
                                <Link><img src="./sem5.jpg" alt="" /></Link>
                            </div>
                            <div class="flex flex-col">
                                <Link><img src="./sem6.jpg" alt="" /></Link>
                            </div>
                            <div class="flex flex-col">
                                <Link><img src="./sem7.jpg" alt="" /></Link>
                            </div>
                            <div class="flex flex-col">
                                <Link><img src="./sem8.jpg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* carousel */}
                {/* <sect>
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="pb-1 text-5xl font-bold text-black py-2">What Students say about us</h2>
                    </div>
                    <Carousel />
                </sect> */}
            </div>
        </>
    );
};

export default Home;