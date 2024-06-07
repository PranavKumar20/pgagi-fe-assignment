"use client"
import { FC } from "react";

export const HeroSection2: FC = () => {
    const iconUrls = [
        "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782311/pgagi/bocgkwlrkeorbgjl6j94.png",
        "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782310/pgagi/v7dri2c1rqujenlohizv.png",
        "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782310/pgagi/cx0xxbd5jddx4jjiircq.png",
        "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782309/pgagi/y5ox4ilbmjzrlcizaocy.png",
        "https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717782309/pgagi/czlqvvmo9nyp300rfwuh.png"
    ];
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

    return (
        <div className="flex flex-col h-screen sm:h-full items-center px-4 pt-32 md:p-8">
            <div className="mb-4 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold text-[#797979]">
                    Automate your agent with 5000+ integrations like
                </h2>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 my-10">
                {iconUrls.map((url, index) => (
                    <img key={index} src={url} alt={`icon-${index}`} className="w-12 h-12 md:w-12 md:h-12" />
                ))}
            </div>
            <div className="flex justify-center w-full max-w-4xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        src={videoUrl}
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default HeroSection2;
