import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8">
      <p className="text-[34px] font-[500] "> Generate Audit</p>
      <div className="flex justify-between gap-2 ">
        <p className="text-[17px] font-[500] opacity-[50%] mt-2 md:w-[60%] w-[60%] ">
          Update your old articles with new relevant links. You can approve the
          changes manually.{" "}
        </p>

        <Link href="/dashboard/integrations/create">
          {" "}
          <button className=" h-[40px] w-[160px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
            Generate
          </button>{" "}
        </Link>
      </div>
      <br />
      <div className="flex justify-between ">
        <div className="flex gap-2 ">
          <p className="h-[40px] w-[20px] rounded-[6px] bg-[#7A73FF] text-white flex justify-center items-center text-[14px] font-[400] "></p>
          <p className="text-[22px] font-[500] mt-1 opacity-90 ">1. Social Media</p>
        </div>
        <button className="  mt-3 h-[40px]  w-[180px] rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] float-right ">
          + Create integration
        </button>
      </div>
      <div>
        <form className=" w-full mx-auto mt-4 ">
          <select
            id=""
            className="border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select an integration</option>
            <option selected>Lorem, ipsum dolor.</option>
            <option selected>Lorem, ipsum dolor.</option>
            <option selected>Lorem, ipsum dolor.</option>
          </select>
        </form>
      </div>
      <br />
      <div>
        <div className="flex gap-2 ">
          <p className="h-[40px] w-[20px] rounded-[6px] bg-[#7A73FF] text-white flex justify-center items-center text-[14px] font-[400] "></p>
          <p className="text-[22px] font-[500] mt-1 opacity-90  ">2. Select Article</p>
        </div>
        <div>
          <form className=" w-full mx-auto mt-4 ">
            <select
              id=""
              className="  border w-full border-[#D0D5DD] outline-none text-[#667085] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select an article</option>
              <option selected>Lorem, ipsum dolor.</option>
              <option selected>Lorem, ipsum dolor.</option>
              <option selected>Lorem, ipsum dolor.</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
