import React from "react";
import img from "../../../../../Images/31.png";
import img1 from "../../../../../Images/20.png";
import img2 from "../../../../../Images/18.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="md:px-8 px-4 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Publications </p>
      <div className="flex  items-center gap-3 flex-wrap mt-3 ">
        <Image src={img} className=" h-[21px] w-[20px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[20px] font-[500] text-[#475467] ">Publications</p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[20px] font-[600] text-[#7A73FF] bg-[#faf9fb] px-3 py-1 rounded-md ">
          #208109
        </p>
      </div>
      <div className="flex gap-4 mt-3 ">
        <p className="text-[20px] font-[500] mt-2 text-[#202224] ">Status :</p>
        <div className="flex mt-3 ">
          <Image src={img2} className=" h-[15px] w-[15px] mt-[2px] " />
          <p className="text-[#047A3A] text-[14px] font-[700] ">Published</p>
        </div>
      </div>
      <p className="text-[18px] font-[500] mt-3 text-[#202224] ">
        Lorem ipsum dolor sit amet consectetur.{" "}
      </p>
      <br />
      <div className=" md:flex md:justify-between   ">
        <div className=" flex gap-2 ">
          <p className="text-[16px] font-[600] ">Batch:</p>
          <p className="text-[#202224] opacity-50 text-16px ">
            Montreal Cleaning Services
          </p>
        </div>
        <div className=" flex gap-2 ">
          <p className="text-[16px] font-[600] ">AutoBlog:</p>
          <p className="text-[#202224] opacity-50 text-16px ">10 Blogs a Day</p>
        </div>
        <div className=" flex gap-2 ">
          <p className="text-[16px] font-[600] ">Integration:</p>
          <p className="text-[#202224] opacity-50 text-16px ">
            My Wix Blog Post
          </p>
        </div>
      </div>
      <div className="md:text-[18px] text-[12px] text-wrap font-[500] flex mt-2 ">
        <p className="">URL: </p>
        <p className="text-[#7A73FF] ">
          {" "}
          https://www.w3.org/Provider/Style/dummy.html
        </p>
      </div>
      <br />
      <div className="flex gap-2 ">
        <p className="h-[40px] w-[20px] rounded-[6px] bg-[#7A73FF] text-white flex justify-center items-center text-[14px] font-[400] "></p>
        <p className="text-[22px] font-[500] mt-1 ">Social Media</p>
      </div>
      <br />
      <div className="flex gap-2 ">
        <select
          id="qty"
          className="border h-[40px] md:w-[340px] w-[230px] border-[#D0D5DD] outline-none text-[#667085] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected> Select a social media </option>
          <option> Facebook </option>
          <option> Twitter </option>
          <option> Instagram </option>
        </select>
        <button className="bg-[#7A73FF] text-white rounded-md h-[40px] w-[90px] ">
          Share
        </button>
      </div>
      <br />
      <div className="h-[62px] w-full bg-[#fbfbff] border-b-2 p-4 ">
        <p className="text-[20px] font-[500] text-[#202224] opacity-[90%] ">
          Indexation
        </p>
      </div>
      <div className="md:flex gap-10 mt-3 ">
        <p>
          <b>Indexer: </b>{" "}
          <span className=" text-[16px] font-[500] opacity-45 ">
            Sparkling Stays- Google Indexer
          </span>{" "}
        </p>
        <p>
          {" "}
          <b>Status:</b>{" "}
          <span className="h-[32px] w-[70px] bg-[#edfdf3] text-[#047A3A] text-[12px] p-1 space-x-3 ">
            Requested
          </span>{" "}
        </p>
      </div>
      <br />
      <div className="h-[62px] w-full bg-[#fbfbff] border-b-2 p-4 ">
        <p className="text-[20px] font-[500] text-[#202224] opacity-[90%] ">
          Logs
        </p>
      </div>
      <div className="md:flex gap-10 mt-3 ">
        <p className=" text-[#202224] opacity-45 text-[16px] ">
          No Extra information is available
        </p>
      </div>
    </div>
  );
}
