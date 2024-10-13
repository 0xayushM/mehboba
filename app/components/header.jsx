"use client";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isTransformed, setIsTransformed] = useState(true); // Start as true

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const vh = window.innerHeight;

      // Change to white if scrolled past 200vh
      if (scrollPosition > 2 * vh && scrollPosition < 3 * vh) {
        setIsTransformed(true);
      }
      // Change to black if scrolled below 200vh and above 0vh
      else if (scrollPosition > 0 && scrollPosition <= 2 * vh) {
        setIsTransformed(false);
      }
      else if(scrollPosition > 3 * vh) {
        setIsTransformed(false);
      }
      // Ensure it's white if scrolled back to the top (0vh)
      else {
        setIsTransformed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="z-50 relative">
      <div
        className={`main-tool-bar bg-transparent text-center flex items-center justify-between h-[80px] w-[100%] top-0 left-0 fixed border-b-[3px] px-5 md:px-10 font-mainheading text-3xl md:text-5xl backdrop-blur-md transition-colors duration-300 ${
          isTransformed ? "border-b-white text-white" : "border-b-primary-black text-primary-black"
        }`}
      >
        <div>MEHBOBA</div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
