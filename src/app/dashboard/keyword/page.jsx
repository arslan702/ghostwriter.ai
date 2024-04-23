import React from "react";
import { BsClockHistory } from "react-icons/bs";
import Link from "next/link";

export default function page() {
  return (
    <div className="md:px-6 px-2 md:py-20  py-8">
      <div className="md:flex justify-between ">
        <p className="text-[34px] font-[500] ">Keyword Monitors</p>
        <div className="text-[#7A73FF] flex  gap-1 border-[1px] border-[#7A73FF] rounded-lg h-[35px] justify-center items-center px-2 ">
          <p className="text-[14px] font-[400] ">Watch Tutorial</p>
          <BsClockHistory className="mt-1 h-[13px] w-[13px] " />
        </div>
      </div>
      <div className="md:flex justify-between " >
      <p className="text-[16px] mt-2 font-[500] md:w-[70%] w-full text-[#000000] opacity-[70%] ">
      The Keyword Monitor constantly finds keywords with high ranking potential. Monitors work with presets to craft articles focused on these keywords. 
Set up an AutoBlog with a Preset and Monitor for automated generation
      </p>
      <Link href="/dashboard/keyword/create"  >  <button className=" h-[40px] w-[160px] mt-2 rounded-[6px] bg-[#7A73FF] text-white  ">
            + New Monitor 
          </button> </Link>
      </div>
     
      {/* tables  */}
      <br />
      <div className="overflow-x-auto border-[1px] rounded-t-lg ">
        <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-4 text-[18px] font-[500] text-[#202224] opacity-[90%]  ">
            <tr>
              <th scope="col" className="w-1/6 px-6 py-5">
              NAME{" "}
              </th>
              <th scope="col" className="w-1/6 px-6 py-5">
              URL{" "}
              </th>
              
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  text-[16px]  font-[500] text-[#202224] opacity-[90%] ">
              <Link href="/dashboard/publications/create">
                {" "}
                <th
                  scope="row"
                  className="w-1/6 px-6 py-4 font-[500]   whitespace-nowrap md:text-wrap  dark:text-white"
                >
                  {" "}
                  Sparkling stays- google Indexer{" "}
                </th>
              </Link>
              <td className="w-1/6 px-6 py-4  ">https://www.w3.org/Provider/Style/dummy.html</td>
             
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  text-[16px]  font-[500] text-[#202224] opacity-[90%] ">
              <Link href="/dashboard/publications/create">
                {" "}
                <th
                  scope="row"
                  className="w-1/6 px-6 py-4 font-[500]   whitespace-nowrap md:text-wrap  dark:text-white"
                >
                  {" "}
                  Sparkling stays- google Indexer{" "}
                </th>
              </Link>
              <td className="w-1/6 px-6 py-4  ">https://www.w3.org/Provider/Style/dummy.html</td>
             
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
