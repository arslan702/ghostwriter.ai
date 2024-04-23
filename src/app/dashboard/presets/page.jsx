"use client";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="md:px-6 px-4 md:py-20 py-8 ">
      <p className="text-[34px] font-[500] "> Presets</p>
      <div className="md:flex justify-between ">
        <p className="text-[17px] font-[500] opacity-[70%] md:max-w-2xl ">
          Presets tell Ghostwriter AI how articles should be generated. You can
          modify a Preset and reuse it multiple times.
        </p>

        <Link href="/dashboard/presets/create">
          {" "}
          <button className="  h-[45px] w-[174px] rounded-[6px] bg-[#7A73FF] text-[16px] text-white flex justify-center items-center  ">
            + New Preset
          </button>{" "}
        </Link>
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
