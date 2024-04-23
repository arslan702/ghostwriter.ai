import React from "react";
import Image from "next/image";
import img from "../../../../../Images/landingpage/23.png";
import img1 from "../../../../../Images/landingpage/24.png";
import img2 from "../../../../../Images/landingpage/25.png";
import img3 from "../../../../../Images/landingpage/26.png";
import img4 from "../../../../../Images/landingpage/27.png";

export default function blog() {
  return (
    <div className="md:px-24 px-4 md:py-8 py-4 ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image src={img} alt="img"/>
          <div className="p-5">
            <h5 className=" text-[24px] font-[400] tracking-tight text-gray-900 dark:text-white">
              1,500 Clicks per Month with AI SEO
            </h5>
            <p className="mb-3 font-[400] text-[16px] text-[#777777] dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
          <div className=" bg-white border h-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image src={img1} alt="img" className="w-full" />
            <div className="p-5">
              <h5 className=" text-[14px] font-[400] tracking-tight text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h5>
              <div className="flex justify-between mt-2 ">
                <p className="text-[#4254FF] text-[12px] ">By Williamson</p>
                <p className="text-[#777777] text-[12px] ">12 Jan, 2024</p>
              </div>
            </div>
          </div>
          <div className=" bg-white border h-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image src={img2} alt="img" className="w-full" />
            <div className="p-5">
              <h5 className=" text-[14px] font-[400] tracking-tight text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h5>
              <div className="flex justify-between mt-2 ">
                <p className="text-[#4254FF] text-[12px] ">By Williamson</p>
                <p className="text-[#777777] text-[12px] ">12 Jan, 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-white border h-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image src={img3} alt="img" className="w-full" />
            <div className="p-5">
              <h5 className=" text-[14px] font-[400] tracking-tight text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h5>
              <div className="flex justify-between mt-2 ">
                <p className="text-[#4254FF] text-[12px] ">By Williamson</p>
                <p className="text-[#777777] text-[12px] ">12 Jan, 2024</p>
              </div>
            </div>
          </div>
          <div className=" bg-white border h-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image src={img4} alt="img" className="w-full" />
            <div className="p-5">
              <h5 className=" text-[14px] font-[400] tracking-tight text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h5>
              <div className="flex justify-between mt-2 ">
                <p className="text-[#4254FF] text-[12px] ">By Williamson</p>
                <p className="text-[#777777] text-[12px] ">12 Jan, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
