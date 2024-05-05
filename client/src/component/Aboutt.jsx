import React from 'react';
import Slider from 'react-slick';


const cardData = [
  { imageUrl: './ahtesham.jpg', headline: 'Saurav Kumar Singh', description: ' MERN Developer | Graphic' },
  { imageUrl: './abul.jpg', headline: 'Abul Faiz', description: ' Frontend' },
  { imageUrl: './ahtesham.jpg', headline: 'Ahtesham Hamid Raza ', description: ' Frontend ' },
  { imageUrl: './priyanshu.jpg', headline: 'Priyanshu Kr.', description: ' frontend' },
  { imageUrl: './pawan.jpg', headline: 'Pawan Kr. Verma', description: ' Frontend' },
  { imageUrl: './parneet.jpg', headline: 'Parneet Kour', description: ' Frontend' },
  { imageUrl: './neelima.jpg', headline: 'Nelima singh', description: ' Frontend' }
];

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    {/* front page */}
    <div className='pb-5'>
      <img className='hidden md:block h-[100vh] w-[100vw]' src="./bada.jpg" alt="" />
      <img className='block md:hidden h-[70vh] w-[100vw]' src="./chhota.jpg" alt="" />
    </div>
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
                and preventing unauthorized access. 
              </p>
              <div class="mt-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center py-5 text-6xl font-semibold'>Our Team</div>
    
    <div className="slider-container text-center py-5">
      <Slider {...settings}>
        <div className="  py-5">
          <div >
            <div>< img className='h-[100px] mx-auto rounded-full ' src='./saurav s.jpg' alt='' /></div>
            <div>
              <h2>Saurav Kumar Singh</h2>
              <p>MERN | Graphic</p>
            </div>
          </div>
        </div>
        <div className="  py-5">
          <div >
            <div>< img className='h-[100px] mx-auto rounded-full' src='./ahtesham.jpg' alt='' /></div>
            <div>
              <h2>Ahtesham Hamid Raza</h2>
              <p>Frontend | Graphic</p>
            </div>
          </div>
        </div>
        <div className="  py-5">
          <div >
            <div>< img className='h-[100px] mx-auto rounded-full' src='./abul.jpg' alt='' /></div>
            <div>
              <h2>Abul Faiz</h2>
              <p>Frontend | Graphic</p>
            </div>
          </div>
        </div>
        <div className="  py-5">
          <div >
            <div>< img className='h-[100px] mx-auto rounded-full' src='./pawan.jpg' alt='' /></div>
            <div>
              <h2>Pawan Kumar</h2>
              <p>Frontend</p>
            </div>
          </div>
        </div>
        <div className="  py-5">
          <div >
            <div>< img className='h-[100px] mx-auto rounded-full' src='./priyanshu.jpg' alt='' /></div>
            <div>
              <h2>Priyanshu Kumar</h2>
              <p>Frontend</p>
            </div>
          </div>
        </div>
        <div className="  py-5">
          <div >
            <div>< img className='h-[100px] mx-auto rounded-full' src='./parneet.jpg' alt='' /></div>
            <div>
              <h2>Parneet Kaur</h2>
              <p>Graphic</p>
            </div>
          </div>
        </div>
        <div className="  py-5">
          <div >
            <div>< img className='h-[100px] w-[100px] mx-auto rounded-full' src='./neelima.jpg' alt='' /></div>
            <div>
              <h2>Neelima Singh</h2>
              <p>Graphic</p>
            </div>
          </div>
        </div>

      </Slider>
    </div></>
  );
}

export default Responsive;
