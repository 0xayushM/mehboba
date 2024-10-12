"use client"

import React, { useState } from 'react';
import HeroModel from './heroModel';

const Form = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Submit data to the backend (e.g., an API endpoint that handles Excel)
    try {
      const response = await fetch('/api/submitFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, feedback }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const { message } = await response.json();
        setErrorMessage(message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to submit feedback. Please try again later.');
    }
  };

  return (
    <section className='h-screen' >
      {/* <div className='w-full h-screen flex flex-col lg:flex-row'>
        <div className='relative lg:w-[40%] h-[50%] md:p-20 lg:p-40 lg:pr-0 lg:h-[100%] overflow-visible'>
          <div className="relative z-[-1] md:z-0">
            <HeroModel />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:w-[60%] p-5 md:p-20 lg:p-20 z-10'>
          
          <h1 className='font-mainheading text-5xl md:text-7xl lg:text-[70px] text-center mb-10'>
            We Value Your Feedback
          </h1>
          
          </div>
      </div> */}
    </section>
  );
};

export default Form;
