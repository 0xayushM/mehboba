"use client"

import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen'>
      <div className=' w-full h-full md:h-screen flex flex-col lg:flex-row'>
        <div className='relative lg:w-[40%] h-[50%] md:p-20 lg:p-40 lg:pr-0 lg:h-[100%] overflow-visible'>
        </div>
        <div className='flex flex-col items-center justify-center lg:w-[60%] p-5 md:p-20 lg:p-40  z-10'>
          <h1 className='font-mainheading text-secondaryBg text-5xl md:text-7xl lg:text-[7rem]'>
            Bursting <br /> with Flavor,<span className='text-[#5523a0]'> Crafted <br /> with Love</span>
          </h1>
          <p className='font-content text-form font-light text-sm md:text-xl'>Discover premium boba balls that transform every sip into a delightful experience. At <span className='font-mainheading'>Mehboba</span>, we create each ball to deliver perfect texture and taste, ensuring your boba drinks are always extraordinary.</p>
        </div>
      </div>

    </section>
  )
}

export default Hero
