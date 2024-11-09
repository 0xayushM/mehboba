"use client";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu and close button

const Header = () => {
  const [isTransformed, setIsTransformed] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const vh = window.innerHeight;

      if (scrollPosition > 2 * vh && scrollPosition < 3 * vh) {
        setIsTransformed(true);
      } else if (scrollPosition > 0 && scrollPosition <= 2 * vh) {
        setIsTransformed(false);
      } else if (scrollPosition > 3 * vh) {
        setIsTransformed(false);
      } else {
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

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden space-x-6 text-lg absolute md:relative top-full left-0 w-full md:w-auto md:bg-transparent text-primary-black md:text-inherit px-5 py-4 md:py-0`}
        >
          <a href="#home" className="hover:text-primary transition-colors block md:inline">Home</a>
          <a href="#products" className="hover:text-primary transition-colors block md:inline">Products</a>
          <a href="#feedback" className="hover:text-primary transition-colors block md:inline">Feedback</a>
          <a href="#about" className="hover:text-primary transition-colors block md:inline">About</a>
          <a href="#contact" className="hover:text-primary transition-colors block md:inline">Contact</a>

          {/* Social Media Icons in Hamburger Menu */}
          <div className="flex space-x-4 text-xl mt-4">
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
          {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#feedback" className="hover:text-primary transition-colors">Feedback</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        {/* Social Media Icons for Larger Screens */}
        <div className="hidden md:flex space-x-4 text-xl">
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
