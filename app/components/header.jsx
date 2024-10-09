"use client"
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    
    useEffect(() => {

        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
          });
      }, []);

  return (
    <section className="z-50 relative ">
        <div className='main-tool-bar bg-transparent text-center flex items-center justify-center h-[80px] w-[100%] top-0 left-0 fixed border-b-[3px] font-mainheading text-3xl md:text-5xl border-b-primary-black text-primary-black'>MEHBOBA</div>
    </section>
  );
};

export default Header;
