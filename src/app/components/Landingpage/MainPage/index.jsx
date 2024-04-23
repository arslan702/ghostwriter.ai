import React from "react";
import Image from "next/image";
import img from "../../../../../Images/landingpage/1.png";
import img1 from "../../../../../Images/landingpage/2.png";
import Navbar from "../Navbar";

export default function MainPage() {
  return (
    <div>
      <div className="  ">
        <Image src={img} alt="img" className="h-[560px] w-[100%] relative" />
        <div className="absolute top-8 left-8 right-8 ">
          <Image src={img1} alt="img" className="w-[100%] h-[500px] " />
        </div>
        <div className="absolute top-8 w-full ">
          <Navbar />
          <div className="flex justify-center items-center">
            <div className="w-[534px] flex justify-center items-center flex-col">
            <div className="font-[700] text-[40px] leading-[47px] text-[#000000] text-center">
              GENERATE <span className="bg-gradient-to-br from-purple-500 via-purple-700 to-gray-900 text-transparent bg-clip-text">HIGH-QUALITY ARTICLES</span> THAT AUTO-PUBLISH TO YOUR BLOG
            </div>
            <div className="text-center text-[#000000] text-[16px] leading-[24px] mt-4">
            Immediately access hundreds of unique, niche-optimized articles tailored to your specific needs.
            </div>
            <div className="relative">
              <input className="flex justify-center items-center bg-[#ffffff] h-[50px] w-[452px] rounded-[66px] border-[1px] p-4 border-[#000000] mt-10"
                placeholder="Enter your email"
              />
              <button className="absolute h-[37px] w-[181px] bg-[#7A73FF] top-[46px] right-2 inset-y-0 right-0 flex items-center px-4 rounded-[66px] text-white ml-2">Get 3 Free Article</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
