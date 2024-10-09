"use client";

import React from "react";

const About = () => {
  return (
    <div className="gradient-background text-primaryBg h-screen w-full flex flex-col items-center justify-center p-4 md:p-10">
      <h1 className="font-mainheading my-5 md:my-10 text-2xl md:text-3xl lg:text-4xl">
        ABOUT MEHBOBA
      </h1>
      <h1 className="font-pacifico mt-0 mb-5 p-0 text-center leading-none text-4xl md:text-[600%]">
        Welcome to Mehboba.
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
        <h1 className="font-mainheading mt-0 mb-5 p-0 md:pr-5 leading-none text-3xl md:text-[600%] text-center md:text-left">
          Celebrate Every
        </h1>
        <div className="w-full md:w-[200px] text-center md:flex flex-wrap justify-center hidden md:mt-5">
          <h1 className="font-mainheading text-xl md:text-2xl">
            Blended with passion, Crafted for you.
          </h1>
        </div>
        <h1 className="font-mainheading mt-0 mb-5 p-0 md:pl-5 leading-none text-3xl md:text-[600%] text-center md:text-left">
          Sip of Our
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
        <h1 className="font-mainheading mt-0 mb-10 p-0 md:px-5 leading-none text-2xl md:text-[600%] text-center md:text-left">
          <span className="font-pacifico overflow-visible pr-2">Delightful</span> Boba
        </h1>
        <div className="w-full md:w-[200px] text-center hidden md:flex flex-wrap justify-center mt-8">
          <h1 className="font-mainheading text-xl md:text-2xl">
            Made Just for You and Your Unique Taste.
          </h1>
        </div>
      </div>
      <div className="items-center justify-center p-4 md:p-8 w-full md:w-4/5">
        <p className="text-sm md:text-lg text-justify leading-relaxed font-content">
          At <span className="font-mainheading">Mehboba</span>, we believe in the power of shared experiences and the joy of coming together. 💖 Our boba teas are expertly crafted from the finest ingredients,
          bringing together a delightful fusion of flavors that tell a story with every sip you take. 🥤 Whether you're enjoying a moment with friends or treating yourself to a well-deserved break, our drinks are
          designed to elevate your day and create unforgettable memories. 🌟 Join us on this flavorful journey and savor the sweet moments that life has to offer. ✨
        </p>
      </div>
    </div>
  );
};

export default About;
