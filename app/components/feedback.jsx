"use client"

import React, { useEffect, useRef, useState } from 'react';

const Feedback = () => {
  const stackAreaRef = useRef(null);

  const [feedbackData, setFeedbackData] = useState([
    { sub: "Jamie C.", content: "MEHBOBA is my new favorite! Flavor and texture are spot on." },
    { sub: "Alex B.", content: "The best I’ve ever tasted! Highly recommended to everyone." },
    { sub: "Taylor R.", content: "A must-have in every pantry. Delicious and unique!" },
    { sub: "Jordan M.", content: "The flavors are incredible, and it’s perfect for my recipes!" },
    { sub: "Morgan S.", content: "I’m obsessed! MEHBOBA brings joy to every meal." },
  ]);
  const [backgroundColors, setBackgroundColors] = useState([
    "#e7d6ff", "#d5b8fc", "#c195fc", "#b07df2", "#a66df1"
  ]);

  useEffect(() => {
    rotateCards();
  }, [feedbackData]);

  function rotateCards() {
    const cards = stackAreaRef.current.querySelectorAll(".card");
    let angle = 0;

    cards.forEach((card, index) => {
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle -= 10;
    });
  }

  const handleCardClick = () => {
    setFeedbackData((prevData) => {
      const updatedData = [...prevData];
      const topCard = updatedData.shift();
      updatedData.push(topCard);

      return updatedData;
    });

    setBackgroundColors((prevColors) => {
      const updatedColors = [...prevColors];
      const topColor = updatedColors.shift();
      updatedColors.push(topColor);

      return updatedColors;
    });
  };

  return (
    <div id="feedback" className="h-full w-full text-secondaryBg">
      <div className="lg:h-screen w-full h-full flex flex-col items-center justify-center p-10 md:p-32">
        <div className='flex w-full flex-col lg:flex-row h-full items-center lg:justify-center'>
          <div className="items-center h-1/2 md:h-full flex justify-center p-4 md:p-8 w-full">
            <div className="text-sm md:text-lg text-justify w-full leading-relaxed flex flex-col items-center font-mainheading ">
                <h1 className='text-secondaryBg font-pacifico text-[1.5rem] md:text-[2rem] lg:text-[4rem] leading-none'>Here's what our</h1>
              <div className='flex'>
                <h1 className='text-secondaryBg text-[2rem] md:text-[2rem] lg:text-[5rem] leading-none'>customers </h1>
                <h1 className='text-secondaryBg font-content text-[0.7rem] md:text-[2rem] lg:text-[2.5rem] leading-none pl-2 flex items-center justify-center'>say <br/> about</h1>
              </div>
                <h1 className='text-secondaryBg text-[3rem] md:text-[3rem] lg:text-[8rem] leading-none'>MEHBOBA!</h1>
            </div>
          </div>

          <div className='h-full w-full'>
            <div className="w-full h-full flex items-center justify-center flex-col ">
              <div ref={stackAreaRef} className="stack-area w-full h-full relative items-center flex justify-center">
                <div className="h-fit flex justify-center items-center top-0 box-border">
                  <div className="h-full w-full relative">
                    {feedbackData.map((feedback, index) => (
                      <div
                        key={index}
                        className={`card w-[200px] md:w-[225px] md:h-[225px] lg:w-[350px] h-[200px] lg:h-[350px] box-border p-[15px] sm:p-[35px] rounded-xl flex justify-between flex-col transition-transform duration-500 shadow-xl`}
                        onClick={index === 0 ? handleCardClick : null} // Only make the top card clickable
                        style={{
                          zIndex: feedbackData.length - index, // Dynamic zIndex
                          backgroundColor: backgroundColors[index], // Dynamic background
                        }}
                      >
                        <div className='h-full flex flex-col justify-between text-center leading-none '>
                          <div className="font-light font-mainheading text-3xl md:text-4xl lg:text-5xl">" <span className='font-content text-sm md:text-xl lg:text-3xl leading-tight '>{feedback.content}</span> "</div>
                          <div className="font-pacifico text-lg md:text-xl lg:text-2xl">{feedback.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feedback;
