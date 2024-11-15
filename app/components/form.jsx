"use client"

import React, { useState } from 'react';
import HeroModel from './heroModel';
import FeedbackForm from './feedbackForm';

const Form = () => {
  return (
    <section id='contact' className='h-screen' >
      <div className='w-full h-screen flex flex-col lg:flex-row items-center'>
        <div className='hidden lg:block relative w-[60%] md:p-10 lg:pr-0 lg:h-[100%] overflow-hidden'>
          <div className="relative z-[-1] md:z-0 top-[15%]">
            <HeroModel />
          </div>
        </div>
        <div className='flex w-full flex-col h-full items-center justify-center lg:w-[60%] p-5 md:py-20 lg:py-20 z-10 gap-10'>
          
          <h1 className='w-full font-mainheading text-[2rem] md:text-[3rem]'>
            We’re Listening – <br/><span className='text-secondaryBg font-pacifico text-[1.5rem] md:text-[2rem] lg:text-[3rem] leading-none'>Tell Us What You Think</span>
          </h1>
          <FeedbackForm/>
          </div>
      </div>
    </section>
  );
};

export default Form;
