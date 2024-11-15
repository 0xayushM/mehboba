"use client"

import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='gradient-background p-10 h-full flex flex-col md:flex-row items-center justify-center'>
      <div className='text-primaryBg h-full flex flex-col items-center justify-between'>
        
        <h1 className='font-pacifico items-center flex pb-5 text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-primaryBg'> Blending Perfection,<div className='hidden md:block pr-5'>
        <Image
            src='/images/boba_glasses.png'
            alt='diy_kit'
            width={250}
            height={50}  
          />
        </div> Sharing Smiles.</h1>
        <div className='md:hidden pb-5'>
        <Image
            src='/images/boba_glasses.png'
            alt='diy_kit'
            width={250}
            height={50}  
          />
        </div>
        <p>© 2024 MEHBOBA - All rights reserved | Cookies | Privacy policy | Return policy | General conditions</p>
        </div>
    </div>
  )
}

export default Footer
