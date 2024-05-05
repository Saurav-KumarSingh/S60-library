import React, { Component } from "react";
import Slider from "react-slick";

function PauseOnHover() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container py-3 w-[98vw]">
            <Slider {...settings}>
                <div>

                    <div className="relative m-auto h-[60vh] w-[80vw] rounded-md text-center shadow-md">
                        <img
                            src="./ahtesham.jpg"
                            alt="AirMax Pro"
                            className="z-0  m-auto  rounded-full object-cover h-[100px] w-[100px]"
                        />
                        <p className="pt-4 px-6">Your online library provides an exceptional user experience! The interface is intuitive, making it easy to navigate and find resources. The variety of materials available, from e-books to academic journals, caters to diverse learning needs. The search function is robust, quickly retrieving relevant content. Additionally, the accessibility features ensure all students can benefit from the wealth of knowledge within the library. Thank you for enriching our learning journey!</p>
                    </div>


                </div>
                <div>

                    <div className="relative m-auto h-[60vh] w-[80vw] rounded-md text-center shadow-md">
                        <img
                            src="./priyanshu.jpg"
                            alt="AirMax Pro"
                            className="z-0  m-auto  rounded-full object-cover h-[100px] w-[100px]"
                        />
                        <p className="pt-4 px-6">I absolutely love the convenience of the online library! It's incredibly easy to access all the resources I need for my research and studies from the comfort of my own home. The user-friendly interface makes it simple to navigate through the vast collection of books, articles, and databases. Thank you for providing such a valuable resource</p>
                    </div>


                </div>
                <div>

                    <div className="relative m-auto h-[60vh] w-[80vw] rounded-md text-center shadow-md">
                        <img
                            src="./abul.jpg"
                            alt="AirMax Pro"
                            className="z-0  m-auto  rounded-full object-cover h-[100px] w-[100px]"
                        />
                        <p className="pt-4 px-6">Using the online library has been incredibly convenient and efficient for my studies. The vast collection of resources, easy search functionality, and accessible platform have greatly enhanced my learning experience. Thank you for providing such a valuable resource!"</p>
                    </div>


                </div>
                <div>

                    <div className="relative m-auto h-[60vh] w-[80vw] rounded-md text-center shadow-md">
                        <img
                            src="./parneet.jpg"
                            alt="AirMax Pro"
                            className="z-0  m-auto  rounded-full object-cover h-[100px] w-[100px]"
                        />
                        <p className="pt-4 px-6">I just wanted to express my appreciation for the online library resources provided. The extensive collection of e-books and academic journals has been invaluable for my research projects. The user-friendly interface makes navigation a breeze, and the option to access materials from anywhere has truly enhanced my learning experience. Thank you for such a valuable resource.</p>
                    </div>


                </div>
                <div>

                    <div className="relative m-auto h-[60vh] w-[80vw] rounded-md text-center shadow-md">
                        <img
                            src="./pawan.jpg"
                            alt="AirMax Pro"
                            className="z-0  m-auto  rounded-full object-cover h-[100px] w-[100px]"
                        />
                        <p className="pt-4 px-6">The online library experience was seamless, offering a vast array of resources accessible from anywhere. Navigation was intuitive, and the search function efficiently located relevant materials. The ability to borrow e-books and audiobooks enhanced convenience, while the user-friendly interface facilitated a pleasant and productive reading environment.</p>
                    </div>


                </div>
            </Slider>
        </div>
    );
}

export default PauseOnHover;
