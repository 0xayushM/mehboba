"use client";

import React from 'react';
// import BoxReveal from './boxReveal';
import PackageModel from './packageModel';

const Hero = () => {
  return (
    <section className="h-screen md:gradient-background">
      <div className='grid grid-cols-2 h-full'>
        <div>
          <PackageModel/>
        </div>
      <div className="z-10 flex flex-col justify-center items-center gap-0">
        {/* <BoxReveal delay={0.1}> */}
          <h1
            color="#FFE8FE"
            className="font-mainheading text-secondaryBg text-[4rem] md:text-[5rem] lg:text-[7rem] leading-none"
          >
            Bursting with <span className='font-pacifico flavour-gradient'>Flavour,</span>
          </h1>
        {/* </BoxReveal>
        <BoxReveal delay={0.5}> */}
          <h1
            color="#FFE8FE"
            className="font-mainheading text-[#5523a0] text-[4rem] md:text-[5rem] lg:text-[7rem] leading-none"
          >
            Crafted with <span className='font-pacifico p-2 love-gradient'>Love</span>
          </h1>
        {/* </BoxReveal>
        <BoxReveal delay={0.9}> */}
          <div color="#FFE8FE" className='flex'>
          <p className="font-content text-justify w-[80%] font-light text-sm md:text-lg pt-5">
          Discover premium boba balls that transform every sip. At <span className='font-mainheading'>MEHBOBA</span>, we craft each boba ball with precision, ensuring the perfect balance of texture and flavor. Add them to any fruity or creative beverage for a truly exceptional experience.
          </p>
          </div>
        {/* </BoxReveal> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
