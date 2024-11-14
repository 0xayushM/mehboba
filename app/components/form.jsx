"use client"

import React, { useState } from 'react';
import HeroModel from './heroModel';
import FeedbackForm from './feedbackForm';

const Form = () => {
  return (
    <section id='contact' className='h-screen' >
      <div className='w-full h-screen flex flex-col lg:flex-row'>
        <div className='relative lg:w-[40%] h-[50%] md:p-20 lg:p-40 lg:pr-0 lg:h-[100%] overflow-visible'>
          <div className="relative z-[-1] md:z-0">
            <HeroModel />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:w-[60%] p-5 md:p-20 lg:p-20 z-10'>
          
          <h1 className='font-mainheading text-5xl md:text-7xl lg:text-[70px] text-center mb-10'>
            We Value Your Feedback
          </h1>
          <FeedbackForm/>
          </div>
      </div>
    </section>
  );
};

export default Form;
