"use client";

import React from 'react';
import BoxReveal from './boxReveal';

const Hero = () => {
  return (
    <section className="h-screen md:gradient-background">
      <div className="h-full p-5 z-10 flex flex-col justify-center items-center gap-0">
        <BoxReveal delay={0.1}>
          <h1
            color="#FFE8FE"
            className="font-mainheading text-secondaryBg text-[4rem] md:text-[5rem] lg:text-[9rem] leading-none"
          >
            Bursting with <span className='font-pacifico flavour-gradient'>Flavour,</span>
          </h1>
        </BoxReveal>
        <BoxReveal delay={0.5}>
          <h1
            color="#FFE8FE"
            className="font-mainheading text-[#5523a0] text-[4rem] md:text-[5rem] lg:text-[9rem] leading-none"
          >
            Crafted with <span className='font-pacifico p-2 love-gradient'>Love</span>
          </h1>
        </BoxReveal>
        <BoxReveal delay={0.9}>
          <div color="#FFE8FE" className='flex justify-center items-center'>
          <p className="font-content text-justify md:w-1/2 font-light text-sm md:text-xl pt-5">
            Discover premium boba balls that transform every sip into a delightful experience. At <span className='font-mainheading'>MEHBOBA</span>, we take pride in crafting each boba ball with precision, ensuring the perfect balance of texture and flavor in every bite. Whether you're enjoying a refreshing milk tea, a fruity bubble drink, or a creative beverage, our boba balls elevate your drink to an extraordinary level.
          </p>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
};

export default Hero;
