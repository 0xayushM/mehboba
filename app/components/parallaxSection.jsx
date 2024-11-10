"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({ image, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = section.querySelector(".bg");
    const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.fromTo(bg, {
      backgroundPosition: () => `50% ${-window.innerHeight * getRatio(section)}px`
    }, {
      backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-center justify-center">
      <div
        className="bg absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {children}
    </section>
  );
};

export default ParallaxSection;
