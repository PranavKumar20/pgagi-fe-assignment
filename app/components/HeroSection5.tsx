"use client";

import React, { useState } from 'react';
import Slider from "react-slick";
import ToolCard from './ToolCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSection5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full mx-1 ${
          i === currentSlide ? "bg-dark" : "bg-light"
        }`}
      ></div>
    ),
  };

  const values = [
    {
      iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782291/pgagi/hqtugcop4nfpyr0aulov.png",
      title: "Fine Tuning",
      description: "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
    },
    {
      iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782306/pgagi/mwd3tqutiqz2e4vmlnzz.png",
      title: "Custom tools",
      description: "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
    },
    {
      iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782306/pgagi/jaynisbqbpauxy56fzpl.png",
      title: "Dedicated infrastructure",
      description: "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-orange-200 to-white py-8 h-screen ">
      <div className="text-center text-2xl font-bold mb-6">
        Scale with Enterprise - grade capabilities
      </div>
      <div className="relative max-w-4xl mx-auto">
        <Slider {...settings}>
          {values.map((value, index) => (
            <div key={index}>
              <ToolCard
                iconUrl={value.iconUrl}
                title={value.title}
                description={value.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection5;
