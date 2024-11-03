import React from 'react';
import Marquee from 'react-fast-marquee';

import img1 from '../assets/1.jpg';  // Import your logo images here
// component working..................
const LogoCarousel = () => {
  const logos = [
    { src: img1, alt: 'Logo 1' },
    { src: img1, alt: 'Logo 2' },
    { src: img1, alt: 'Logo 3' },
    { src: img1, alt: 'Logo 4' },
    { src: img1, alt: 'Logo 5' },
   
  ];

  return (
    <div className='mt-10 '>
      <div>
    <section className="flex h-10 justify-center items-center w-screen mb-2 ">
      <div className="flex overflow-hidden w-6/7">
        <Marquee gradient pauseOnHover={false} className="flex items-center" speed={50} direction='right' >
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center h-[100px] mx-12 ">
              <img src={logo.src} className="w-24 h-20 transition duration-300 ease-in-out hover:border-4 hover:border-blue-200 rounded-lg" alt={logo.alt} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
    <section className="flex h-40 justify-center items-center w-screen mb-2">
      <div className="flex overflow-hidden w-6/7">
        <Marquee gradient pauseOnHover={false} className="flex items-center" speed={50} direction='left'>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center h-[100px] mx-12  ">
              <img src={logo.src} className="w-24 h-20 transition duration-300 ease-in-out hover:border-4 hover:border-blue-200 rounded-lg" alt={logo.alt} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
    <section className="flex h-10 justify-center items-center w-screen mb-2">
      <div className="flex overflow-hidden w-6/7">
        <Marquee gradient pauseOnHover={false} className="flex items-center" speed={50} direction='right'>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center h-[100px] mx-12 ">
              <img src={logo.src} className="w-24 h-20 transition duration-300 ease-in-out hover:border-4 hover:border-blue-200 rounded-lg" alt={logo.alt} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
    </div>
    </div>
  );
};

export default LogoCarousel;
