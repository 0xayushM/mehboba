"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Product from "./components/product";
import Feedback from "./components/feedback"; // Update the import statement
import About from "./components/about";
import Form from "./components/form";
import ParallaxSection from "./components/parallaxSection";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true
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
        {/* <ParallaxSection image="/images/hero.jpeg"> */}
        {/* <div className="bg-hero">
          <Feedback/> {/* Replace Feedback with MarqueeDemo 
        </div> */}
        {/* </ParallaxSection> */}
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
