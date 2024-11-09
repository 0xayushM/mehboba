"use client";

import React from 'react';
import PackageModel from './packageModel';
import PackageModel2 from './packageModel2';

const Hero = () => {
  return (
    <section className="lg:h-screen md:gradient-background">
      <div className='grid md:grid-cols-2 h-full'>
        <div className='md:hidden '>
          <PackageModel2/>
        </div>
        <div className='hidden md:block'>
          <PackageModel/>
        </div>
      <div className="z-10 flex flex-col md:justify-center p-5 gap-0">
          <h1
            color="#FFE8FE"
            className="font-mainheading text-secondaryBg text-[2rem] md:text-[3rem] lg:text-[5rem] leading-none"
          >
            Bursting with <br/> <span className='font-pacifico flavour-gradient text-[1.8rem] md:text-[3rem] lg:text-[5rem]'>Flavour,</span>
          </h1>
       
          <h1
            color="#FFE8FE"
            className="font-mainheading text-[#5523a0] text-[2rem] md:text-[3rem] lg:text-[5rem] leading-none"
          >
            Crafted with <br/> <span className='font-pacifico p-2 love-gradient'>Love</span>
          </h1>
        
          <div color="#FFE8FE" className='flex'>
            <p className="font-content text-justify lg:w-[80%] font-light text-xs md:text-sm lg:text-lg pt-5">
          Discover premium boba balls that transform every sip. At <span className='font-mainheading'>MEHBOBA</span>, we craft each boba ball with precision, ensuring the perfect balance of texture and flavor. Add them to any fruity or creative beverage for a truly exceptional experience.
            </p>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Hero;
