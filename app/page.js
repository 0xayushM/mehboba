"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Product from "./components/product";
import Feedback from "./components/feedback";
import About from "./components/about";
import Form from "./components/form";
import ParallaxSection from "./components/parallaxSection";

// Dynamically import gsap with ScrollTrigger plugin
const gsap = dynamic(() => import("gsap"), { ssr: false });
const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), { ssr: false, loadableGenerated: { modules: ["gsap/ScrollTrigger"] } });

export default function Home() {
  useEffect(() => {
    const initializeGSAP = async () => {
      if (typeof window !== "undefined") {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Adding smooth scrolling effect using CSS for a simple alternative
        document.body.style.scrollBehavior = "smooth";

        // Set up ScrollTrigger for individual sections
        ScrollTrigger.create({
          trigger: "#smooth-content",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        });

        const sections = document.querySelectorAll(".parallax-section");
        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      }
    };

    initializeGSAP();
  }, []);

  return (
    <div id="smooth-wrapper">
      <Header />
      <div id="smooth-content">
        <ParallaxSection image="/images/hero_bg.png">
          <Hero />
        </ParallaxSection>
        <ParallaxSection image='/images/product.jpg'>
          <Product />
        </ParallaxSection>
        <ParallaxSection>
          <About />
        </ParallaxSection>
        <ParallaxSection image="/images/hero_background.jpg">
          <Feedback/>
        </ParallaxSection>
        <ParallaxSection image="/images/hero_bg.png">
          <Form />
        </ParallaxSection>
        <Footer />
      </div>
    </div>
  );
}
