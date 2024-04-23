import React from "react";
import img from "../../../../../Images/19.png";
import img1 from "../../../../../Images/20.png";
import img2 from "../../../../../Images/21.png";
import Link from "next/link";

import Image from "next/image";

export default function page() {
  return (
    <div className="md:px-6 px-4 md:py-20 py-8 ">
      <div className="flex justify-between  ">
        <p className="text-[34px] font-[500] "> Presets</p>
        <div className="flex gap-2 mt-4  ">
          <Image src={img2} className=" h-[15px] w-[15px] mt-1 " />
          <p className="text-[14px] font-[600] text-[#7A73FF]  ">Duplicate</p>
        </div>
      </div>

      <div className="flex  items-center gap-3 flex-wrap mt-4 ">
        <Image src={img} className=" h-[30px] w-[30px] " />
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[20px] font-[500] text-[#475467] ">Presets</p>
        <Image src={img1} className=" h-[15px] w-[20px] " />
        <p className="text-[20px] font-[600] text-[#7A73FF] ">
          Lorem ipsum - Preset.
        </p>
      </div>
      <p className="text-[16px] font-[500] leading-[30px] mt-4 opacity-[70%] ">
        Update how your articles are generated through this preset
      </p>
      <p className="text-[16px] font-[500] mt-4 ">Name</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Lorem Ipsum - Preset"
        className="text-[16px] font-[400] h-[40px] w-full outline-none px-4 mt-1 border-[1px] border-[#D0D5DD] rounded-[8px]  "
      />
      <br />
      <br />

      <ol className="flex items-center  ">
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">Base</h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">Content</h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">
              Knowledge
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">
              Formatting
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">
              Structure
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">
              Internal Linking
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">
              External Linking
            </h3>
          </div>
        </li>
        <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#E9E8FF] rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 border-[#7A73FF] border-[2px] ">
              <svg
                className="w-2.5 h-2.5 text-[#7A73FF] dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            {/* <div className="flex w-full bg-[#7A73FF] h-0.5 dark:bg-gray-700"></div> */}
          </div>
          <div className="mt-3">
            <h3 className="font-[600] text-[16px] dark:text-white">
              Visual Media{" "}
            </h3>
          </div>
        </li>
      </ol>

      <div className=" relative md:h-[550px] h-[510px] border-[1px] rounded-[10px]  ">
        <div className=" h-[70px] bg-[#7A73FF0D] flex  md:px-10 px-4 items-center gap-3 ">
          <div className="h-[10px] w-[10px] rounded-full bg-[#7A73FF] mt-1 "></div>
          <p className="text-[22px] font-[500] text-[#7A73FF]  ">Base</p>
        </div>
        <div className="py-5  md:px-10 px-4 ">
          <p className="text-[16px] font-[500] leading-[24px] text-[#344054] ">
            Generation Mode{" "}
          </p>
          <div className=" md:flex flex-col gap-3 mt-1 ">
            <div className="flex gap-4 ">
              <input
                type="checkbox"
                name=""
                id=""
                className="border-[#7F56D9] "
              />
              <p className="text-[16px] font-[400] ">Keywords</p>
            </div>
            <div className="flex gap-4 ">
              <input type="checkbox" name="" id="" />
              <p className="text-[16px] font-[400] ">Title</p>
            </div>
            <div className="flex gap-4 ">
              <input type="checkbox" name="" id="" />
              <p className="text-[16px] font-[400] ">Description</p>
            </div>
            <div className="flex gap-4 ">
              <input type="checkbox" name="" id="" />
              <p className="text-[16px] font-[400] ">Keyword Monitor</p>
            </div>
          </div>

          <br />
          <div>
            <label
              for="message"
              className=" leading-[24px] mb-2 text-[16px] font-[500] text-gray-900 dark:text-white"
            >
              Keywords per Line
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-2 p-2.5 w-full text-sm text-gray-900   rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-[2px] focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your keyword here..."
            ></textarea>
            <p className="text-[14px] font-[400] text-[#4A5568] pt-2 ">
              We'll generate an article for each title..
            </p>
          </div>
        </div>

        <Link href="/">
          {" "}
          <button className="  md:mx-10 mx-5 mt-2 h-[44px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
            Next
          </button>{" "}
        </Link>
      </div>

      <div className="md:flex justify-between md:mt-5 ">
        <Link href="/">
          {" "}
          <button className="  mt-3 h-[45px] border-[#DE5B87]  border-[1px] md:w-[160px] w-full rounded-[6px] text-[#DE5B87] ">
            + Next
          </button>{" "}
        </Link>
        <div className="md:flex gap-2 ">
          <button className="  mt-3 h-[45px] md:w-[160px] w-full rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] md:float-right ">
            Cancel
          </button>
          <button className="  mt-3 h-[45px] md:w-[160px] w-full rounded-[6px] bg-[#7A73FF] text-white md:float-right ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
