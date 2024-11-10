"use client"

import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='gradient-background h-full p-10'>
      <Image
            src='/images/boba_glasses.png'
            alt='diy_kit'
            width={250}
            height={60}  
          />
    </div>
  )
}

export default Footer
