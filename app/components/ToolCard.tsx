import React from 'react';

interface ToolCardProps {
  iconUrl: string;
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ iconUrl, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-6 my-12 border">
      <img src={iconUrl} alt="icon" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center text-black mb-2 mt-10">{title}</h2>
      <p className="text-gray-700 text-center mt-16 ">{description}</p>
    </div>
  );
};

export default ToolCard;
