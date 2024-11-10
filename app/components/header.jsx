"use client";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isTransformed, setIsTransformed] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const vh = window.innerHeight;

      if (scrollPosition > 1 * vh && scrollPosition < 3 * vh) {
        setIsTransformed(true);
      } else if (scrollPosition > 0 && scrollPosition <= 1 * vh) {
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="z-50 relative">
      <div
        className={`main-tool-bar bg-black/20 text-center flex items-center justify-between h-[80px] w-[100%] top-0 left-0 fixed border-b-[3px] px-5 md:px-10 font-mainheading text-3xl md:text-5xl backdrop-blur-md transition-colors duration-300 ${
          isTransformed ? "border-b-white text-white" : "border-b-primary-black text-primary-black"
        }`}
      >
        <div>MEHBOBA</div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Overlay and Menu */}
        {isMenuOpen && (
          <div className="fixed h-screen inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center transition-opacity duration-300">
            {/* Close Icon on Top */}
            <button
              onClick={closeMenu}
              className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
            >
              <FiX />
            </button>

            {/* Centered Menu Links */}
            <div className="text-center space-y-6 text-white text-2xl">
              <a href="#" onClick={closeMenu} className="block hover:text-primary transition-colors">
                Home
              </a>
              <a href="#products" onClick={closeMenu} className="block hover:text-primary transition-colors">
                Products
              </a>
              <a href="#about" onClick={closeMenu} className="block hover:text-primary transition-colors">
                About
              </a>
              <a href="#feedback" onClick={closeMenu} className="block hover:text-primary transition-colors">
                Feedback
              </a>
              <a href="#contact" onClick={closeMenu} className="block hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex justify-center space-x-4 mt-4 text-xl">
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
          </div>
        )}

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex space-x-6 text-2xl">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#feedback" className="hover:text-primary transition-colors">Feedback</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Social Media Icons for Larger Screens */}
        <div className="hidden lg:flex space-x-4 text-xl">
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
