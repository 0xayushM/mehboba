"use client";

import { useEffect, useRef, isValidElement } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor,
  duration = 0.75,
  delay = 0, // Added delay with default value of 0
}) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  const childColor = isValidElement(children) && children.props.color ? children.props.color : "#5046e6";

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }} // Applied delay here
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, delay, ease: "easeIn" }} // Applied delay here
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: childColor,
        }}
      />
    </div>
  );
};

export default BoxReveal;
