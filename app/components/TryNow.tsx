"use client"
import { FC } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export const TryNow: FC = () => {
    return (
        <div className="bg-gradient-to-t from-white to-orange-200 h-screen rounded-md  mx-8 p-8 border shadow-md">
            <div>
                <div className="font-bold pt-10 text-[40px]">Try Now</div>
                <div>Get a call from Toingg</div>
                <div className="mt-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <div className="relative flex items-center border rounded-md">
                        <span className="absolute left-2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                                alt="Indian Flag"
                                className="w-6 h-4"
                            />
                        </span>
                        <span className="absolute px-10 text-gray-500">
                            <FaChevronDown />
                        </span>
                        <input
                            type="text"
                            placeholder="+91"
                            className="w-full pl-16 pr-8 py-2 border-none rounded-md focus:ring-0"
                        />
                    </div>
                    <div className="relative">
                        <select className="w-full px-4 py-2 border rounded-md appearance-none">
                            <option value="">Choose your language</option>
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                        </select>
                        <span className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                            <FaChevronDown />
                        </span>
                    </div>
                </div>
                <div className="flex justify-center mt-6 rounded-full">
                    <div className="p-3 text-white bg-orange-400 rounded-full text-3xl" >
                    <IoCall />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TryNow;
