"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Product from "./components/product";
import Feedback from "./components/feedback";
import About from "./components/about";
import Form from "./components/form";
import ParallaxSection from "./components/parallaxSection";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Adding smooth scrolling effect using CSS for a simple alternative
    document.body.style.scrollBehavior = "smooth";

    // Set up ScrollTrigger for individual sections
    ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,  // This creates the smooth effect on scroll
    });

    // Optionally add parallax effect on specific sections
    const sections = document.querySelectorAll(".parallax-section");
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }}
      );
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <Header />
      <div id="smooth-content">
        <ParallaxSection image="/images/hero_bg.png">
          <Hero />
        </ParallaxSection>
        <ParallaxSection image="">
          <Product />
        </ParallaxSection>
        <ParallaxSection image="/images/hero.jpeg">
          <About />
        </ParallaxSection>
        <ParallaxSection image="/images/hero_background.jpg">
          <Form />
        </ParallaxSection>
        <Footer />
      </div>
    </div>
  );
}
