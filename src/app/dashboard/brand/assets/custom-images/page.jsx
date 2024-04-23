import React from "react";
import img from "../../../../../../Images/22.png";
import img1 from "../../../../../../Images/20.png";
import img2 from "../../../../../../Images/25.png";
import img3 from "../../../../../../Images/26.png";
import img4 from "../../../../../../Images/27.png";

import Image from "next/image";
export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8">
      <p className="text-[34px] font-[500] "> Custom Images</p>
      <div className="flex  items-center gap-3 md:mt-4 mt-2 ">
        <Image src={img} className=" h-[20px] w-[20px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[500] text-[#475467] ">Knowledge Base</p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[18px] font-[600] text-[#7A73FF] rounded-md bg-[#F9FAFB] h-[28px]  px-2 flex justify-center items-center ">
          Custom Images
        </p>
      </div>
      <div className="md:flex justify-between md:mt-4 mt-2">
        <p className="mt-2 opacity-[70%] text-[18px] ">
          Upload Your own images and use them across your articles
        </p>
        <div className="flex gap-2 ">
          <form className="h-[44px] w-[180px]">
            <select
              id="countries"
              className=" outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Filter By autoblog</option>
            </select>
          </form>

          <button className="h-[44px] w-[94px] bg-[#7A73FF] rounded-[10px] text-white ">
            Apply
          </button>
        </div>
      </div>
      <br />
      <div className="flex gap-4 md:mt-4 mt-2">
        <div className="bg-[#f8f8ff] h-[250px] w-[250px] rounded-[10px] flex flex-col justify-center items-center ">
          <Image src={img2} className="h-[72px] w-[73px] " />
          <p className="text-[24px] text-[#7A73FF] mt-2 ">Add Image</p>
        </div>
        <div className="bg-[#f8f8ff] h-[250px] w-[250px] rounded-[10px] flex flex-col justify-center items-center ">
          <Image src={img3} className="h-[250px] w-[250px] " />
        </div>
        <div className="bg-[#f8f8ff] h-[250px] w-[250px] rounded-[10px] flex flex-col justify-center items-center ">
          <Image src={img4} className="h-[250px] w-[250px] " />
        </div>
      </div>
    </div>
  );
}
