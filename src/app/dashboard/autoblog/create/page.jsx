import React from "react";
import img from "../../../../../Images/29.png";
import img1 from "../../../../../Images/20.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="md:px-12 px-4 md:py-20 py-8  overflow-hidden ">
      <p className="text-[34px] font-[500] "> Autoblogs </p>
      <div className="flex  items-center gap-3  md:mt-4 mt-2 ">
        <Image src={img} className=" h-[21px] w-[20px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="md:text-[20px] text-[14px] font-[500] text-[#475467] ">
          AutoBlogs{" "}
        </p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="md:text-[20px] text-[14px] text-center font-[600] text-[#7A73FF] bg-[#faf9fb] px-3 py-1 rounded-md ">
          10 Blogs a Day
        </p>
      </div>
      <div className="md:flex justify-between ">
        <p className=" text-[18px] font-[500] opacity-70 mt-4 md:max-w-xl ">
          Create a new AutoBlog to automatically generate & Publish articles to
          your website.
        </p>
        <button className="border-[1px] mt-2 border-[#7A73FF] text-[#7A73FF] rounded-[6px] text-[18px] font-[500] h-[44px] w-[180px] ">
          + Create Assets
        </button>
      </div>
      <br />
      <div className="md:flex gap-4  px-2 ">
        <div className="mt-2">
          <label htmlFor="">Name</label> <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="10 blogs a day "
            className="px-3 h-[46px] md:w-[450px] w-full mt-2 border-[1px] rounded-lg "
          />
        </div>
        <form className="md:w-[450px] w-full  mt-2 ">
          <label
            for=""
            className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
          >
            Preset
          </label>
          <select
            id=""
            className="border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Lorem, ipsum dolor.</option>
            <option selected>Lorem, ipsum dolor.</option>
            <option selected>Lorem, ipsum dolor.</option>
            <option selected>Lorem, ipsum dolor.</option>
          </select>
        </form>
      </div>
      <div className="md:flex gap-4  px-2 ">
        <form className="md:w-[450px] w-full mt-2 ">
          <label
            for="qty"
            className="block mb-2 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
          >
            Quantity
          </label>
          <select
            id="qty"
            className="border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>5</option>
            <option selected>4</option>
            <option selected>3</option>
            <option selected>2</option>
            <option selected>1</option>
          </select>
        </form>

        <form className="md:w-[450px] w-full mt-2 ">
          <label
            for="countries"
            className="block mt-8 text-[16px] leading-[24px] font-[500]  text-[#344054] dark:text-white"
          ></label>
          <select
            id="countries"
            className="border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Every day</option>
            <option selected>Weekly</option>
            <option selected>Monthly</option>
          </select>
        </form>
      </div>
      <div>
        <p className=" opacity-[40%] text-[16px] leading-[27px] mt-2 px-2 ">
          All articles will be generated at once in the selected interval.{" "}
          <br />
          Example, If you choose 10 articles every week, 10 articles will be
          generated at once every week.
        </p>
        <button className="border-[1px] px-2 md:float-right mt-2 border-[#7A73FF] text-[#7A73FF] rounded-[6px] text-[18px] font-[500] h-[44px]  ">
          + Create Integration
        </button>
      </div>
      <div>
        <p className="text-[18px] font-[500] text-[#344054] mt-8 ">
          Integration
        </p>
        <form className=" w-full mx-auto  mt-2 ">
          <select
            id="countries"
            className="border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>My wix blog post </option>
            <option selected>My shopify blog post </option>
            <option selected>My webflow blog post </option>
          </select>
        </form>
      </div>
      <br />
      <div>
        <p>Status</p>
        <div className="flex gap-3 mt-2 ">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F00FF] "></div>
            <span className="ms-3 text-[20px] opacity-[50%] font-[500] text-[#344054] dark:text-gray-300">
              Paused
            </span>
          </label>
        </div>
      </div>
      <div className="md:flex justify-between  md:mt-40  mt-2 ">
        <button className=" mt-3 h-[54px] border-[#DE5B87]  border-[1px] md:w-[160px] w-full rounded-[6px] text-[#DE5B87] ">
          Delete
        </button>
        <div className="md:flex gap-2 ">
          <button className="  mt-3 h-[54px] md:w-[160px] w-full rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] md:float-right ">
            Cancel
          </button>
          <button className="  mt-3 h-[54px] md:w-[160px] w-full rounded-[6px] bg-[#7A73FF] text-white md:float-right ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
