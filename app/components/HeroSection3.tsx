"use client";

import { useState } from "react";
import { FaCircle, FaCopy } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSection3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchMove: true,
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

    return (
        <div className="relative">
            <Slider {...settings}>
                <div>
                    <Card1 />
                </div>
                <div>
                    <Card2 />
                </div>
            </Slider>
        </div>
    );
};

const Card1 = () => {
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

    return (
        <div className="h-screen flex justify-center items-center rounded-md">
            <div className="bg-orange-100 p-4 rounded-md">
                <div className="relative pb-9/16 mb-4" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        src={videoUrl}
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <div className="text-center text-3xl">Explore TOINGG in <span className="text-orange-400" >GPT</span> Store</div>
                <div className="flex justify-center">
                    <ul>
                        <div className="flex my-4">
                            <div className="pt-1">
                                <FaCircle className="w-3 mr-2" />
                            </div>
                            <li>Interactive Communication: Engage in simple or batch call using TOINGG GPT.</li>
                        </div>
                        <div className="flex my-4">
                            <div className="pt-1">
                                <FaCircle className="w-3 mr-2" />
                            </div>
                            <li>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
                        </div>
                        <div className="flex my-4">
                            <div className="pt-1">
                                <FaCircle className="w-3 mr-2" />
                            </div>
                            <li>Data Export: Conveniently export call logs to CSV.</li>
                        </div>
                        <div className="flex my-4">
                            <div className="pt-1">
                                <FaCircle className="w-3 mr-2" />
                            </div>
                            <li>Data Usability: Tailored for users familiar with CSV functionalities.</li>
                        </div>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <button className="text-white px-6 py-3 rounded-md bg-gradient-to-r from-orange-400 to-orange-700">Try Now</button>
                </div>
            </div>
        </div>
    );
};

const Card2 = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <div className="rounded-md bg-black text-white">
                    <div className="mb-2">
                        <div className="flex justify-between items-center px-2 py-2 bg-slate-800 rounded-md ">
                            <div>Python</div>
                            <div className="flex"><FaCopy /> Copy code</div>
                        </div>
                    </div>
                    <div className="bg-black h-[450px] mb-2"></div>
                    <div className="bg-gray-700 p-2 rounded-b-md">
                        <div className="flex">
                            <div>Curl://</div>
                            <div className="flex space-x-2">
                                <img src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782309/pgagi/gbtgw39agjkywg1gm802.png" alt="" />
                                <img src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782309/pgagi/mchzihjoap86icosfuzf.png" alt="" />
                                <img src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782309/pgagi/t2velim8ecm6c87llsao.png" alt="" />
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <img src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782308/pgagi/s4r1qttlangcgtabndzp.png" alt="" />
                            <img src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782308/pgagi/r4f20iq5d2fhavjtjoh2.png" alt="" />
                            <img src="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782308/pgagi/jlxjajdm8nxdq0bxxnhm.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="m-2">
                    <div className="font-bold text-center text-xl">Build your own voice agent</div>
                    <div className="text-gray-700 text-center">in just a few lines of code</div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection3;
