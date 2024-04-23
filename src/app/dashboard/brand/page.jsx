import React from "react";

export default function page() {
  return (
    <div className="md:px-12 px-2 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Knowledge Base</p>
      <div className="md:flex justify-between gap-2 ">
        <p className="text-[16px] font-[500] opacity-[70%] ">
          You can upload documents, videos, websites, and any information to
          create a knowledge base. <br />
          You can then instruct Writer AI to generate articles for a specific
          Knowledge Base
        </p>
        <div className="flex gap-2 ">
          <button className="  mt-3 h-[44px] w-[160px] rounded-[6px] border-[#7A73FF]  border-[1px]  text-[#7A73FF] float-right ">
            + Custom Image
          </button>
          <button className="  mt-3 h-[44px] w-[120px] rounded-[6px] bg-[#7A73FF] text-white float-right ">
            + Add
          </button>
        </div>
      </div>
      <br />
      <div className="relative overflow-x-auto border-[0.6px] ">
        <table className="w-full text-sm border-[#D4D4D4] rounded-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[18px] h-[68px] font-[800] text-[#202224]   opacity-[90%] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-[18px] font-[600] text-[#202224] opacity-[90%] whitespace-nowrap dark:text-white"
              >
                Lorem, ipsum dolor.
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
