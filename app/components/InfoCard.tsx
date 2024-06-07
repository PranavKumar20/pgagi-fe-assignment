"use client";

import { FC } from "react";

interface InfoCardProps {
  iconUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const InfoCard: FC<InfoCardProps> = ({ iconUrl, title, description, buttonText }) => {
  return (
    <div className="relative flex flex-col items-center text-center h-screen justify-center">
      <div className="absolute left-[50px] transform -translate-x-1/2 h-[700px] w-0.5 bg-gradient-to-b from-white via-orange-500 to-white"></div>
      <div className="absolute right-[50px] transform translate-x-1/2 h-[700px] w-0.5 bg-gradient-to-b from-white via-orange-500 to-white"></div>
      <div className="absolute top-[150px] transform -translate-y-1/2 w-[400px] h-0.5 bg-gradient-to-r from-white via-orange-500 to-white"></div>
      <div className="absolute bottom-[150px] transform translate-y-1/2 w-[400px] h-0.5 bg-gradient-to-r from-white via-orange-500 to-white"></div>
      
      <img src={iconUrl} alt="icon" className="w-12 h-12 mb-4" />
      <h2 className="text-xl font-semibold text-black px-16 ">{title}</h2>
      <p className="text-gray-700 mt-2 px-16">{description}</p>
      <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md">{buttonText}</button>
    </div>
  );
};

export default InfoCard;
