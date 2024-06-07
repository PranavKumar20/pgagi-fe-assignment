"use client";

import Slider from "react-slick";
import InfoCard from "./InfoCard";

export const HeroSection4 = () => {
    const values = [
        {
            iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782308/pgagi/gpib7owtjrpluti4otar.png",
            title: "Ultra-Fast Response",
            description: "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.",
            buttonText: "Try now",
        },
        {
            iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782307/pgagi/atw6recshboghkzv56o2.png",
            title: "Smart Interruption Management",
            description: "Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations.",
            buttonText: "Try now",
        },
        {
            iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782307/pgagi/szzt4hecpuxqkd9iqcu3.png",
            title: "Advanced Memory Recall",
            description: "Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.",
            buttonText: "Try now",
        },
        {
            iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782307/pgagi/r3ba00dahzankrv5gipo.png",
            title: "Dynamic Conversational Flows",
            description: "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways.",
            buttonText: "Try now",
        },
        {
            iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782307/pgagi/z6n3nqc2nurlxqgiuw5p.png",
            title: "Custom AI Solutions",
            description: "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.",
            buttonText: "Try now",
        },
        {
            iconUrl: "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782307/pgagi/khet7ddxb67cxh8oy75q.png",
            title: "Scalability at Your Fingertips",
            description: "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.",
            buttonText: "Try now",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        touchMove: true,
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {values.map((value, index) => (
                    <InfoCard
                        key={index}
                        iconUrl={value.iconUrl}
                        title={value.title}
                        description={value.description}
                        buttonText={value.buttonText}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default HeroSection4;
