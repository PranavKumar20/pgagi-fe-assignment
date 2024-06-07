"use client";

import { FC } from "react";
import { FaLock, FaPhone, FaShieldAlt, FaVolumeUp, FaFileAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const TrustAndSafetyCard: FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white">
      <FaLock className="text-orange-500 text-6xl mb-4" />
      <h2 className="text-2xl font-semibold mb-2">The highest standards of trust and safety.</h2>
      <p className="text-gray-700 mb-6 mt-8">
        We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center pt-8">
          <IoCall className="text-orange-500 text-4xl mb-2" />
          <p>Call Monitoring</p>
        </div>
        <div className="flex flex-col items-center pt-8">
          <FaShieldAlt className="text-orange-500 text-4xl mb-2" />
          <p>Prompt Injection</p>
        </div>
        <div className="flex flex-col items-center py-8">
          <FaVolumeUp className="text-orange-500 text-4xl mb-2" />
          <p>Rate Limits</p>
        </div>
        <div className="flex flex-col items-center py-8">
          <FaFileAlt className="text-orange-500 text-4xl mb-2" />
          <p>Internal Hard Audits</p>
        </div>
      </div>
    </div>
  );
};

export default TrustAndSafetyCard;
